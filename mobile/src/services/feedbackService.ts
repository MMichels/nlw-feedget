import { AxiosInstance } from "axios";
import { FeedbackTypeKey } from "../utils/feedbackTypes";
import { api } from "./api";

interface SendFeedbackCommand {
    type: FeedbackTypeKey; 
    screenshot: string | null; 
    comment: string;
}


export class FeedbackService {
    api: AxiosInstance;
    constructor() {
        this.api = api;
        
    }

    sendFeedback(command: SendFeedbackCommand){
        return this.api.post('/feedback', command)
    }
    
} 