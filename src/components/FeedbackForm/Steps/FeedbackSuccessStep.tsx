import { CloseButton } from "../../CloseButton";

import successImageUrl from "../../../assets/success.svg";

interface FeedbackSuccessProps {
    onFeedbackReset: () => void;
}


export function FeedbackSuccessStep ({onFeedbackReset} : FeedbackSuccessProps) {
    return (
        <>
            <header>
                <CloseButton />            
            </header>
            <div className="
                w-[304px]
                flex flex-col gap-2 justify-center items-center
                py-14
                "
            >
                <img src={successImageUrl} alt="Icone de concluido" 
                    width={40} height="40"
                />
                <p className="text-center text-xl mt-2 leading-6">
                    Agradecemos o feedback!
                </p>

                <button className="
                    bg-zinc-800 py-2 px-6 mt-4 rounded-md border-transparent text-sm leading-6
                    hover:bg-zinc-700 transition-colors
                    focus:outline-none 
                    focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500
                    "
                    onClick={() => onFeedbackReset()}
                >
                    Quero enviar outro
                </button>

            </div>
        </>
    );
}