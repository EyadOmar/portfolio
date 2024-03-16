import { Codepen, Github, Mail, Phone } from "lucide-react";
function Footer() {
  return (
    <footer className="mt-6 flex items-center gap-4 text-lg font-semibold lg:mt-auto">
      <p>Contact:</p>
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
        href="mailto:eiad.omar88@gmail.com"
        aria-label="email"
        title="email"
        className="hover:bg-foreground hover:text-background rounded-full  p-2 transition-all duration-200 ease-in-out hover:scale-105"
      >
        <Mail />
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
    </footer>
  );
}

export default Footer;
