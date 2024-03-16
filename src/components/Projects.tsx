import tools from "@/lib/tools";
import Card from "./Card";
import projects from "@/lib/Projects";

function Projects() {
  return (
    <section className="h-full flex-1 overflow-y-auto pt-16 lg:px-10 lg:pt-0">
      <h2 className="mb-4 text-2xl font-extrabold">My Projects</h2>
      <div className="flex flex-col gap-5">
        {projects.map((p) => (
          <Card key={p.id} link={p.link} title={p.title} desc={p.desc} />
        ))}
      </div>
      <h2 className="mb-4 mt-8 text-2xl font-extrabold">My Tools</h2>
      <div className="flex flex-col gap-5">
        {tools.map((t) => (
          <Card key={t.id} title={t.title} desc={t.desc} />
        ))}
      </div>

      <p className="text-foreground-600 mt-5 text-center text-sm">
        Design By{" "}
        <a
          className="text-foreground-300 underline"
          href="https://dribbble.com/NicolasMzrd"
        >
          Nicolas Meuzard
        </a>
      </p>
    </section>
  );
}

export default Projects;
