import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";
import { FeedbackForm } from "./FeedbackForm";


export function Widget () {
    
    

    return (
        <Popover className="flex flex-col items-end absolute bottom-5 md:bottom-10 right-5 md:right-10">
            <Popover.Panel>
                <FeedbackForm></FeedbackForm>
            </Popover.Panel>

            <Popover.Button
                className="flex items-center 
                bg-brand-500  text-white
                rounded-full px-3 h-12
                group"
            >
                <ChatTeardropDots className="w-6 h-6 "/>
                <span className="
                    max-w-0 overflow-hidden 
                    group-hover:max-w-xs
                    transition-all duration-500 ease-linear
                ">
                    FeedBack
                </span>
            </Popover.Button>
        </Popover>
    )
}