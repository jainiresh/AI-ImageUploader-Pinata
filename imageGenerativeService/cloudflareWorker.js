
import { CLOUDFLARE_API_KEY, CLOUDFLARE_IMAGE_MODEL } from "../constants/constants.js";
import {  uploadFileViaWeb3 } from "../pinataService.js";

async function run(model, input) {
  try{
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/90fc83070e95f461645dd2ed67ef202d/ai/run/${model}`,
      {
        headers: { Authorization: `Bearer ${CLOUDFLARE_API_KEY}` },
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

  
  console.log("Pinata access url " + pinataUrl);
  return {pinataUrl : `${pinataUrl}`};
};

async function testing(){
    await generateImageServiceUrl("Cat typing !");
}

testing();