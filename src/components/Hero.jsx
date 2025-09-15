import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full item-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        {/* Animating background element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black-500 to-gray-500"
          style={{
            zIndex: "-1",
          }}
        ></motion.div>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w[600px] flex-col items-center justify-center gap-3 text-center"
        >
          {/* Title Animation */}
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl"
          >
            Rispa Joseph
          </motion.h1>

          {/* Subtitle Animation */}
          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl"
          >
            Software Developer
          </motion.h3>

          {/* Description Animation */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:text-base text-pretty text-sm text-gray-400"
          >
            I’m a passionate Software Developer with expertise in both frontend and backend
            technologies. I specialize in crafting scalable web applications using modern frameworks,
            RESTful APIs, and database management. I also excel at optimizing DevOps processes
            through CI/CD, automation, and cloud integration. Let’s transform your ideas into seamless,
            high-performance solutions!
          </motion.p>
        </motion.div>

        {/* Added Animation on an Action Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 py-3 px-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700"
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get in Touch
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
