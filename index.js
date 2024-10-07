import { generateImageServiceUrl } from "./imageGenerativeService/cloudflareWorker.js"


export const generateAndUploadImageWithCloudflare = async () => {
   const resultUrl = await generateImageServiceUrl(`Typing dog`);
   return resultUrl;
}

