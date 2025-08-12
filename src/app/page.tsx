"use client"
import { Container, Grid, Column } from "@bitnation-dev/components";
import { motion } from "framer-motion"
import { Button } from "./components/buttons";
//import CardComment from "./components/cardComment";
import Card from "./components/card";
import { useState } from 'react';
import Image from "next/image";
import HelpInfo from "./components/helpInfo";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<string | null>('cristaleria');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const router = useRouter();

  const categoryImages = {
    cristaleria: ["/Puertas/puertas18.jpg", "/Puertas/puertas2.jpg", "/Puertas/puertas3.jpg", "/Closet/closet1.jpg", "/Closet/closet2.jpg"],
    ventanas: ["/Ventanas/ventanas.jpg", "/Ventanas/ventanas2.png", "/Ventanas/ventanas3.jpg", "/Ventanas/ventanas4.jpg", "/Ventanas/ventanas5.jpg"],
    aluminio: ["/Balcones/balcon1.jpg", "/Balcones/balcon2.jpg", "/Balcones/balcon3.jpg", "/Balcones/balcon4.jpg", "/Balcones/balcon5.jpg"]
  };

  // Obtener las imágenes de la categoría seleccionada
  const selectedImages = selectedItem ? categoryImages[selectedItem as keyof typeof categoryImages] || [] : [];

  // Función para navegar a la página de portafolio con la categoría seleccionada
  const navigateToPortfolio = (category: string) => {
    router.push(`/portafolio?category=${category}`);
  };

  const cards = [
    {
      "title": "Ventanas",
      "description": "Ventanas europeas elegantes y funcionales, con sistemas innovadores de apertura y cierre, ideales para cualquier proyecto.",
      "image": "/Ventanas/ventanas3.jpg"
    },
    {
      "title": "Aluminio",
      "description": "Fabricación y montaje de estructuras de aluminio para cocinas, puertas, y closets, con durabilidad y estilo.",
      "image": "/Balcones/balcon1.jpg"
    },
    {
      "title": "Topes de Cocina",
      "description": "Topes de cocina en materiales naturales, que combinan belleza y funcionalidad.",
      "image": "/Cocina/cocina1.jpg"
    },
    {
      "title": "Cristaleria",
      "description": "Soluciones de cristalería para baños, balcones, escaleras y fachadas, con seguridad y diseño moderno.",
      "image": "/Puertas/puertas2.jpg"
    }
  ]
  // const profileImage = [
  //   "/Ellipse1.png",
  //   "/Ellipse2.png",
  //   "/Ellipse3.png",
  // ]

  return (
    <div className="overflow-x-hidden w-full">
      <Container className="[&_.container-inside]:h-full  h-[25vh] md:h-[90vh]  mt-12"
        style={{
          backgroundImage: `url(/Otros/otro4.jpg)`,
          backgroundSize: 'cover',
        }}>
        <motion.div className=" flex-col justify-center items-center h-full w-full hidden md:block"
          initial={{
            opacity: 0,
            x: -100
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: "easeOut"
            }
          }}
          style={{ willChange: "transform", overflow: "hidden" }}>
          <div className="flex flex-col h-full w-full space-y-10 justify-center">
            <div className="flex flex-col w-full">
              <p className="text-2xl md:text-4xl font-bold text-[#D60B41] leading-10">Acabados y Soluciones</p>
              <p className="text-white text-xl font-bold md:text-6xl wrap-balance py-3" 
              style={{lineHeight: "5rem"}}
              >PERSONALIZADAS PARA <br /> PROYECTOS  <span>residenciales y <br /> comerciales</span></p>
            </div>
            <Link href="/contactos" className="hidden md:block">
              <Button text="COTIZA AHORA" icon width="328px" />
            </Link>
          </div>
        </motion.div>
      </Container>
      <Container className=" flex-col md:flex-row block md:hidden">
        <motion.div className="flex flex-col md:grid md:grid-cols-2 mb-12 overflow-hidden"
          initial={{
            opacity: 0,
            x: -50
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              ease: "easeOut"
            }
          }}
          style={{ willChange: "transform", overflow: "hidden" }}
        >
          <div className="space-y-2 w-full">
            <h1 className="text-3xl font-bold text-[#D60B41] ">Acabados y Soluciones </h1>
            <h1 className="text-2xl font-bold whitespace-normal text-black">PERSONALIZADAS PARA PROYECTOS  <span>residenciales y  comerciales</span></h1>
          </div>
          <Link href="/contactos" className="block md:hidden mt-8">
            <Button text="COTIZA AHORA" icon  />
          </Link>
        </motion.div>
      </Container>
      {/* <Container className="mt-12 overflow-hidden ">
        <motion.div className="inline-flex flex-nowrap space-x-4  w-full "
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1.5,
            }
          }}
          viewport={{
            once: true,
            amount: "some",
          }}
          style={{ willChange: "opacity, transform", overflow: "hidden" }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <CardComment image={profileImage[index]} key={index} name="Nombre Del Cliente" comment="Yerdoza es una empresa que se encargo de manera completa en la fachada de un departamente realizado por nuestra compañia, muy agradecidos con ustedes." stars={5} />
          ))}
        </motion.div>
      </Container> */}
      <Container className="relative overflow-hidden w-full mt-12">
        <h1 className="md:text-center text-2xl font-bold text-black mb-8 lg:text-4xl wrap-balance">SERVICIOS DESTACADOS</h1>
        <div className="flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden gap-4 w-full pb-4 scrollbar-thin ">
          <style jsx>{`
            .scrollbar-thin::-webkit-scrollbar {
              height: 4px;
            }
            .scrollbar-thin::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 10px;
            }
            .scrollbar-thin::-webkit-scrollbar-thumb {
              background: #D60B41;
              border-radius: 10px;
            }
            .scrollbar-thin {
              scrollbar-width: thin;
            }
          `}</style>
          {cards.map((card, index) => (
            <div key={index} className="snap-center ga">
              <Card title={card.title} description={card.description} image={card.image} />
            </div>
          ))}
        </div>
      </Container>
      <Container className="flex justify-center items-center w-full h-[45vh] bg-[#D60B41] overflow-hidden my-0 md:my-12">
        <motion.div className="flex flex-col w-[70%] items-center justify-center text-center font-bold text-white mb-8 uppercase wrap-pretty lg:text-4xl text-xl mx-auto"
          initial={{
            opacity: 0,
            y: -100
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: "easeOut"
            }
          }}
          viewport={{
            once: true,
            amount: "some",
          }}
          style={{ willChange: "transform", overflow: "hidden" }}
        >
          <h1>somos Tu aliado estratégico para  <span className="text-black"> terminaciones </span> de calidad superior</h1>
        </motion.div>

        <Link href="/contactos" className="flex  justify-center w-full ">
          <div className="flex w-56 h-12 items-center justify-center bg-black">
            <h2 className="text-xl uppercase"> Contáctanos</h2>
          </div>
        </Link>

      </Container>
      <Container className=" overflow-hidden my-0 md:my-16">
        <h1 className="text-center text-4xl font-bold text-black mb-8">PROYECTOS RECIENTES</h1>
        <div className="flex md:flex-row justify-between w-1/2 items-center mx-auto">
          <div className="flex flex-col items-center mb-2">
            <div
              onClick={() => setSelectedItem('cristaleria')}
              className={`uppercase text-center text-sm md:text-xl font-bold cursor-pointer ${selectedItem === 'cristaleria' ? 'text-black' : 'text-[#757575]'}`}
            >
              Cristalería
            </div>
            {selectedItem === 'cristaleria' && (
              <div className="bg-[#D60B41] h-1 rounded-full mb-2" style={{ width: '85%' }}></div>
            )}
          </div>
          
          <div className="flex flex-col items-center mb-2">
            <div
              onClick={() => setSelectedItem('ventanas')}
              className={`uppercase text-center text-sm md:text-xl font-bold cursor-pointer ${selectedItem === 'ventanas' ? 'text-black' : 'text-[#757575]'}`}
            >
              Ventanas
            </div>
            {selectedItem === 'ventanas' && (
              <div className="bg-[#D60B41] h-1 rounded-full mb-2" style={{ width: '85%' }}></div>
            )}
          </div>
          
          <div className="flex flex-col items-center mb-2">
            <div
              onClick={() => setSelectedItem('aluminio')}
              className={`uppercase text-center text-sm md:text-xl font-bold cursor-pointer ${selectedItem === 'aluminio' ? 'text-black' : 'text-[#757575]'}`}
            >
              Aluminio
            </div>
            {selectedItem === 'aluminio' && (
              <div className="bg-[#D60B41] h-1 rounded-full mb-2" style={{ width: '85%' }}></div>
            )}
          </div>
        </div>
        <Grid columns={{ xl: 3, lg: 3, md: 1, sm: 1 }} className="!gap-2">
          <Column columns={{ xl: { width: 2 }, md: { width: 1 } }}>
            <div
              className="cursor-pointer w-full h-full"
              onClick={() => navigateToPortfolio(selectedItem || 'cristaleria')}
            >
              <Image src={selectedImages[activeImageIndex] || "/image5.png"} alt="Imagen principal" width={300} height={300} className="w-full h-full object-cover" style={{ aspectRatio: "16/9" }} />
            </div>
          </Column>
          <div className="grid grid-cols-4 md:grid-cols-2 gap-2">
            {selectedImages.map((image, index) => {
              // Solo mostrar las imágenes que no están seleccionadas actualmente
              if (index !== activeImageIndex) {
                return (
                  <div
                    key={index}
                    className="cursor-pointer w-full h-full"
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <Image src={image} alt={`Imagen ${index + 1}`} width={200} height={200} className="w-full h-full object-cover" style={{ aspectRatio: "4/3" }} />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </Grid>
        <div className="flex flex-col items-center justify-center w-full mt-8">
          <Link href="/portafolio" className="bg-black text-white text-center p-2 h-12 w-60 font-bold  justify-center items-center">
            <h2 className="text-xl uppercase"> VER PORTAFOLIO</h2>
          </Link>
        </div>
      </Container>
      <HelpInfo />
    </div>
  );
}

