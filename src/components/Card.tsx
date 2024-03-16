type CardProps = {
  link: string;
  title: string;
  desc: string;
};
function Card({ link, title, desc }: CardProps) {
  return (
    <>
      <a href={link} target="_blank">
        <div className="bg-accent rounded-sm px-4 py-6 transition-all duration-300 ease-in-out hover:brightness-125 lg:hover:scale-105">
          <h3 className="mb-2 text-xl font-bold md:text-3xl">{title}</h3>
          <p className=" text-foreground-300 text-sm md:text-base">{desc}</p>
        </div>
      </a>
    </>
  );
}

export default Card;
