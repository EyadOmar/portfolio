import { Codepen, Github, Phone } from "lucide-react";
function Footer() {
  return (
    <footer className="mt-auto flex flex-col gap-2 text-lg font-semibold">
      <div className="flex items-center gap-4">
        <p>Contact & Social: </p>
        <a
          href="https://wa.me/+201002379226"
          target="_blank"
          title="Whatsapp"
          aria-label="Whatsapp"
          className="hover:bg-foreground hover:text-background rounded-full  p-2 transition-all duration-200 ease-in-out hover:scale-105"
        >
          <Phone />
        </a>
        <a
          href="https://codepen.io/EyadOmar"
          target="_blank"
          title="Codepen"
          aria-label="Codepen"
          className="hover:bg-foreground hover:text-background rounded-full  p-2 transition-all duration-200 ease-in-out hover:scale-105"
        >
          <Codepen />
        </a>
        <a
          href="https://github.com/EyadOmar"
          target="_blank"
          title="Github"
          aria-label="Github"
          className="hover:bg-foreground hover:text-background rounded-full  p-2 transition-all duration-200 ease-in-out hover:scale-105"
        >
          <Github />
        </a>
      </div>
      <a
        className="text-foreground-300 text-base underline"
        href="mailto:eiad.omar88@gmail.com"
      >
        eiad.omar88@gmail.com
      </a>
    </footer>
  );
}

export default Footer;
