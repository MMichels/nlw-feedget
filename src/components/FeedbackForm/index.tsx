import { useState } from 'react';
import { CloseButton } from '../CloseButton';
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import otherImageUrl from "../../assets/other.svg";
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            src: bugImageUrl,
            alt: "Imagem de uma pequena lagarta roxa simbolizando um inseto (bug)"
        },
        placeholder: "Conte com detalhes o que está acontecendo...."
    },
    IDEA: {
        title: "Ideia",
        image: {
            src: ideaImageUrl,
            alt: "Imagem de uma lâmpada amarela"
        },
        placeholder: "Tem alguma ideia de melhoria ou de nova funcionalidade? Conte pra gente!"
    },
    OTHER: {
        title: "Outro",
        image: {
            src: otherImageUrl,
            alt: "Imagem de um balão de pensamento"
        },
        placeholder: "Queremos te ouvir. O que você gostaria de nos dizer?"
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function FeedbackForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>("BUG");
    const [feedbackComplete, setFeedbackComplete] = useState(true);

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    function handleFeedbackSent(){      

        setFeedbackComplete(true);       
    }

    function handleResetFeedback(){
        setFeedbackType(null);
        setFeedbackComplete(false);
    }

    return (
        <div className="flex flex-col relative items-center w-[calc(100vw-2rem)] md:w-auto p-4 mb-4 rounded-2xl shadow-lg bg-zinc-900 ">
                      

            {
                !feedbackType ? (
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                ) : (
                    !feedbackComplete ? 
                        <FeedbackContentStep feedbackType={feedbackType} onBack={handleRestartFeedback} onFeedbackSent={handleFeedbackSent}/> :
                        <FeedbackSuccessStep onFeedbackReset={handleResetFeedback}/>
                )
            }
            

            <footer className="text-cs text-neutral-400">
                Feito com ♥ por MMichels
            </footer>
        </div>
    );
}

 