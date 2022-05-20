import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenShotButtonProps {
    onScreenshot: (screenshot: string|null) => void;
    screenshot: string | null;
    disabled: boolean;
}

export function ScreenShotButton({onScreenshot, screenshot, disabled}: ScreenShotButtonProps){
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
    


    async function handleTakeScreenshot(){
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const b64image = canvas.toDataURL('image/png');

        onScreenshot(b64image);
        setIsTakingScreenshot(false);
    }

    if(screenshot){
        return (
            <button
                type="button"
                className="
                    p-1 w-10 h-10
                    rounded-md border-transparent
                    flex justify-end items-end
                    text-zinc-400 hover:text-zinc-100 transition-colors
                "
                style={{
                    backgroundImage: `url(${screenshot})`
                }}
                onClick={() => onScreenshot(null)}
                disabled={disabled}
            >
                <Trash weight="fill"></Trash>
            </button>
        )
    }

    return(
        
        <button
            type="button"
            className={`
                p-2 bg-zinc-800 
                rounded-md border-transparent 
                hover:bg-zinc-700 transition-colors
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500
                ` + (disabled ? " opacity-50" : "")
            }                
            onClick={() => handleTakeScreenshot()}
            disabled={disabled}
        >
            {
                isTakingScreenshot ?
                <Loading /> :
                <Camera className="w-6 h-6" /> 
            }
        </button>
    )
}