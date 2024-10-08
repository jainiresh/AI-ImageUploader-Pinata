import { uploadFileViaWeb3 } from "../pinataService.js";

async function generateImage(prompt) {
  try{
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    prompt: prompt,
    n: 1,
    size: "1024x1024"
  }, {
    headers: {
      'Authorization': `Bearer YOUR_API_KEY`,
      'Content-Type': 'application/json'
    },
    responseType: 'arraybuffer'
  });
 return Buffer.from(response.data, 'binary');;
}
catch(err){
  console.error(err)
}
}

  export const generateImageServiceUrlViaOpenAi = async (prompt) => {
    const responseUrl = await generateImage({ inputs: prompt });
    const { pinataCid, pinataGateway } = await uploadFileViaWeb3({ arrayBuffer: responseUrl });
    return pinataGateway + "/" + pinataCid;
};

