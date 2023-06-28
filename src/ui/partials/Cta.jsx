import { useEffect, useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from '../../assets/logo.jpg';

const Cta = () => {
  const [showButtons, setShowButtons] = useState(false);
  const buttons = useRef();

  useEffect(() => {
    if (showButtons) {
      buttons.current.classList.remove("bottom-[-100%]");
      buttons.current.classList.remove("opacity-0");
      buttons.current.classList.add("opacity-1");
      buttons.current.classList.add("bottom-10");
    } else {
      buttons.current.classList.add("bottom-[-100%]");
      buttons.current.classList.add("opacity-0");
      buttons.current.classList.remove("opacity-1");
      buttons.current.classList.remove("bottom-10");
    }
  }, [showButtons]);

  return (
    <>
      <div
        onClick={() => {
          setShowButtons(!showButtons);
        }}
        className="fixed bottom-0 right-0 m-4 mr-6 w-12 xl:w-14 z-10"
      >
        <img className="h-full w-auto rounded-full" src={Logo} alt="" />
      </div>

      <div
        ref={buttons}
        className="fixed opacity-0 mb-12 right-0 m-4 mr-5 flex flex-col gap-5 bottom-[-100%] transition-all ease-in-out duration-700 z-10"
      >
        <div className="bg-neutral-black  rounded-full p-2">
          <a
            href="https://api.whatsapp.com/send?phone=5515996856813"
            target="_blank"
            className="zoom-effect"
            rel="noreferrer"
          >
            <FaWhatsapp className="text-4xl xl:text-5xl hover:text-whatsapp" />
          </a>
        </div>
        <div className="bg-neutral-black rounded-full p-2">
          <a
            href="https://instagram.com/kennedybarber19"
            target="_blank"
            className="zoom-effect"
            rel="noreferrer"
          >
            <FaInstagram className="text-4xl xl:text-5xl hover:text-instagram" />
          </a>
        </div>
        <div className="bg-neutral-black rounded-full p-2">
          <a
            href="https://www.facebook.com/kennedybarber19"
            target="_blank"
            className="zoom-effect"
            rel="noreferrer"
          >
            <FaFacebook className="text-4xl xl:text-5xl hover:text-facebook" />
          </a>
        </div>
      </div>
    </>
  );
};
export default Cta;
