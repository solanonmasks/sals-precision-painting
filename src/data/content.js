// All the words and photos on the site live here.
// To change text, edit it here and save. You don't need to touch the page layout.

// ---------- Contact ----------
export const CONTACT = {
  phoneDisplay: '(778) 251-8840',
  phoneLink: 'tel:17782518840',
  email: 'carter.precisionpainting@gmail.com',
  facebook: 'https://www.facebook.com/p/Sals-Precision-Painting-100088216351099/',
  area: 'Kelowna & surrounding areas',
};

// ---------- Quote form ----------
// To have quote requests emailed to Carter, make a free form at https://formspree.io
// and paste its address here, e.g. 'https://formspree.io/f/abcdwxyz'.
// While this is empty, pressing "Request my quote" opens the visitor's email app
// with everything they typed, addressed to Carter's email above.
export const FORM_ENDPOINT = '';

// ---------- Before / after slider ----------
// "before" and "after" are file names in src/assets/sal/.
// ratio is '4/3' for landscape photos or '3/4' for portrait photos.
export const PAIRS = [
  { label: 'Blue kitchen', before: 'kitchen-before.jpg', after: 'kitchen-after.jpg', ratio: '4/3', caption: 'Kitchen cabinet refinishing. Dark espresso cabinets sprayed in deep blue and white for a factory-smooth finish.' },
  { label: 'White kitchen', before: 'kitchen2-before.png', after: 'kitchen2-after.jpg', ratio: '4/3', caption: 'Kitchen cabinet refinishing. Orange-toned wood cabinets refinished in bright white, with a contrasting painted island.' },
  { label: 'Vanity', before: 'vanity-before.jpg', after: 'vanity-after.jpg', ratio: '3/4', caption: 'Bathroom vanity and walls. A white vanity refinished in deep blue, with fresh colour on the walls.' },
  { label: 'Built-ins', before: 'builtin-before.jpg', after: 'builtin-after.jpg', ratio: '3/4', caption: 'Hallway built-ins and walls. White cabinetry sprayed in deep blue, with the hallway repainted to match.' },
  { label: 'Home for sale', before: 'house-before.jpg', after: 'house-after.jpg', ratio: '4/3', caption: 'Siding, soffit, fascia and gutters painted on a home going up for sale.' },
];

// ---------- What we do ----------
export const SERVICES = [
  { t: 'Full interiors', d: 'Renovations, new builds and repaints. Drywall fixes, sanding and skim coats where they’re needed.', img: 'bedroom-dark.jpg' },
  { t: 'Small projects', d: 'A single bedroom, a bathroom, doors or a feature wall.', img: 'bedroom-light.jpg' },
  { t: 'Kitchen cabinet refinishing', d: 'Sprayed for a factory-finish result, at a fraction of the cost of new cabinets.', img: 'kitchen-after.jpg' },
  { t: 'Exterior painting', d: 'Siding, soffit, fascia and gutters.', img: 'house-after.jpg' },
  { t: 'Staining', d: 'Cedar homes, outbuildings and docks, restained to protect the wood.', img: 'gambier-back.jpg' },
  { t: 'Fences and decks', d: 'Fence restains and refinishing, in natural wood tones or solid colour.', img: 'fence-stain.jpg' },
];

// ---------- The prep is the job ----------
export const POINTS = [
  'Spray finish for factory-finish results',
  '10 to 14 days, start to finish',
  'WCB coverage and fully insured',
  'Many references available',
];

// ---------- On the job (from Facebook) ----------
export const LOG = [
  { d: 'Oct 14', t: 'Another room painted.', b: 'Garage is ready for priming.', img: 'bedroom-light.jpg' },
  { d: 'Oct 13', t: 'A bedroom, and a lot of scraping.', b: 'Next: sand and skim coat the bottom half of the garage walls, paint another bedroom, and fix a couple of “homeowner special” walls in the living room.', img: 'bedroom-dark.jpg' },
  { d: 'Oct', t: 'Feature wall, fixed.', b: 'Sanded it down, caulked the top edge to clean up the old cut line, recut it and rolled the wall out smooth.', img: 'feature-wall.jpg' },
  { d: 'Sep 27', t: 'Gambier Island restain.', b: 'Main house, shop, wood shed, water shed and dock.', img: 'gambier-progress.jpg' },
  { d: 'Aug 7', t: 'That’s a wrap.', b: 'Siding, soffit, fascia and gutters painted on a home going up for sale at the end of September.', img: 'house-after.jpg' },
  { d: 'May 12', t: 'A trip to Gibsons to restain a fence.', b: 'We restained this one five years ago. This time the client wanted something different.', img: 'fence-white.jpg' },
];

// ---------- Reviews ----------
// c is the colour of the bar on top of each card.
export const REVIEWS = [
  { q: 'Carter and his crew were so awesome to deal with! We had our 1969 house painted (full exterior) plus additional things we added along the way. Carter went over everything in detail, explaining the complete process beforehand, as well as keeping us informed throughout the job. Very happy with the end result.', n: 'Mark B.', w: 'Full exterior, 1969 home', c: '#3B5BFF' },
  { q: 'Carter is amazing! He refinished our kitchen cabinets and they turned out so beautiful, like they were brand new! He was efficient and fair priced and very kind and knowledgeable. Would highly recommend for all sorts of painting projects.', n: 'Marissa L.', w: 'Kitchen cabinets · Okanagan', c: '#7B4DFF' },
  { q: 'I’m super pleased with Carter’s work. His crew was prompt, professional, and paid close attention to every detail. The new colours completely refreshed my space, and the finish is flawless. They wrapped up right on schedule and left everything tidy.', n: 'Robert S.', w: 'Repaint', c: '#1E9BFF' },
  { q: 'Great guy for your interior and exterior too.', n: 'Mike L.', w: 'Interior and exterior', c: '#7B4DFF' },
  { q: 'My husband and myself are very happy with the job we have had done.', n: 'Eve Marie C.', w: 'Fence restain', c: '#3B5BFF' },
];

// ---------- Quote form: "What needs painting?" chips ----------
export const JOBS = ['Interior', 'Cabinets', 'Exterior', 'Staining', 'Fence or deck'];
