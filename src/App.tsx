import Navbar from "@/scenes/navbar";
import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";

function App() {
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
    </div>
  );
}

export default App;
