"use client";
import BitnationWrapper from "@/components/BitnationWrapper";
import { Grid, Container } from "@bitnation-dev/components";
import Image from "next/image";
import { Button } from "../components/buttons";
import Card from "../components/card";
import { motion } from "motion/react";
const Blogs = () => {
  const title = [
    "¿Cómo Instalar Gabinetes de Cocina?",
    "¿Cómo Instalar Pisos en Cocina?",
    "¿Cómo Instalar Locetas?",
  ];
  const description = [
    "Ventanas europeas elegantes y funcionales, con sistemas innovadores de apertura y cierre, ideales para cualquier proyecto.",
    "Fabricación y montaje de estructuras de aluminio para cocinas, puertas, y closets, con durabilidad y estilo.",
    "Topes de cocina en materiales naturales, que combinan belleza y funcionalidad.",
  ];
  const image = [
    "/Cocina/cocina1.jpg",
    "/Cocina/cocina2.jpg",
    "/Cocina/cocina3.jpg",
  ];
  return (
    <BitnationWrapper>
      <Container
        className="h-[10vh] my-5 lg:h-[30vh] lg:my-10"
        style={{
          backgroundImage: `url(/Fachada/facha3.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "70% 25%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="flex flex-col items-center md:items-start justify-center lg:h-[20vh]"
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 2,
              ease: "easeOut",
            },
          }}
        >
          <h1 className="text-white text-2xl font-bold uppercase lg:text-6xl">
            Blogs
          </h1>
        </motion.div>
      </Container>
      <Container>
        <Grid columns={{ xl: 2, lg: 2, md: 1, sm: 1 }} className="mb-8">
          <h1 className="text-black text-2xl font-bold uppercase block sm:hidden">
            Últimos Blogs
          </h1>
          <motion.div
            className="text-black flex space-x-4 mb-10"
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 2,
                ease: "easeOut",
              },
            }}
          >
            <Image
              src="/Otros/otro17.jpg"
              alt="Imagen 1"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className=" space-y-4 w-full flex flex-col justify-center pt-0 lg:pt-32"
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 2,
                ease: "easeOut",
              },
            }}
          >
            <div className="bg-black text-white w-fit font-bold  justify-center items-center p-4">
              <h1 className="text-center uppercase">
                ¿Cómo Instalar Pisos Modernos?
              </h1>
            </div>
            <div className="flex flex-col justify-end space-y-4">
              <p className="text-sm font-bold w-72 text-balance text-black">
                La instalación adecuada es clave para lograr un acabado
                impecable y duradero. En este artículo...
              </p>
              <Button text="Leer más" icon width="200px" />
            </div>
          </motion.div>
        </Grid>
        <h1 className="text-black text-2xl font-bold uppercase block sm:hidden">
          Posts Recientes
        </h1>
        <div className="flex flex-none overflow-x-auto gap-6 w-full pb-10">
          {Array.from({ length: 3 }).map((_, id) => (
            <motion.div
              key={id}
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 2,
                  ease: "easeOut",
                },
              }}
            >
              <Card
                key={id}
                title={title[id]}
                description={description[id]}
                image={image[id]}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </BitnationWrapper>
  );
};

export default Blogs;
