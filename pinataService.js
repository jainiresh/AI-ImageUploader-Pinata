import { PINATA_GATEWAY_PATH } from "./constants/constants.js";
import {pinata, pinataWeb3} from './pinataConfig.js'

// const file = new File(["Hello !"], 'testFile.txt', {
//     type: "text/plain"
// })

export async function uploadFile({arrayBuffer}) {

    
    
    const blob = new Blob([Buffer.from(arrayBuffer)])
    const file = new File([blob], {
        type : 'image/png'
    })

    const upload = await pinata.upload.file(file);
    console.log("Uploaded file details " + JSON.stringify(upload));

    return {pinataCid : upload.cid, pinataGateway : PINATA_GATEWAY_PATH}
}

export async function uploadFileViaWeb3({arrayBuffer}) {

    
    
    const blob = new Blob([Buffer.from(arrayBuffer)])
    const file = new File([blob], {
        type : 'image/png'
    })
    
    const upload = await pinataWeb3.upload.file(file);
    console.log("Uploaded file details " + JSON.stringify(upload));

    return {pinataCid : upload.IpfsHash, pinataGateway : PINATA_GATEWAY_PATH}
}

async function getFile({cid}) {
    const file = await pinata.gateways.get(cid);
    console.log(file);

    const url = await pinata.gateways.createSignedURL({
        cid,
        expires : 1800
    })
    console.log(url)
}

async function swapFile({cid, swapWithCid}) {
    const file = await pinata.files.addSwap({
        cid,
        swapCid: swapWithCid
    });
    console.log(file);
}