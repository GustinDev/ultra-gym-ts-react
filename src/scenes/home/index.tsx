//Standard Imports

import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
//IMG
import HomePageGraphic from "@/assets/InicioImg.png";
import Nordictrack from "@/assets/Nordictrack.png";
import LifeFitness from "@/assets/Life.png";
import Cybex from "@/assets/Cybex.svg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <div className="p -mt-20 bg-gray-20 p-20 md:m-0">
      <section
        id="inicio"
        className="gap-10 md:flex md:h-full md:py-10 md:pb-0"
      >
        {/* IMAGEN Y HEADER */}
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Inicio)}
          className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        >
          {/* HEADER */}
          <div className="z-10 mt-32 md:basis-3/5">
            {/* HEADINGS */}
            <motion.div
              className="md:-mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="relative">
                <div className="before:absolute before:-left-20  before:-right-8 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                  <h1 className="-ml-2 font-montserrat text-8xl font-bold text-home-title-color underline decoration-primary-700">
                    ULTRAGYM
                  </h1>
                  <p className="font-bold text-title-color ">
                    FUERZA Y DISCIPLINA.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-lg ">
                Gimnasio de primera. Entrenamiento inigualable. Entrenadores
                expertos. ¡Te ayudaremos a lograr tus metas!
              </p>
            </motion.div>
            {/* ACCIONES */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="mt-8 flex items-center gap-8 font-bold md:justify-start"
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Únete Ahora
              </ActionButton>
            </motion.div>
          </div>
        </motion.div>
        {/* IMAGE */}
        <div className="flex basis-3/5 items-center justify-center md:z-10 md:mt-5 ">
          <img src={HomePageGraphic} alt="jeje" />
        </div>
        {/* SPONSOR */}
      </section>

      <div className="mt-5 h-[150px] w-full">
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <img src={Nordictrack} height={"100px"} width={"130px"} alt="nordi" />
          <img src={LifeFitness} height={"100px"} width={"130px"} alt="life" />
          <img src={Cybex} height={"100px"} width={"130px"} alt="Cybex" />
        </div>
      </div>
    </div>
  );
};

export default Home;
