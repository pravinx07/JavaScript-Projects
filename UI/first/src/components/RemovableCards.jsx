
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const allCards = [
  { id: 1, title: "Speed", desc: "Super fast performance with V8." },
  { id: 2, title: "Flexibility", desc: "Modular UI with reusable components." },
  { id: 3, title: "Smooth UI", desc: "Framer Motion powered transitions." },
];

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.4 } },
};


export default function RemovableCards() {
  const [cards, setCards] = useState(allCards);

  const handleRemove = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <div className="flex flex-col p-10 items-center justify-center text-white min-h-screen bg-black">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl font-bold mb-10"
      >
        ✨ Remove Cards with Exit Animations
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              className="bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all relative"
            >
              <h2 className="text-xl text-center mb-2">{card.title}</h2>
              <p className="text-center text-gray-300 mb-4">{card.desc}</p>
              <button
                onClick={() => handleRemove(card.id)}
                className="absolute top-2 right-3 text-sm px-2 py-1 bg-red-600 rounded hover:bg-red-700 transition"
              >
                ✖
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
