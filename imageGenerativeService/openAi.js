import { appConfig } from "../config/appConfig.js";
import { uploadFileViaWeb3 } from "../pinataService.js";

import { OpenAI } from "openai";

async function generateImage({prompt}) {
  try{
    const client = new OpenAI({
        apiKey: appConfig.OPEN_AI_API_KEY });
    
    const response = await client.images.generate({
        model: "dall-e-3",
        prompt,
        n: 1
      });

    //   console.log(response.data[0].url);
      return response.data[0].url
}
catch(err){
  console.error(err)
}
}

  export const generateImageServiceUrlViaOpenAi = async ({prompt}) => {
    const responseUrl = await generateImage({ prompt });

    let arrayBuffer = await fetch(responseUrl);
    arrayBuffer =await arrayBuffer.arrayBuffer();

    const { pinataCid, pinataGateway } = await uploadFileViaWeb3({ arrayBuffer });
    console.log(pinataGateway + "/" + pinataCid);
    return (pinataGateway + "/" + pinataCid);
};



// generateImageServiceUrlViaOpenAi(`Astronaut`);