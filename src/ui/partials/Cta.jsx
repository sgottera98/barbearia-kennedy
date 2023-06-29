import { useEffect, useRef, useState } from 'react';
import { FaCalendar, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {  MessageSquare } from 'react-feather';

const Cta = () => {
    const [showButtons, setShowButtons] = useState(false);
    const buttons = useRef();

    useEffect(() => {
        if (showButtons) {
            buttons.current.classList.remove('bottom-[-100%]');
            buttons.current.classList.remove('opacity-0');
            buttons.current.classList.add('opacity-1');
            buttons.current.classList.add('bottom-10');
        } else {
            buttons.current.classList.add('bottom-[-100%]');
            buttons.current.classList.add('opacity-0');
            buttons.current.classList.remove('opacity-1');
            buttons.current.classList.remove('bottom-10');
        }
    }, [showButtons]);

    return (
        <>
            <div
                onClick={() => {
                    setShowButtons(!showButtons);
                }}
                className="fixed bottom-10 md:bottom-20 right-5 md:right-20 z-10 h-[64px] w-[64px] md:h-[72px] md:w-[72px] rounded-full bg-yellow flex items-center justify-center"
            >
                <MessageSquare size={36} />
            </div>

            <div
                ref={buttons}
                className="fixed opacity-0 mb-20 md:mb-32 right-5 md:right-20 flex flex-col gap-4 md:gap-5 bottom-[-100%] transition-all ease-in-out duration-700 z-10"
            >
                <div className="bg-neutral-black  rounded-full p-2 h-[64px] w-[64px] md:h-[72px] md:w-[72px] flex items-center justify-center">
                    <a
                        href="https://api.whatsapp.com/send?phone=5515996856813"
                        target="_blank"
                        className="zoom-effect"
                        rel="noreferrer"
                    >
                        <FaWhatsapp className="text-4xl xl:text-5xl hover:text-whatsapp" />
                    </a>
                </div>
                <div className="bg-neutral-black rounded-full p-2 h-[64px] w-[64px] md:h-[72px] md:w-[72px] flex items-center justify-center">
                    <a
                        href="https://instagram.com/kennedybarber19"
                        target="_blank"
                        className="zoom-effect"
                        rel="noreferrer"
                    >
                        <FaInstagram className="text-4xl xl:text-5xl hover:text-instagram" />
                    </a>
                </div>
                <div className="bg-neutral-black rounded-full p-2 h-[64px] w-[64px] md:h-[72px] md:w-[72px] flex items-center justify-center">
                    <a
                        href="https://www.trinks.com/barbearia-kennedy-santos"
                        target="_blank"
                        className="zoom-effect"
                        rel="noreferrer"
                    >
                        <FaCalendar className="text-4xl xl:text-4xl" />
                    </a>
                </div>
            </div>
        </>
    );
};
export default Cta;
