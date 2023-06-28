//Standard Imports
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
//IMG
import HomePageGraphic from "@/assets/InicioImg.png";
import HomePageText from "@/assets/HomePageText.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="p bg-gray-20 p-20">
      <section id="inicio" className="gap-10 py-10 md:flex md:h-full md:pb-0">
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
                <div className="before:absolute before:-left-20  before:-top-20  before:z-[-1] md:before:content-evolvetext">
                  <img src={HomePageText} alt="txt" />
                </div>
              </div>
              <p className="mt-8 text-sm ">
                Unrivaled Gym. Unparalleled Training Fitness Classes. World
                Class Studios to get the Body Shapes That you Dream of.. Get
                Your Dream Body Now.
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
                Únete
              </ActionButton>
              <AnchorLink
                className="text-md font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.Contáctanos)}
                href={`#${SelectedPage.Contáctanos}`}
              >
                <p>Contáctanos.</p>
              </AnchorLink>
            </motion.div>
          </div>
        </motion.div>
        {/* IMAGE */}
        <div className="flex basis-3/5 items-center justify-center md:z-10 md:mt-5 ">
          <img src={HomePageGraphic} alt="jeje" />
        </div>
        {/* SPONSOR */}
      </section>
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full">
          <div className="mx-auto flex w-5/6 items-center justify-between">
            <img src={SponsorRedBull} height={"100px"} alt="redbull" />
            <img src={SponsorForbes} height={"100px"} alt="redbull" />
            <img src={SponsorFortune} height={"100px"} alt="redbull" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
