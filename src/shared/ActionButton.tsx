import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <div>
      <AnchorLink
        onClick={() => setSelectedPage(SelectedPage.Contáctanos)}
        href="#contactanos"
        className="rounded-md  bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      >
        {children}
      </AnchorLink>
    </div>
  );
};

export default ActionButton;
