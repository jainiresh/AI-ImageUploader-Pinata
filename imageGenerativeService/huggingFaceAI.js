import { uploadFileViaWeb3 } from "../pinataService.js";

async function query(data) {
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
            {
                headers: {
                    Authorization: `Bearer ${HUGGING_FACE_ACCESS_TOKEN}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.blob();
        return result;
    }
    catch (err) {
        console.error(err)
    }
}

export const generateImageServiceUrlViaHuggingFace = async (prompt) => {

    const responseBlob = await query({ inputs: prompt });


    const { pinataCid, pinataGateway } = await uploadFileViaWeb3({ blob: responseBlob });
    return pinataGateway + "/" + pinataCid;

};



