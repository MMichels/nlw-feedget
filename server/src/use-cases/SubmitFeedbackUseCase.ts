import { MailAdapter } from "../adapters/MailAdapter";
import { FeedbackRespository } from "../repositories/FeedbackRespository";

interface SubmitFeedbackCommand {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase{
    constructor(
        private feedbacksRepository: FeedbackRespository,        
        private mailAdapter: MailAdapter
    ){ }


    async submit(request: SubmitFeedbackCommand) {
        var { type, comment, screenshot } = request;

        if(!type){
            throw new Error("Type is required");
        }

        if(!comment){
            throw new Error("Comment is required");
        }


        if(screenshot && !screenshot.startsWith("data:image/jpg;base64") && !screenshot.startsWith("data:image/png;base64")){
            throw new Error("Screenshot inválido");
        }

        await this.feedbacksRepository.create({type, comment, screenshot});
        await this.mailAdapter.sendMail({
            subject: "Novo Feedback",
            body: [                
                `<div style="font-family: sans-serif; font-size: 16px; color: #222;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `<img src=${screenshot} />`,
                `</div>`
            ].join("\n")
        })
    }
}