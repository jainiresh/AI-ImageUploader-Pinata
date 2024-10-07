import { generateImageServiceUrl } from "./imageGenerativeService/cloudflareWorker.js"


export const generateAndUploadImageWithCloudflare = async ({prompt}) => {
   const resultUrl = await generateImageServiceUrl({prompt});
   return {url : resultUrl};
}

export const generateAndUploadImageWithOpenAI = async ({prompt}) => {
  const resultUrl = await generateImage
}

console.log(await generateAndUploadImageWithCloudflare({prompt: `Cyber punk Indian flag`}))