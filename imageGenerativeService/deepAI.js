import { appConfig } from "../config/appConfig.js";
import { uploadFileViaWeb3 } from "../pinataService.js";

// async function query(prompt) {
//     const resp = await fetch('https://api.deepai.org/api/text2img', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'api-key': appConfig.DEEP_AI_API_KEY
//         },
//         body: JSON.stringify({
//             text: prompt,
//         })
//     });
    
//     const data = await resp.json();
//     console.log(data);
//     return null;
// }

// export const generateImageServiceUrlViaDeepAi = async (prompt) => {

//     const responseBlob = await query(prompt);


//     // const { pinataCid, pinataGateway } = await uploadFileViaWeb3({ blob: responseBlob });
//     // return pinataGateway + "/" + pinataCid;

// };

// generateImageServiceUrlViaDeepAi();



async function testFetch() {
    try {
        const response = await fetch('https://api.deepai.org/api/text2img', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': appConfig.DEEP_AI_API_KEY
            },
            body: JSON.stringify({ text: 'Astronaut on a horse' }),
        });

        const data = 
         response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

testFetch();
