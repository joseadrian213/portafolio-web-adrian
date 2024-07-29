import { useState } from "react";
export default function Header() {
  const [hideHeader, setHideHeader] = useState(false);
  return (
    <header
      className={`flex w-full justify-between bg-black p-5 ${
        hideHeader ? "hidden" : ""
      }`}
      style={{ position: "sticky", top: 0, zIndex: 999 }}
    >
      <h2 className="text-white font-extrabold text-3xl">:D</h2>
      <div className="flex flex-row gap-5 items-center">
        <a
          href="https://iztapalapa3-my.sharepoint.com/:b:/g/personal/l181100037_iztapalapa3_tecnm_mx/ESQ5Cd3KhcxOlQSYc2FcpUwBI5mIqnWNWQHUDBVVGNg_gQ?e=f4K1jZ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl font-bold"
        >
          CV
        </a>
        <a
          href="https://github.com/joseadrian213"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-9"
            src="./icons-contacto/github-white.svg"
            alt="github"
          />
        </a>
        <a
          href="https://wa.me/525573297524"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-9"
            src="./icons-contacto/whatsapp-icon.svg"
            alt="WhatsApp"
          />
        </a>
        <a
          href="mailto:joseadriangonzalez6758@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-9"
            src="./icons-contacto/google-gmail.svg"
            alt="Gmail"
          />
        </a>
      </div>
    </header>
  );
}
