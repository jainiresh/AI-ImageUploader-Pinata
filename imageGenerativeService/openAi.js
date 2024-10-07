import { CLOUDFLARE_API_KEY, CLOUDFLARE_IMAGE_MODEL } from "../constants/constants.js";
import {  uploadFileViaWeb3 } from "../pinataService.js";

async function run(model, input) {
  try{
    const response = await fetch(
      `https://api.openai.com/v1/images/generations`,
      {
        headers: { Authorization: `Bearer ${OPEN_AI_APIKEY}`},
        method: "POST",
        body: JSON.stringify(input),
      }
    );

    


    const imageBuffer = await response.arrayBuffer();

    const {pinataCid, pinataGateway} = await uploadFileViaWeb3({arrayBuffer:imageBuffer});
    let pinataUrl = pinataGateway + "/" +pinataCid ;
    return { pinataUrl }
  }
  catch(err){
    console.log(err);
  }
    
}
  
export const generateImageServiceUrl = async (prompt) => {

  let finalPrompt = `Give me an image of the situation happening in the following prompt :   ${prompt}`;
  const {pinataUrl} = await run(CLOUDFLARE_IMAGE_MODEL, {
    prompt:finalPrompt
  });

  
  return {pinataUrl : `${pinataUrl}`};
};

async function testing(){
    await generateImageServiceUrl("Cat typing !");
}

testing();