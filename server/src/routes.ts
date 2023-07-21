import express from "express";
import { NodeMailerAdapter } from "./adapters/nodemailer/NodeMailAdapter";
import { PrismaFeedbackRepository } from "./repositories/prisma/PrismaFeedbackRepository";
import { SubmitFeedbackUseCase } from "./use-cases/SubmitFeedbackUseCase";

export const routes = express.Router(); 

routes.post("/feedback", async (req, res) => {
    var {type, comment, screenshot} = req.body;
    
    const useCase = new SubmitFeedbackUseCase(
        new PrismaFeedbackRepository(),
        new NodeMailerAdapter()  
    )

    await useCase.submit({
        type, comment, screenshot
    }).catch(error => {
        console.log(error);
        
        res.status(500).json({
            error: error.message
        });
    })
    
    res.status(201).send();

});
