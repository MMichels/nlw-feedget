import { AxiosInstance } from "axios";
import { FeedbackType } from "../components/FeedbackForm";
import { api } from "./api";


export interface PostFeedbackCommand {
    type: FeedbackType,
    comment: string;
    screenshot: string | null;
}


export class FeedbackService {
    api: AxiosInstance;
    
    constructor(){
        this.api = api;
    }


    post(command: PostFeedbackCommand){
        return this.api.post("/feedback", command);
    }
}