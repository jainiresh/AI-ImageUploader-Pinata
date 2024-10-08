import { PinataSDK } from "pinata";
import { PinataSDK as PinataWeb3SDK} from "pinata-web3";
import { appConfig } from "./appConfig.js";

export const pinata = new PinataSDK({
  pinataJwt: appConfig.PINATA_JWT_KEY,
  pinataGateway: appConfig.PINATA_GATEWAY_DOMAIN,
});


export const pinataWeb3 = new PinataWeb3SDK({
  pinataJwt: appConfig.PINATA_JWT_KEY,
  pinataGateway: appConfig.PINATA_GATEWAY_DOMAIN,
});
