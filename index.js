import {  imageGenerativeServiceForHuggingFace } from "./imageGenerativeService/huggingFaceAI.js";
import {  imageGenerativeServiceForCloudflare } from "./imageGenerativeService/cloudflareWorker.js";
import { imageGenerativeServiceForOpenAI } from "./imageGenerativeService/openAi.js";




export const generateCloudflareHostedUrl = async ({prompt}) => {
   const resultUrl = await imageGenerativeServiceForCloudflare({prompt});
   return {pinataUrl : resultUrl};
}

export const generateHuggingFaceHostedUrl = async ({prompt}) => {
  const resultUrl = await imageGenerativeServiceForHuggingFace({prompt});
  return {pinataUrl : resultUrl};
}


export const generateOpenAIHostedUrl = async ({prompt}) => {
  const resultUrl = await imageGenerativeServiceForOpenAI({prompt});
  console.log(resultUrl)
  return { pinataUrl : resultUrl}
}



generateOpenAIHostedUrl({prompt: 'A witch'})