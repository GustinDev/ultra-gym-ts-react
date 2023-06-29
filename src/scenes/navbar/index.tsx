import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Logo from "@/assets/Logo.png";
import Link from "./link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  //TW
  const flexBetween = "flex items-center justify-between";

  //*MEDIA - HOCK
  //Le pasamos el tamaño medio, analiza la pantalla y no da true (si estamos por arriba del tamaño medio) o false (si estamos abajo del tramaño medio).
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [isMenuToggled, setIsMenuToggled] = useState(false);

  //Nav BG

  const navbarBackground = isTopOfPage ? "" : "bg-nav-color drop-shadow";

  return (
    <nav
      className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 w-full py-6`}
    >
      <div className={` ${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* LEFT */}
          <img src={Logo} alt="logo" />
          {/* RIGHT - CONTAINER*/}
          {isAboveMediumScreens ? (
            // +MEDIUM
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm font-bold`}>
                <Link
                  name="Inicio"
                  page="Inicio"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  name="Beneficios"
                  page="Beneficios"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  name="Clases"
                  page="Clases"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  name="Contáctanos"
                  page="Contactanos"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8 text-sm font-bold`}>
                <p>Ingresa</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Únete
                </ActionButton>
              </div>
            </div>
          ) : (
            // MOBILE
            <button
              onClick={() => {
                setIsMenuToggled(!isMenuToggled);
              }}
              type="button"
              className="rounded-full bg-secondary-500 p-2 hover:bg-secondary-600"
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>
      {/* MENÚ MOBILE - CONDICIONAL: 
      Si no está por arriba de md y no está toggled */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button
              onClick={() => {
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <XMarkIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
            </button>
          </div>
          <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
            <Link
              name="Inicio"
              page="Inicio"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              name="Beneficios"
              page="Beneficios"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              name="Clases"
              page="Clases"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              name="Contáctanos"
              page="Contactanos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
