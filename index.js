import { generateImageServiceUrlViaHuggingFace } from "./imageGenerativeService/huggingFaceAI.js";
import { generateImageServiceUrlViaCloudflare } from "./imageGenerativeService/cloudflareWorker.js";




export const generateCloudflareHostedUrl = async ({prompt}) => {
   const resultUrl = await generateImageServiceUrlViaCloudflare({prompt});
   return {pinataUrl : resultUrl};
}

export const generateHuggingFaceHostedUrl = async ({prompt}) => {
  const resultUrl = await generateImageServiceUrlViaHuggingFace({prompt});
  return {pinataUrl : resultUrl};
}



console.log(await generateCloudflareHostedUrl({prompt: `Astronaut in a sushi shop, standing in oneleg and praying to buddha !`}))