import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();
//middleware for cors
//op 1
app.use(cors());
 
app.use(express.json());
app.get('/',(request,response) =>{
    console.log(request)
    return response.status(234).send('welcome')
} );

app.use('/books',booksRoute);

mongoose
 .connect(mongoDBURL)
 .then(()=>{
  console.log('app connected to database');
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});
 })
 .catch((error)=> {
  console.log(error);
 });