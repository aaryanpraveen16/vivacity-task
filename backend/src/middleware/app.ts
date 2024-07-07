import express, { Application } from "express";
import cors from "cors";
import registerRouter from "../routes";
import cookieParser from "cookie-parser";

const initialize = (app:Application) => {
  app.use(
    cors({
      origin:"http://localhost:3000",
      credentials:true,
    })
  )

  app.use(express.json());
  app.use(express.urlencoded({extended:true}));
  app.use("/",express.static('public'));
  app.use(cookieParser());
  registerRouter(app);
};


export default initialize;