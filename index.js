import { generateImageServiceUrl } from "./imageGenerativeService/cloudflareWorker"


export const generateAndUploadImageWithCloudflare = async () => {
   const resultUrl = await generateImageServiceUrl(`Typing dog`);
   return resultUrl;
}

