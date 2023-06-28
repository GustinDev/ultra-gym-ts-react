import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitItem from "./BenefitItem";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Instalaciones Mordernas",
    description: "Hola1",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Clases Diversas",
    description: "Hola2",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Entrenadores expertos.",
    description: "Hola3",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: Props) => {
  const textTitle = "basis-3/5 font-montserrat text-3xl font-bold";

  return (
    <div className="min-h-full bg-gray-20 ">
      <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 bg-gray-20 py-20 "
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          onViewportEnter={() => setSelectedPage(SelectedPage.Beneficios)}
        >
          <div className="md:my-5 md:w-3/5">
            {/* HEADER */}
            <h1 className={`${textTitle}`}>¡MÁS QUE UN GYM!</h1>
            <p className="text.sm my-5">
              {" "}
              We provide world class fitness equipment, trainers and classes to
              get you to your ultimate fitness goals with ease. We provide true
              care into each and every member.
            </p>
          </div>
          {/* BENEFITS */}
          <motion.div
            className="mt-5 items-center justify-between gap-8 md:flex"
            initial="hidden"
            whileInView="visible"
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
          {/* GRAPHICS AND TEXT */}
          <div className="mt-[100px] flex flex-col items-center justify-between gap-20  md:flex-row">
            {/* GRAPHIC */}
            <img
              src={BenefitsPageGraphic}
              alt="img-benef"
              className="mx-auto"
            />
            {/* DESCRIPTION    */}
            <div>
              {/* TITLE */}
              <div className="relative">
                <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves ">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <h1 className={`${textTitle}`}>
                      ÚNETE A NOSOTROS, <br /> VOLVAMONOS{" "}
                      <span className="text-primary-500"> FIT</span>
                    </h1>
                  </motion.div>
                </div>
              </div>
              {/* DESC */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="my-5"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime officiis est accusantium ad. Quod, eos iste. Delectus
                  ad dolorem omnis quos iusto ut, a eius aliquid dolores, maxime
                  earum quis.
                </p>
              </motion.div>
              {/* BUTTON */}
              <motion.div
                className="relative mt-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="before:absolute before:-bottom-20 before:right-10 before:z-[1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Benefits;
