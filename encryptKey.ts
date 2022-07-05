import { ethers } from "ethers";
import fs from "fs";

require("dotenv").config({ path: "./.env.local" });

async function main() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!);
  const encryptedJsonKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD!,
    process.env.PRIVATE_KEY
  );
  fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
