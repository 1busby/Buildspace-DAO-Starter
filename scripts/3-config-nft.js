import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x23C4117f2cc96cd71d846152Da199c9786b238d7",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Cryptic Insignia",
        description: "This NFT will give you access to DareDAO!",
        image: readFileSync("scripts/assets/insignia.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()