"use client";
import Container from "@bitnation-dev/components/dist/components/containers/Container";
import { Grid } from "@bitnation-dev/components";
import HelpInfo from "../components/helpInfo";
import BitnationWrapper from "@/components/BitnationWrapper";
import { motion } from "motion/react";

const Contactos = () => {
  return (
    <BitnationWrapper>
      <Container
        className="h-[10vh] my-5 lg:h-[30vh] lg:my-10 "
        style={{
          backgroundImage: `url(/Otros/otro11.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "70% 25%",
          backgroundRepeat: "no-repeat",
          width: "100vw",
        }}
      >
        <motion.div
          className="flex flex-col  justify-center lg:h-[20vh]"
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: "easeOut",
            },
          }}
        >
          <h1 className="text-white text-2xl font-bold uppercase lg:text-4xl">
            Contactos
          </h1>
        </motion.div>
      </Container>
      <Container>
        <HelpInfo onSubmit={() => {}} />
      </Container>
      <Container
        className="h-[50vh] my-5 lg:h-[60vh] lg:my-10 bg-contain lg:bg-cover"
        style={{
          backgroundImage: `url(/Otros/otro4.jpg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
        }}
      ></Container>
      <Container className="pb-10">
        <Grid columns={{ xl: 2, lg: 2, md: 1, sm: 1 }}>
          <motion.div
            className="text-black space-y-4"
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                ease: "easeOut",
              },
            }}
            viewport={{
              once: true,
              amount: "some",
            }}
          >
            <h1 className="text-2xl font-bold">Correo Electrónico</h1>
            <ul className="text-lg list-disc pl-5">
              <li>yerdozasrl@gmail.com</li>
            </ul>
            <h1 className="text-2xl font-bold">Horarios de Trabajo:</h1>
            <ul className="text-lg list-disc pl-5">
              <li>Lunes a Viernes: 9:00 - 18:00</li>
              <li>Sábados: 9:00 - 13:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
            <h1 className="text-2xl font-bold">Dirección:</h1>
            <ul className="text-lg list-disc pl-5 text-blue-500 hover:underline hover:cursor-pointer">
              <li>
                Calle Federico Henríquez y Carvajal #37, Sector Tamboril,
                Santiago de los Caballeros, Rep. Dom.
              </li>
            </ul>
          </motion.div>
          <motion.div
            className=" w-full "
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
                ease: "easeOut",
              },
            }}
            viewport={{
              once: true,
              amount: "some",
            }}
          >
            <div className="mapContainer w-full">
              <iframe
                width="100%"
                height="465"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?${new URLSearchParams(
                  {
                    key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
                    q: "Calle Federico Henríquez y Carvajal #37, Sector Tamboril, Santiago de los Caballeros, Rep. Dom.",
                  }
                )}`}
              ></iframe>
              <button
                className="bg-black text-white px-4 py-4 w-fit font-bold mt-4 justify-center items-center block sm:hidden"
                onClick={() => {}}
              >
                <h1 className="text-center uppercase">Cómo llegar?</h1>
              </button>
            </div>
          </motion.div>
        </Grid>
      </Container>
    </BitnationWrapper>
  );
};

export default Contactos;
