import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase"

const createFeedbackSpy = jest.fn();
const sendEmailSpy = jest.fn();

describe('SubmitFeedback', () => {
    test('is able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            {create: createFeedbackSpy},
            {sendMail: sendEmailSpy}
        );

        await expect(submitFeedback.submit({
            type: "BUG", 
            comment: "Test Comment",            
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toBeCalled();
        expect(sendEmailSpy).toBeCalled();
    });

    test("is not able to submit feedback without type",async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            {create: async () => {}},
            {sendMail: async () => {}}
        );

        await expect(submitFeedback.submit({
            type: "", 
            comment: "Test Comment",            
        })).rejects.toThrow();        
    });

    test("is not able to submit feedback without comment",async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            {create: async () => {}},
            {sendMail: async () => {}}
        );

        await expect(submitFeedback.submit({
            type: "BUG", 
            comment: "",            
        })).rejects.toThrow();        
    });

    test('submit feedback is able to accept base64 screenshot', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            {create: async () => {}},
            {sendMail: async () => {}}
        );

        await expect(submitFeedback.submit({
            type: "BUG", 
            comment: "Test Comment",
            screenshot: "data:image/png;base64,8h91hjf1983jf2983fj29"
        })).resolves.not.toThrow();
    });

    test('submit feedback is not able to accept invalid screenshot', async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            {create: async () => {}},
            {sendMail: async () => {}}
        );

        await expect(submitFeedback.submit({
            type: "BUG", 
            comment: "Test Comment",
            screenshot: "https://screenshot.site.com/image.png"
        })).rejects.toThrowError();
    });
});