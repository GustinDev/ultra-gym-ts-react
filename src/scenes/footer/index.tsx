const Footer = () => {
  return (
    <footer className="bg-nav-color pt-8">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <h2 className="font-montserrat text-2xl font-bold text-gray-500">
            ULTRAGYM
          </h2>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="mb-4 font-bold">Información</h4>
          <p>(Pronto abriremos)</p>
          <p className="my-5">Calle 3 #14 - 120</p>
          <p className="my-5">Pasto, Nariño.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="mb-4 font-bold">Contacto</h4>

          <p>(333)425-6825</p>
        </div>
      </div>
      <div>
        <h1 className="mt-5 bg-primary-500 px-2 py-1 text-end font-bold text-white">
          Realizado por:{" "}
          <a
            target="_blank"
            className="hover:text-gray-500"
            href="https://gustindev.github.io/developer-portfolio/"
          >
            Juan Gustin
          </a>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
