
import fs from "fs/promises"
import path from "path";
import process from "process";
import {authenticate} from "@google-cloud/local-auth"
import { google } from "googleapis";
import { ResponseError } from "../error/response-error.js";
import dotenv from "dotenv"

dotenv.config({
    path:'./.env'
})
const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    'https://developers.google.com/oauthplayground'
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

export {
    oAuth2Client
}
