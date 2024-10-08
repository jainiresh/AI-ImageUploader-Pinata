import { appConfig } from "../config/appConfig.js";
import {  uploadFileViaWeb3 } from "../pinataService.js";

async function run(model, input) {
  try{
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${appConfig.CLOUDFLARE_ACCOUNT_ID}/ai/run/${appConfig.CLOUDFLARE_IMAGE_MODEL}`,
      {
        headers: { Authorization: `Bearer ${appConfig.CLOUDFLARE_API_KEY}` },
        method: "POST",
        body: JSON.stringify(input),
      }
    );


    const imageBuffer = await response.arrayBuffer();

    const {pinataCid, pinataGateway} = await uploadFileViaWeb3({arrayBuffer:imageBuffer});
    return pinataGateway + "/" +pinataCid;
  }
  catch(err){
    console.log(err);
  }
    
}
  
export const imageGenerativeServiceForCloudflare = async ({prompt}) => {

  const pinataUrl = await run(appConfig.CLOUDFLARE_IMAGE_MODEL, {
    prompt
  });

  
  return pinataUrl;
};
