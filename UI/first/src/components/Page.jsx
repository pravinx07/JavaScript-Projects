import AnimatedNavbar from "./AnimatedNavbar";

export default function Page() {
  return (
    <div className="bg-black text-white">
      <AnimatedNavbar />
      <div className="pt-24 space-y-48 p-10 min-h-[200vh]">
        <section className="bg-gray-800 p-10 rounded-xl">
          <h2 className="text-3xl font-bold">Scroll Down 👇</h2>
        </section>
        <section className="bg-gray-700 p-10 rounded-xl">
          <h2 className="text-3xl font-bold">Navbar hides when scrolling down 👻</h2>
        </section>
      </div>
    </div>
  );
}
