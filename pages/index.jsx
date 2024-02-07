import Section2 from "./Components/Section2";
import Header from "./Components/Header";
import Section from "./Components/Section";

export default function Home() {
  return (
    <main className="bg-slate-100 dark:bg-slate-800 dark:text-slate-200 text-slate-800 ">
      <Header />
      <Section />
      <Section2 />
    </main>
  );
}
