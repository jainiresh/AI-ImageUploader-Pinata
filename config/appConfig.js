import dotenv from 'dotenv'
dotenv.config();

export const appConfig = {
    CLOUDFLARE_API_KEY: process.env.CLOUDFLARE_API_KEY,
    CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID,
    CLOUDFLARE_IMAGE_MODEL: process.env.CLOUDFLARE_IMAGE_MODEL ,
    
    PINATA_GATEWAY_DOMAIN: process.env.PINATA_GATEWAY_DOMAIN ,
    PINATA_GATEWAY_PATH: process.env.PINATA_GATEWAY_PATH ,
    PINATA_JWT_KEY: process.env.PINATA_JWT_KEY,
  
    HUGGING_FACE_ACCESS_TOKEN: process.env.HUGGING_FACE_ACCESS_TOKEN,

    DEEP_AI_API_KEY : process.env.DEEP_AI_API_KEY,

    OPEN_AI_API_KEY : process.env.OPEN_AI_API_KEY
  };