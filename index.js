import { generateImageServiceUrlViaHuggingFace } from "./imageGenerativeService/huggingFaceAI.js";
import { generateImageServiceUrlViaCloudflare } from "./imageGenerativeService/cloudflareWorker.js";
import { generateImageServiceUrlViaOpenAi } from "./imageGenerativeService/openAi.js";




export const generateCloudflareHostedUrl = async ({prompt}) => {
   const resultUrl = await generateImageServiceUrlViaCloudflare({prompt});
   return {pinataUrl : resultUrl};
}

export const generateHuggingFaceHostedUrl = async ({prompt}) => {
  const resultUrl = await generateImageServiceUrlViaHuggingFace({prompt});
  return {pinataUrl : resultUrl};
}


export const generateOpenAIHostedUrl = async ({prompt}) => {
  const resultUrl = await generateImageServiceUrlViaOpenAi({prompt});
  return { pinataUrl : resultUrl}
}

