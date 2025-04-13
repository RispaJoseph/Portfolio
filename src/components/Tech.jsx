import { BiLogoAws, BiLogoDjango, BiLogoDocker, BiLogoKubernetes, BiLogoPostgresql, BiLogoPython, BiLogoReact } from "react-icons/bi";
import { motion } from "framer-motion";

const techIcons = [
  { icon: BiLogoPython, color: "text-yellow-500" },
  { icon: BiLogoPostgresql, color: "text-blue-500" },
  { icon: BiLogoDjango, color: "text-green-500" },
  { icon: BiLogoDocker, color: "text-blue-500" },
  { icon: BiLogoAws, color: "text-orange-500" },
  { icon: BiLogoKubernetes, color: "text-blue-500" },
  { icon: BiLogoReact, color: "text-sky-500" },
];

const iconVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.1,
      type: "tween",
      duration: 0.5,
    },
  }),
  hover: {
    scale: 1.1,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

const Tech = () => {
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <h1 className="text-4xl font-light text-white md:text-6xl">Technologies</h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        {techIcons.map(({ icon: Icon, color }, index) => (
          <motion.div
            key={index}
            className="cursor-pointer"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            custom={index}
          >
            <Icon className={`text-[80px] sm:text-[100px] md:text-[120px] ${color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
