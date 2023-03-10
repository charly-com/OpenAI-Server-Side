import express from 'express';
import * as dontev from 'dontev';
import cors from 'cors';

import { Configuration, OpenAIApi } from 'openai';
dontev.config();


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
  
const openai = new OpenAIApi(configuration);

const app = express();