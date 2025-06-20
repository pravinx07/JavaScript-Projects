import { motion } from "framer-motion";

const cards = [
  { title: "Speed", desc: "Super fast performance with V8." },
  { title: "Flexibility", desc: "Modular UI with reusable components." },
  { title: "Smooth UI", desc: "Framer Motion powered transitions." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Card() {
  return (
    <div className="flex flex-col p-20 items-center justify-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl text-center font-bold"
      >
        Build Smooth Animated UI
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all"
          >
            <h2 className="text-xl text-center mb-3">{card.title}</h2>
            <p className="text-center text-gray-300">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}



