import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Contact from "@/assets/Contact.jpg";
import { SelectedPage } from "@/shared/types";
//Mail
import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = ` w-full rounded-lg bg-primary-500 px-5 py-3 placeholder-white text-white`;

  const {
    register,
    trigger,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //MailJS

  const alertConfirm = () => {
    Swal.fire({
      title: "Mensaje Enviado",
      text: "Nos contactaremos pronto.",
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#192C8C",
    });
  };

  const formo = useRef<HTMLFormElement>(null);
  const onSubmit = async () => {
    // e.preventDefault();

    const isValid = await trigger();
    if (!isValid) {
      return;
    }
    if (formo.current) {
      emailjs
        .sendForm(
          "service_prr11cf",
          "template_0glkzy9",
          formo.current,
          "u-QBAzeFYmV_VDbW6"
        )
        .then(
          (result) => {
            console.log(result.text);
            //handleSubmit();
            console.log("Mensaje Enviado.");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    alertConfirm();
    reset();
  };

  return (
    <section id="contactanos" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Contáctanos)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="font-montserrat text-2xl font-bold">
            ¿QUIERES RECIBIR MÁS
            <span className="text-primary-700"> INFORMACIÓN</span>?
          </h1>
          <p className="my-5">
            Por favor, ingresa tus datos y te contactaremos pronto.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-start gap-8 md:flex">
          <motion.div
            className="mt-10 md:mt-0 md:w-2/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form ref={formo} onSubmit={handleSubmit(onSubmit)}>
              <input
                className={inputStyles}
                type="text"
                placeholder="Nombre"
                {...register("user_name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.user_name ? (
                <p className="mb-2 text-primary-500">
                  {errors.user_name.type === "required" &&
                    "Este campo es obligatorio."}
                  {errors.user_name.type === "maxLength" &&
                    "La longitud máxima es 100."}
                </p>
              ) : (
                <div className=" mb-2 h-[24px]"></div>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="Celular"
                {...register("user_phone", {
                  required: true,
                  pattern: /^[0-9\s+()-]*$/, // Expresión regular para validar números y símbolos
                })}
              />
              {errors.user_phone ? (
                <p className="mb-2 text-primary-500">
                  {errors.user_phone.type === "required" &&
                    "Este campo es obligatorio."}
                  {errors.user_phone.type === "pattern" &&
                    "Número de celular inválido."}
                </p>
              ) : (
                <div className=" mb-2 h-[24px]"></div>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="Email"
                {...register("user_email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.user_email ? (
                <p className="mb-2 text-primary-500">
                  {errors.user_email.type === "required" &&
                    "Este campo es obligatorio."}
                  {errors.user_email.type === "pattern" &&
                    "Dirección de correo inválido."}
                </p>
              ) : (
                <div className=" mb-2 h-[24px]"></div>
              )}

              <textarea
                className={inputStyles}
                placeholder="Mensaje"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message ? (
                <p className="mb-2 text-primary-500">
                  {errors.message.type === "required" &&
                    "Este campo es obligatorio."}
                  {errors.message.type === "maxLength" &&
                    "La longitud máxima es de 200 catácteres."}
                </p>
              ) : (
                <div className=" mb-2 h-[24px]"></div>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 font-bold transition duration-500 hover:text-white"
              >
                ENVIAR
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex w-[300px] before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="hidden h-[410px] w-full rounded-xl object-fill md:flex"
                alt="contact-us-page-graphic"
                src={Contact}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
