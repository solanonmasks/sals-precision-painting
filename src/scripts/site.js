// Interactive bits: animations, the before/after slider, and the quote form.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE = 'cubic-bezier(.16,.84,.3,1)';

// ---------- Hero + scroll animations ----------
if (!reduceMotion) {
  const hero = document.getElementById('heroImg');
  hero?.animate(
    [{ transform: 'scale(1.14)', filter: 'saturate(.6)' }, { transform: 'scale(1)', filter: 'saturate(1)' }],
    { duration: 2600, easing: EASE, fill: 'both' }
  );
  document.getElementById('heroBar')?.animate(
    [{ transform: 'scaleY(0)' }, { transform: 'scaleY(1)' }],
    { duration: 1400, delay: 500, easing: EASE, fill: 'both' }
  );

  // Items fade up as they scroll into view, staggered 90ms between siblings.
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      io.unobserve(el);
      const parent = el.parentElement;
      const sibs = parent ? Array.from(parent.querySelectorAll(':scope > [data-reveal], :scope > * > [data-reveal]')) : [];
      const i = Math.max(0, sibs.indexOf(el)) % 6;
      el.animate([{ opacity: 0, transform: 'translateY(36px)' }, { opacity: 1, transform: 'none' }], { duration: 1000, delay: i * 90, easing: EASE, fill: 'both' });
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92) {
      // Already on screen when the page loads: animate straight away.
      el.animate([{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'none' }], { duration: 900, delay: 120, easing: EASE, fill: 'both' });
    } else {
      el.style.opacity = '0';
      io.observe(el);
    }
  });
}

// ---------- Before / after slider ----------
const ba = document.getElementById('ba');
if (ba) {
  const pairs = JSON.parse(document.getElementById('baData').textContent);
  const before = ba.querySelector('.ba-before');
  const after = ba.querySelector('.ba-after');
  const caption = document.getElementById('baCaption');
  const buttons = document.querySelectorAll('.pair-btn');
  let dragging = false;
  let sweeping = false;

  const setPos = (pct) => {
    const p = Math.max(0, Math.min(100, pct));
    ba.style.setProperty('--pos', p + '%');
    ba.setAttribute('aria-valuenow', String(Math.round(p)));
  };
  const posFromEvent = (e) => {
    const r = ba.getBoundingClientRect();
    setPos(((e.clientX - r.left) / r.width) * 100);
  };

  ba.addEventListener('pointerdown', (e) => { dragging = true; sweeping = false; posFromEvent(e); });
  ba.addEventListener('pointermove', (e) => { if (dragging || e.pointerType === 'mouse') { sweeping = false; posFromEvent(e); } });
  ['pointerup', 'pointerleave', 'pointercancel'].forEach((t) => ba.addEventListener(t, () => { dragging = false; }));

  // Keyboard: left/right arrow keys move the divider.
  ba.addEventListener('keydown', (e) => {
    const now = parseFloat(ba.getAttribute('aria-valuenow'));
    if (e.key === 'ArrowLeft') { setPos(now - 5); e.preventDefault(); }
    if (e.key === 'ArrowRight') { setPos(now + 5); e.preventDefault(); }
  });

  buttons.forEach((btn) => btn.addEventListener('click', () => {
    const p = pairs[Number(btn.dataset.index)];
    buttons.forEach((b) => { const on = b === btn; b.classList.toggle('active', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
    before.srcset = p.before.srcset; before.src = p.before.src;
    after.srcset = p.after.srcset; after.src = p.after.src;
    ba.dataset.ratio = p.ratio;
    caption.dataset.ratio = p.ratio;
    caption.textContent = p.caption;
    sweeping = false;
    setPos(50);
  }));

  // First time the slider scrolls into view, sweep once to hint it can be dragged.
  if (!reduceMotion) {
    const keys = [[0, 50], [700, 22], [1500, 78], [2200, 50]];
    const sweep = () => {
      sweeping = true;
      const t0 = performance.now();
      const step = (t) => {
        if (!sweeping || dragging) return;
        const el = t - t0;
        if (el >= keys[keys.length - 1][0]) { setPos(50); sweeping = false; return; }
        let k = 1;
        while (el >= keys[k][0]) k++;
        const [ta, pa] = keys[k - 1], [tb, pb] = keys[k];
        const u = (el - ta) / (tb - ta);
        const eased = u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
        setPos(pa + (pb - pa) * eased);
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const baIO = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { baIO.disconnect(); setTimeout(sweep, 300); }
    }, { threshold: 0.5 });
    baIO.observe(ba);
  }
}

// ---------- Quote form ----------
const form = document.getElementById('quoteForm');
if (form) {
  const thanks = document.getElementById('formThanks');
  const errorBox = document.getElementById('formError');
  const submitBtn = form.querySelector('.submit-btn');

  form.querySelectorAll('.chip').forEach((chip) => chip.addEventListener('click', () => {
    chip.setAttribute('aria-pressed', chip.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
  }));

  const showError = (msg) => { errorBox.textContent = msg; errorBox.hidden = false; };
  const showThanks = () => { form.hidden = true; thanks.hidden = false; thanks.focus(); };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorBox.hidden = true;

    // Check required fields.
    let firstBad = null;
    form.querySelectorAll('input').forEach((input) => {
      const bad = !input.checkValidity();
      input.setAttribute('aria-invalid', bad ? 'true' : 'false');
      if (bad && !firstBad) firstBad = input;
    });
    if (firstBad) { showError('Please add your name and phone number (and check your email if you added one).'); firstBad.focus(); return; }

    const data = new FormData(form);
    const jobs = Array.from(form.querySelectorAll('.chip[aria-pressed="true"]')).map((c) => c.dataset.job);
    data.set('jobs', jobs.join(', '));

    const endpoint = form.dataset.endpoint;
    if (!endpoint) {
      // No form service set up yet: open the visitor's email app instead.
      const body = [
        `Name: ${data.get('name')}`,
        `Phone: ${data.get('phone')}`,
        `Email: ${data.get('email') || '-'}`,
        `What needs painting: ${jobs.join(', ') || '-'}`,
        '',
        `${data.get('details') || ''}`,
      ].join('\n');
      window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent('Quote request')}&body=${encodeURIComponent(body)}`;
      showThanks();
      return;
    }

    submitBtn.disabled = true;
    try {
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error('Bad response');
      showThanks();
    } catch {
      showError('Sorry, that didn’t send. Please call or email instead.');
      submitBtn.disabled = false;
    }
  });
}
