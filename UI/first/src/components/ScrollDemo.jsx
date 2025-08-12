import SmartScroll from "./SmartScroll";

export default function ScrollDemo() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 space-y-40">
      <h1 className="text-4xl font-bold text-center">Scroll Down 👇</h1>

      <SmartScroll>
        <div className="bg-gray-800 p-10 rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-semibold">🔥 I'm Animated!</h2>
          <p className="text-gray-300">I appear when in view and hide when out!</p>
        </div>
      </SmartScroll>

      <div className="h-[200vh]" />
    </div>
  );
}
