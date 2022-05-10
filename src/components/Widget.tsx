import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";


export function Widget () {
    
    

    return (
        <Popover className="absolute bottom-5 right-5">
            <Popover.Panel>
                <p>Hello Feedback</p>
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