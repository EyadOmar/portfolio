import Footer from "./Footer";

function Personal() {
  return (
    <section className="flex flex-1 flex-col">
      <h1 className="mb-6 text-pretty text-4xl font-extrabold md:text-6xl lg:text-7xl">
        Hello, I am Eyad Omar
      </h1>
      <p className=" text-pretty text-white/50 md:text-lg lg:text-xl">
        I'm Eyad Omar, a front-end developer mainly using react, living in Egypt
        with three years of experience. Currently working full-time as a
        computer science teacher assistant at{" "}
        <a
          className="text-foreground-300 font-medium underline transition-colors duration-200 ease-in-out hover:text-white"
          href="https://www.mti.edu.eg/faculty/2/computing"
          target="_blank"
        >
          MTI University
        </a>{" "}
        and part-time as a front-end developer at{" "}
        <a
          className="text-foreground-300 font-medium underline transition-colors duration-200 ease-in-out hover:text-white"
          href="https://www.linkyou.ca/"
          target="_blank"
        >
          LinkYou Marketing
        </a>
        .
      </p>
      <a
        href="cv.pdf"
        download={true}
        className="bg-accent mt-6 block w-fit rounded-sm px-4 py-2  font-bold transition-all duration-200 ease-in-out hover:scale-105 hover:brightness-110 md:text-xl"
      >
        Download CV
      </a>
      <Footer />
    </section>
  );
}

export default Personal;
