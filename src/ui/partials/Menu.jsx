import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaMapMarkerAlt,
    FaCalendar,
} from 'react-icons/fa';
import Logo from '../../assets/logo.jpg';

const Menu = () => {
    return (
        <header className="bg-neutral-black">
            <nav className="container p-2 xl:px-48 mx-auto h-24 w-full">
                <div className="h-full flex items-center justify-between gap-4 px-6 xl:px-16">
                    <div className="h-full">
                        <img className="h-full w-auto" src={Logo} alt="" />
                    </div>
                    <div className="flex items-center gap-6 xl:gap-8">
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
                </div>
            </nav>
        </header>
    );
};

export default Menu;
