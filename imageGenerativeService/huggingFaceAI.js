import { uploadFileViaWeb3 } from "../pinataService.js";

async function query(data) {
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
            {
                headers: {
                    Authorization: "Bearer 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",
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

export const generateImageServiceUrl = async (prompt) => {

    const responseBlob = await query({ inputs: prompt });


    const { pinataCid, pinataGateway } = await uploadFileViaWeb3({ blob: responseBlob });
    let pinataUrl = pinataGateway + "/" + pinataCid;
    return { pinataUrl }

};



