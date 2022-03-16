import { Request, Response } from "express";
export const indexControl = (req:Request,res:Response) => {
    res.render("index");
};