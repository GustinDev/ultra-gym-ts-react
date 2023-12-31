import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";
import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";
import Classes from "./scenes/classes";
import ContactUs from "./scenes/contact";
import Footer from "./scenes/footer/index";

const Routes = () => {
  //Restringimos a que solo podemos pasar las opciones de arriba. Le pasamos Inicio por defecto. Modificamos todos los props.

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Inicio
  );

  const [isTopOfPage, setIsTopOfPage] = useState(true);

  //Si hay 0 scroll ponemos el menu en top (y el Inicio sale rojo).
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Inicio);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Classes setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
};

export default Routes;
