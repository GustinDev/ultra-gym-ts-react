import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Link from "./link";

type Props = {
  selectedPage: SelectedPage;
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-nav-color drop-shadow";

  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const fullName = user?.name;
  const firstName = fullName?.split(" ")[0];

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}

            <h2 className="font-montserrat text-2xl font-bold text-gray-500">
              ULTRAGYM
            </h2>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <div className={`${flexBetween} gap-8 text-lg font-bold`}>
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
                <div className={`${flexBetween} gap-8 font-bold`}>
                  {isAuthenticated ? (
                    <>
                      <p className="font-bold">{firstName}</p>
                      <img
                        className="w-10 rounded-full"
                        src={user?.picture}
                        alt={user?.name}
                      />
                      <button
                        onClick={() =>
                          logout({
                            logoutParams: { returnTo: window.location.origin },
                          })
                        }
                      >
                        Cerrar sesión
                      </button>
                    </>
                  ) : (
                    <button onClick={() => loginWithRedirect()}>
                      Ingresar
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className=" flex flex-col gap-10 text-2xl">
            <div
              className={`text-md flex w-full flex-col items-center gap-8 font-bold`}
            >
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
              {isAuthenticated ? (
                <>
                  <p className="font-bold">{firstName}</p>
                  <img
                    className="w-10 rounded-full"
                    src={user?.picture}
                    alt={user?.name}
                  />
                  <button
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <button onClick={() => loginWithRedirect()}>Ingresar</button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
