import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import BenefitItem from "./BenefitItem";

const benefits = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Espacio de Vanguardia",
    description:
      "Descubre un gimnasio moderno con las últimas tendencias en equipamiento y tecnología de punta.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Ambiente Inspirador",
    description:
      " Sumérgete en un entorno contemporáneo y energizante que te motiva a alcanzar tus metas.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Experiencia Personalizada",
    description:
      "Nuestro equipo de entrenadores te brinda un enfoque individualizado para alcanzar tus objetivos.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="beneficios" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Beneficios)}
      >
        {/* HEADER */}
        <motion.div
          className="md:-my-28 md:mb-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="font-montserrat text-2xl font-bold text-title-color sm:text-6xl">
            MÁS QUE UN{" "}
            <span className="text-primary-700 underline">GIMNASIO</span>
          </h1>
          <p className="text-md my-5">
            Ofrecemos equipos de fitness de clase mundial, entrenadores y clases
            para ayudarte a alcanzar tus objetivos de acondicionamiento físico
            con facilidad. Brindamos una atención genuina a cada uno de nuestros
            valiosos miembros.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 flex flex-col items-center justify-between gap-8 md:flex md:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <BenefitItem
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h1 className="font-montserrat text-2xl font-bold">
                    ÚNETE AL MOVIMIENTO{" "}
                    <span className="text-primary-700">VOLVÁMONOS FIT</span>
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Descubre el verdadero poder de estar en forma en nuestro
                gimnasio. No se trata solo de una cuestión de apariencia, sino
                de cuidar de tu bienestar integral. Al mantenerte activo y en
                forma, fortaleces tu cuerpo, mejoras tu salud, aumentas tu
                energía y vitalidad, y te empoderas para enfrentar cualquier
                desafío.
              </p>
              <p className="mb-5">
                Únete a nosotros y experimenta una transformación que trasciende
                lo físico. ¡Te esperamos para ayudarte a alcanzar tu mejor
                versión!
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="font-bold before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  ¡Únete!
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
