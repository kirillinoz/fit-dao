import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x226377D1c4878b79D2133A38d675f86cA7515F72",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "FitDAO Member Badge",
        description: "This NFT will give you access to FitDAO!",
        image: readFileSync("scripts/assets/fitdao.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()