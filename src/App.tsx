import Personal from "./components/Personal";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col justify-center px-6 py-8 md:px-12 md:py-10  lg:h-screen lg:flex-row lg:gap-10 lg:px-24 lg:py-12">
      <Personal />
      <Projects />
    </main>
  );
}

export default App;
