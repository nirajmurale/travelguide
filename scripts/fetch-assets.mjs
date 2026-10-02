import { mkdir, access, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const assets = [
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/9149ad30-9a29-4c9d-a7de-42131bc0c149/f4b94a209f20b0a80175bbfe4eabd5d4/food-irani-chai.webp","public/images/food-irani-chai.webp"],
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/4db421b6-2955-40f2-a970-920810518f21/1c83d1aa17e59645034e1c5c55b4013d/featured-golconda-fort.webp","public/images/featured-golconda-fort.webp"],
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/7422085d-a063-48ac-a731-41a691b1bf13/4a019eeb38053d9b61946ee4785103b0/hero-hyderabad-collage.webp","public/images/hero-hyderabad-collage.webp"],
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/a9d6e2f8-19d2-43d7-aef6-3258a2cc1add/49494fdd591ac4f4bd90c6107f42bc4b/featured-hussain-sagar.webp","public/images/featured-hussain-sagar.webp"],
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/21e72b3b-8391-4995-b3a0-9b357b5d39ef/b56610919eb099fde69c01128a7abc50/featured-charminar.webp","public/images/featured-charminar.webp"],
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/784f8c03-8754-42a3-8922-06108ee4f40b/317688c8656d6d6066d904a416d8e3c3/food-street-stall-wide.webp","public/images/food-street-stall-wide.webp"],
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/46c31115-ce2d-4d7c-9c3b-7edc16df2a26/f1b9f9b5185863ff6490eb3525472c6d/food-biryani-stall.webp","public/images/food-biryani-stall.webp"],
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/81a8cd03-d2a1-4c80-a9ee-ecb075d72867/3a6afe8074b9b02a42250ebe334649a6/area-oldcity.webp","public/images/area-oldcity.webp"],
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/2523b313-a6b4-450e-a242-bcd80bb6dfd9/5981b56b3a249910c7c50367ffcc6bbc/area-hitechcity.webp","public/images/area-hitechcity.webp"],
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/3e131c5a-8421-4dbb-9107-e6ab9e047b69/0d35946c7086be62a3d4d43e5d59eeb0/area-banjarahills.webp","public/images/area-banjarahills.webp"],
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/15a6507a-76ad-4cc8-9464-c99ae78bf48e/d0ade1e3071409f0f6aaa4c19abe4992/how-it-works-contributor.webp","public/images/how-it-works-contributor.webp"],
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/7038594d-b325-4d63-a3ed-c104f1b71655/d56ef5508e12137e0c8a8e37c1092b09/about-mission.webp","public/images/about-mission.webp"],
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/4f8e8d19-67b7-43c9-88a3-c357b056b21c/d938beee026aa9fce14e428ee1ec19c4/og-image.png","public/images/og-image.png"],
["https://4200-iaeev4ce6bukef1tvowlx.e2b.app/api/public/assets/25e17842-d968-4b75-946b-0e546fdec7c5/fdc908c37d2c2f39fad0d6b07767ec44/add-spot-hero.webp","public/images/add-spot-hero.webp"]
];

for (const [url,relative] of assets) {
  const target=`${root}/${relative}`;
  try { await access(target); console.log(`✓ exists ${relative}`); continue; } catch {}
  try {
    await mkdir(dirname(target),{recursive:true});
    const controller=new AbortController(); const timeout=setTimeout(()=>controller.abort(),8000);
    const response=await fetch(url,{signal:controller.signal}); clearTimeout(timeout);
    if(!response.ok) throw new Error(`HTTP ${response.status}`);
    await writeFile(target,Buffer.from(await response.arrayBuffer()));
    console.log(`✓ downloaded ${relative}`);
  } catch(error) { console.warn(`! could not download ${relative}: ${error.message}`); }
}