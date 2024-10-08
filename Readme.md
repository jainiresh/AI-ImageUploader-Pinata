# np [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

> Smart solution for hosting AI generated images

## Why

- Offers popular integrated AI image generation options from **Hugging Face**, **OpenAI**, and **Cloudflare**.
- Automatically hosts generated images on **Pinata’s Web3 platform**, returning a usable URL immediately.
- Solves the hosting problem for developers who need to quickly store and access AI-generated images.
- Flexible, decentralized hosting without the need for centralized storage services.
  

### Why not

- Requires setting up Pinata API keys for hosting, which adds a bit of configuration overhead.
- You may need to manage API rate limits depending on the image generation tool used (e.g., OpenAI, Hugging Face).


## Prerequisite

- A valid Pinata account with access to API keys for file hosting.
- API keys or access tokens from **Hugging Face**, **OpenAI**, **Cloudflare**, or any supported AI image generation service.

## Install

```sh
npm install ai-generate-and-pinata-host@latest
```


## Config
Make sure you have your .env file populated with the mandatory and optional keys.

Here is the boilerplate of how your .env should look like :

```
# Mandatory configuration
# Pinata API Configuration
PINATA_GATEWAY_DOMAIN=beige-effective-bison-926.mypinata.cloud
PINATA_GATEWAY_PATH=https://beige-effective-bison-926.mypinata.cloud/ipfs
PINATA_JWT_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkM2Q2MmNmMy1kZThhLTRiMGYtOWE5Ni1mNzdiYTA3MDUyMDgiLCJlbWFpbCI6Im5pcmVzaHBhbmRpYW4xOUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNWJkOGU0NzQzMDU2YzM4ZjE3ODgiLCJzY29wZWRLZXlTZWNyZXQiOiI4OWEzMDA5MGNiYTI4ZDI3YzE4NGY2MmQwZDM0NDhlZjAxMWUwZmFkNzFjYTAzMGNmNDY2NDRiYzAwNWMzYWI0IiwiZXhwIjoxNzU5NjU0Njg2fQ.n-N7BPxbAST5CZRvVx0rPnxI9eGJ7dQjNiJB4C_oMfE

# 1 Mandatory, 2 Optional (you can choose which AI you are gonna use, and populate those keys here .)

# Cloudflare API Configuration
CLOUDFLARE_API_KEY=W3v6ffHWxczZO9f1gQvyeKwcZSJsFNH_8drcDzZA
CLOUDFLARE_ACCOUNT_ID=90fc83070e95f461645dd2ed67ef202d
CLOUDFLARE_IMAGE_MODEL=@cf/stabilityai/stable-diffusion-xl-base-1.0

# Hugging Face API Configuration
HUGGING_FACE_ACCESS_TOKEN=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

#Open AI API Configuration
OPEN_AI_API_KEY=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
```
