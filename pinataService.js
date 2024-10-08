import {pinata, pinataWeb3} from './config/pinataConfig.js'
import { appConfig } from "./config/appConfig.js";


export async function uploadFile({arrayBuffer}) {

    
    
    const blob = new Blob([Buffer.from(arrayBuffer)])
    const file = new File([blob], {
        type : 'image/png'
    })

    const upload = await pinata.upload.file(file);

    return {pinataCid : upload.cid, pinataGateway : appConfig.PINATA_GATEWAY_PATH}
}

export async function uploadFileViaWeb3({arrayBuffer, blob}) {

    let file = null;


    
    if(arrayBuffer != undefined){    
    const blob = new Blob([Buffer.from(arrayBuffer)])
    file = new File([blob], {
        type : 'image/png'
    })
    }
    else{
        file = new File([blob], {
            type : 'image/png'
        })
    }
    const upload = await pinataWeb3.upload.file(file);

    return {pinataCid : upload.IpfsHash, pinataGateway : appConfig.PINATA_GATEWAY_PATH}
}
