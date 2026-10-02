export type Spot = {
  slug: string;
  name: string;
  type: "Place" | "Food Stall";
  area: string;
  image: string;
  note: string;
  address: string;
  landmark: string;
  contributor: string;
  added: string;
};

export const phoneDisplay = "+91 234567890";
export const phoneHref = "tel:+91234567890";
export const whatsappHref = "https://wa.me/1234567890?text=Hi%20travelguide%2C%20I%20found%20you%20on%20your%20website%20and%20would%20like%20to%20know%20more.";
export const email = "nirajmurale@gmail.com";

export const areas = [
  { name: "Charminar & Old City", slug: "charminar-old-city", image: "/images/area-oldcity.webp", description: "Historic lanes, markets and food finds around the Charminar." },
  { name: "Hitech City", slug: "hitech-city", image: "/images/area-hitechcity.webp", description: "Modern Hyderabad, workday stops and places worth the detour." },
  { name: "Banjara Hills", slug: "banjara-hills", image: "/images/area-banjarahills.webp", description: "Cafés, neighbourhood streets and easy evening exploring." },
  { name: "Secunderabad", slug: "secunderabad", image: "/images/featured-hussain-sagar.webp", description: "A quieter route into the city's older northern side." },
  { name: "Gachibowli", slug: "gachibowli", image: "/images/area-hitechcity.webp", description: "A practical base for travellers exploring west Hyderabad." }
];

export const spots: Spot[] = [
  { slug: "charminar", name: "Charminar", type: "Place", area: "Charminar & Old City", image: "/images/featured-charminar.webp", note: "A starting point for exploring the Old City's lanes, markets and food culture.", address: "[Address to confirm]", landmark: "Charminar", contributor: "[Contributor name]", added: "[Date added]" },
  { slug: "golconda-fort", name: "Golconda Fort", type: "Place", area: "Hyderabad", image: "/images/featured-golconda-fort.webp", note: "Ancient stone, long views and a slower way to spend part of a Hyderabad day.", address: "[Address to confirm]", landmark: "[Nearest landmark to confirm]", contributor: "[Contributor name]", added: "[Date added]" },
  { slug: "hussain-sagar", name: "Hussain Sagar", type: "Place", area: "Secunderabad", image: "/images/featured-hussain-sagar.webp", note: "A broad lakeside promenade for a walk when you want a little space from the city streets.", address: "[Address to confirm]", landmark: "[Nearest landmark to confirm]", contributor: "[Contributor name]", added: "[Date added]" },
  { slug: "irani-chai", name: "Irani Chai & Osmania Biscuits", type: "Food Stall", area: "Charminar & Old City", image: "/images/food-irani-chai.webp", note: "Try the Irani chai and Osmania biscuits at a local stall; exact listing details are awaiting a community submission.", address: "[Food stall address to confirm]", landmark: "[Nearest landmark to confirm]", contributor: "[Contributor name]", added: "[Date added]" },
  { slug: "biryani-stall", name: "Hyderabadi Biryani Stall", type: "Food Stall", area: "Hyderabad", image: "/images/food-biryani-stall.webp", note: "A guide starter for finding biryani served hot from the handi; stall name and exact address need a contributor's details.", address: "[Food stall address to confirm]", landmark: "[Nearest landmark to confirm]", contributor: "[Contributor name]", added: "[Date added]" }
];

export const faqs = [
  { q: "Who adds the places and food stalls on travelguide?", a: "Everything on travelguide is intended to come from real travellers and locals, not paid advertisers. The contributor model is the foundation of the guide. [Confirm the exact moderation process before launch.]" },
  { q: "Is travelguide only for Hyderabad right now?", a: "Yes. The current focus is Hyderabad so the guide can stay detailed and local. [Confirm whether expansion to other cities is planned.]" },
  { q: "Is travelguide free to use?", a: "Yes, browsing the guide is completely free for travellers. [Confirm whether any future paid features are planned.]" },
  { q: "How do I add a place or food stall I know about?", a: "Use Add Your Own Spot. Share the name, area or address and a short note about why it is worth visiting. A photo helps too. [Confirm the review and approval process before publishing.]" },
  { q: "How do you make sure the information is accurate?", a: "[Confirm moderation process: for example, whether every submission receives a light review and whether travellers can flag outdated information.]" },
  { q: "Do you charge businesses to be featured?", a: "No paid placements are part of the stated model. Listings are intended to appear because a traveller or local recommended them, not because a business paid for visibility." },
  { q: "I don't have WhatsApp — how else can I reach you?", a: `Call ${phoneDisplay}, email ${email}, or use the contact form on the Contact page.` }
];
