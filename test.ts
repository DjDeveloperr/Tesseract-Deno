import { getLanguages, getVersion, PSM, recognize } from "./mod.ts";

const img = await Deno.readFile("C:\\Users\\dell\\Desktop\\img.png");
const output = await recognize(img, {
  psm: PSM.SingleUniformVerticalText,
});

console.log("Output:", output.trim());
console.log("Langs:", await getLanguages());
console.log("Version:", await getVersion());
