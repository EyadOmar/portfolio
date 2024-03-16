import Personal from "./components/Personal";

function App() {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col justify-center px-6 py-8 md:px-12  md:py-10 lg:flex-row lg:gap-10 lg:px-24 lg:py-12">
      <Personal />
      <section className="flex-1"></section>
    </main>
  );
}

export default App;
