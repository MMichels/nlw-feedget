export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}



export interface FeedbackRespository {
    create: (data: FeedbackCreateData) => Promise<void>;
};
