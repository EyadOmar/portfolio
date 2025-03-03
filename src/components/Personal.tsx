import Footer from "./Footer";

function Personal() {
  return (
    <section className="flex flex-1 flex-col">
      <h1 className="mb-6 text-pretty text-4xl font-extrabold md:text-6xl lg:text-7xl">
        Hello, I am Eyad Omar
      </h1>
      <p className=" text-pretty text-white/50 md:text-lg lg:text-xl">
        A full stack developer that has created numerous apps and is eager to
        create more.
      </p>
      <a
        href="cv.pdf"
        download={true}
        className="mt-6 block w-fit rounded-sm bg-accent px-4 py-2  font-bold transition-all duration-200 ease-in-out hover:scale-105 hover:brightness-110 md:text-xl"
      >
        Download CV
      </a>
      <Footer />
    </section>
  );
}

export default Personal;
