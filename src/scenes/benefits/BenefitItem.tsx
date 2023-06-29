import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const BenefitItem = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className=" ml-2 w-[400px] rounded-md border-2 border-gray-300 px-5 py-16 text-left"
    >
      <div className=" flex justify-center">
        <div className="rounded-full border-2 border-gray-200  p-4">{icon}</div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-md font-bold text-primary-700 underline hover:text-primary-500"
        onClick={() => setSelectedPage(SelectedPage.Contáctanos)}
        href={`#${SelectedPage.Contáctanos}`}
      >
        <p>Contáctanos.</p>
      </AnchorLink>
    </motion.div>
  );
};

export default BenefitItem;
