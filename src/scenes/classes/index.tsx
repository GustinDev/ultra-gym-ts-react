import { ClassType, SelectedPage } from "@/shared/types";
import image9 from "@/assets/image9.jpg";
import image7 from "@/assets/image7.jpg";
import image8 from "@/assets/image8.jpg";
import { motion } from "framer-motion";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Clases de Spinning",
    image: image7,
  },
  {
    name: "Clases de Levantamiento de Pesas",
    image: image8,
  },
  {
    name: "Clases de Yoga",
    image: image9,
  },
];

const Classes = ({ setSelectedPage }: Props) => {
  return (
    <section id="clases" className=" bg-gray-20 py-40">
      <motion.div
        className="mx-auto w-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Clases)}
      >
        <div>
          <h1 className={`font-montserrat text-6xl font-bold`}>
            NUESTRAS CLASES
          </h1>
          <p className="py-5">
            Te invitamos a asistir a nuestras clases, descubre una nueva forma
            de vivir el fitness.
          </p>
        </div>
      </motion.div>
      <div className="z-10  mx-auto mt-10 h-[353px] w-5/6 overflow-x-auto overflow-y-hidden hover:cursor-pointer">
        <ul className="w-[1500px] whitespace-nowrap">
          {classes.map((item: ClassType, index) => (
            <Class
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Classes;
