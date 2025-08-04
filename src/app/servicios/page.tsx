"use client"
import Container from "@bitnation-dev/components/dist/components/containers/Container";
import ServiceCard from "../components/serviceCard";
import BitnationWrapper from "@/components/BitnationWrapper";
import { motion } from "framer-motion";
const Servicios = () => {
    const services = [
        { title: "Ventanas", description: "Ofrecemos una variedad de ventanas europeas, diseñadas para combinar elegancia y funcionalidad, con sistemas de apertura y cierre innovadores para cualquier tipo de proyecto.", image: "/image10.png", list: ["Línea P40", "Oscilobatiente", "Abisagrada", "Proyectada", "Pibotante", "Línea P65", "P92", "Perimetral M100", "C70", "E100"] },
        { title: "Aluminio", description: "Especialistas en la fabricación y montaje de estructuras de aluminio, nuestras soluciones son ideales para cocinas, puertas, closets y más, ofreciendo durabilidad y estilo.", image: "/image11.png", list: ["Cocinas", "Puertas", "Closets", "Carpintería", "Pergolado", "Aluminio en general"] },
        { title: "Topes de Cocina", description: "Nuestros topes de cocina están disponibles en una variedad de materiales naturales, proporcionando belleza y funcionalidad a su espacio.", image: "/image12.png", list: ["Granito", "Cuarzo", "Mármol", "Piedras Naturales"] },
        { title: "Acero Inoxidable", description: "Trabajos de alta calidad en acero inoxidable, ideales para barandas, pasamanos y todo tipo de estructuras que requieren resistencia y un acabado elegante.", image: "/image14.png", list: ["Baños", "Balcones", "Vidrios fijos", "Puertas", "Escaleras", "Fachadas flotantes", "Fachadas comerciales", "Canteo de cristales"] },
        { title: "Cristalería", description: "Ofrecemos soluciones en cristalería para baños, balcones, escaleras y fachadas, con un enfoque en seguridad y diseño moderno.", image: "/image13.png", list: ["Barandas", "Pasamanos", "Todo tipo de estructura en acero inoxidable"] },
        { title: "Estructuras en Sheetrock/Densglass", description: "Especialistas en la instalación de estructuras con materiales de alta calidad, proporcionando durabilidad y eficiencia en construcción.", image: "/image15.png", list: ["Sheetrock", "Densglass"] },
        { title: "Trabajos en PVC", description: "Soluciones en PVC para diversas aplicaciones, ofreciendo resistencia y versatilidad para proyectos interiores y exteriores.", image: "/image16.png", list: [] },
        { title: "Servicios Especiales en terminaciones", description: "Ofrecemos una gama de servicios adicionales para satisfacer las necesidades específicas de cada cliente, desde puertas personalizadas hasta sistemas de iluminación.", image: "/image17.png", list: ["Puertas con entablillado", "Fachada en aluminio", "Cercas", "Protectores", "Cortinas black out", "Permas", "Shutters", "Toldos", "Electricidad en general", "Iluminación", "Formaleta", "Pisos", "Plomería", "Plafones comerciales", "Pintura", "Alquiler de andamios"] },

    ]

    const firstSectionServices = services.slice(0, 4);
    const secondSectionServices = services.slice(4);

    return (
        <BitnationWrapper className="overflow-x-hidden">
            <Container className="h-[10vh] my-5 lg:h-[30vh] lg:my-10"
                style={{
                    backgroundImage: `url(/image.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <motion.div className="flex flex-col  justify-center items-center lg:h-[20vh] "
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
                >
                    <h1 className="text-white text-2xl font-bold uppercase lg:text-4xl">Nuestros Servicios</h1>
                </motion.div>
            </Container>
            <Container className="m-auto py-12 ">
                <div>
                    {firstSectionServices.map((service, id) => (
                        <motion.div
                            key={id}
                            initial={{
                                opacity: 0,
                                x: -100
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut"
                                }
                            }}
                            viewport={{
                                once: true,
                                margin: "-100px"
                            }}
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                image={service.image}
                                list={service.list}
                                reversed={id % 2 !== 0}
                            />
                        </motion.div>
                    ))}
                </div> 
            </Container>
            <Container className="flex flex-col justify-center items-center w-full h-[35vh] bg-black">
                <motion.div className="text-center font-bold text-white mb-8 uppercase wrap-pretty lg:text-4xl"
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
                >
                    &quot;Tu socio confiable en acabados de alta calidad y diseño exclusivo.&quot;
                </motion.div>

                <div className="flex  justify-center w-full">
                    <button className="bg-[#D60B41] text-white px-4 py-2 w-fit">
                        <h1> CONTACTANOS</h1>
                    </button>
                </div>
            </Container>
            <Container className="m-auto py-12">
                <div>
                    {secondSectionServices.map((service, id) => (
                        <motion.div
                            key={`section2-${id}`}
                            initial={{
                                opacity: 0,
                                x: 100
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeOut"
                                }
                            }}
                            viewport={{
                                once: true,
                                margin: "-100px"
                            }}
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                image={service.image}
                                list={service.list}
                                reversed={id % 2 !== 0}
                            />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </BitnationWrapper>
    )
}

export default Servicios;
