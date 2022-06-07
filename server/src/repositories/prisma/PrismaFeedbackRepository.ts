
import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbackRespository } from "../FeedbackRespository";

export class PrismaFeedbackRepository implements FeedbackRespository {
    async create({type, comment, screenshot}: FeedbackCreateData) {
        
        const createdFeedback = await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        });
        
    }
    
}