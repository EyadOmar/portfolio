import Card from "./Card";
import projects from "@/lib/Projects";

function Projects() {
  return (
    <section className="h-full flex-1 overflow-y-auto px-10 py-5">
      <h2 className="mb-4 text-2xl font-extrabold">My Projects</h2>
      <div className="flex flex-col gap-5">
        {projects.map((p) => (
          <Card key={p.id} link={p.link} title={p.title} desc={p.desc} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
