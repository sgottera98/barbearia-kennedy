import { useEffect, useRef } from 'react';
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaMapMarkerAlt,
    FaCalendar,
    FaPhone,
} from 'react-icons/fa';
import { Menu as Hamburguer, X } from 'react-feather';
import Logo from '../../assets/logo.jpg';

const Menu = () => {
    let menuMobile = useRef(null);
    let header = useRef(null);

    useEffect(() => {
        let lastScrollPosition = window.pageYOffset;

        window.addEventListener('scroll', function () {
            let currentScrollPosition = window.pageYOffset;

            if (currentScrollPosition > lastScrollPosition) {
                header.current.classList.add('top-[-100%]')
            } else if (currentScrollPosition < lastScrollPosition) {
                header.current.classList.remove('top-[-100%]')
            }

            lastScrollPosition = currentScrollPosition;
        });
    }, []);

    const onHamburguerClicked = () => {
        menuMobile.current.classList.remove('left-[100%]');
        menuMobile.current.classList.remove('opacity-0');
        menuMobile.current.classList.add('left-0');
        menuMobile.current.classList.add('opacity-1');

        document.querySelector('html').classList.add('overflow-y-hidden');
    };

    const onCloseClicked = () => {
        menuMobile.current.classList.add('left-[100%]');
        menuMobile.current.classList.add('opacity-0');
        menuMobile.current.classList.remove('left-0');
        menuMobile.current.classList.remove('opacity-1');

        document.querySelector('html').classList.remove('overflow-y-hidden');
    };

    return (
        <header ref={header} className="bg-neutral-black w-screen fixed top-0 z-10 transition-all ease-in-out duration-500">
            <nav className="container p-2 xl:px-48 xl:py-4 mx-auto h-20 xl:h-28">
                <div className="h-full flex items-center justify-between gap-4 xl:px-16">
                    <div className="h-full rounded-full">
                        <img className="h-full w-auto rounded-full" src={Logo} alt="" />
                    </div>

                    <div className="hidden md:flex items-center gap-6 xl:gap-8">
                        <a
                            href="https://api.whatsapp.com/send?phone=5515996856813"
                            target="_blank"
                            className="zoom-effect"
                            rel="noreferrer"
                        >
                            <FaWhatsapp className="text-2xl xl:text-4xl hover:text-whatsapp" />
                        </a>
                        <a
                            href="https://instagram.com/kennedybarber19"
                            target="_blank"
                            className="zoom-effect"
                            rel="noreferrer"
                        >
                            <FaInstagram className="text-2xl xl:text-4xl hover:text-instagram" />
                        </a>
                        <a
                            href="https://www.facebook.com/kennedybarber19"
                            target="_blank"
                            className="zoom-effect"
                            rel="noreferrer"
                        >
                            <FaFacebook className="text-2xl xl:text-4xl hover:text-facebook" />
                        </a>
                        <a
                            href="https://g.page/kennedybarber19?share"
                            target="_blank"
                            className="zoom-effect"
                            rel="noreferrer"
                        >
                            <FaMapMarkerAlt className="text-2xl xl:text-4xl" />
                        </a>
                        <a
                            href="https://www.trinks.com/barbearia-kennedy-santos"
                            target="_blank"
                            className="zoom-effect"
                            rel="noreferrer"
                        >
                            <FaCalendar className="text-2xl xl:text-4xl" />
                        </a>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button onClick={() => onHamburguerClicked()}>
                            <Hamburguer size={36} />
                        </button>
                        <div
                            ref={menuMobile}
                            className="overflow-y-auto fixed top-0 left-[100%] opacity-0 container p-2 xl:px-48 xl:py-4 mx-auto h-screen min-w-[100vw] bg-neutral-black transition-all ease-in-out duration-500"
                        >
                            <div className="flex justify-end py-4">
                                <button onClick={() => onCloseClicked()}>
                                    <X size={36} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-8 px-6">
                                <a
                                    href="https://api.whatsapp.com/send?phone=5515996856813"
                                    target="_blank"
                                    className="flex items-center gap-3 text-2xl"
                                    rel="noreferrer"
                                >
                                    <FaWhatsapp className="text-2xl hover:text-whatsapp" />
                                    Whatsapp
                                </a>
                                <a
                                    href="https://www.trinks.com/barbearia-kennedy-santos"
                                    target="_blank"
                                    className="flex items-center gap-3 text-2xl"
                                    rel="noreferrer"
                                >
                                    <FaCalendar className="text-2xl" />
                                    Agende um horário
                                </a>
                                <a
                                    href="https://g.page/kennedybarber19?share"
                                    target="_blank"
                                    className="flex items-center gap-3 text-2xl"
                                    rel="noreferrer"
                                >
                                    <FaMapMarkerAlt className="text-2xl" />
                                    Como chegar
                                </a>
                                <a
                                    href="tel:+55015996856813"
                                    className="flex items-center gap-3 text-2xl"
                                >
                                    <FaPhone className="text-2xl" />
                                    Contate-nos
                                </a>
                                <a
                                    href="https://instagram.com/kennedybarber19"
                                    target="_blank"
                                    className="flex items-center gap-3 text-2xl"
                                    rel="noreferrer"
                                >
                                    <FaInstagram className="text-2xl hover:text-instagram" />
                                    Instagram
                                </a>
                                <a
                                    href="https://www.facebook.com/kennedybarber19"
                                    target="_blank"
                                    className="flex items-center gap-3 text-2xl"
                                    rel="noreferrer"
                                >
                                    <FaFacebook className="text-2xl hover:text-facebook" />
                                    Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Menu;
