import { WhatsappIcon } from "./icons";
import { Container, Grid } from "@bitnation-dev/components";
import { motion } from "motion/react";
const HelpInfo = ({ onSubmit }: { onSubmit?: () => void }) => {
    return (
        <Container className="w-full space-y-4 lg:mb-16">
            <Grid columns={{ xl: 2, lg: 2, md: 1, sm: 1 }} className="!gap-2">
                <motion.div className=" w-full px-0 lg:px-4 h-full space-y-4 "
                                    initial={{
                                        opacity: 0,
                                        x: -100
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
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
                    <h1 className="uppercase text-4xl font-bold text-black md:text-6xl">¿Cómo podemos ayudarte?</h1>
                    <div className="pt-6">
                        <h1 className="text-2xl font-bold text-black ">Contactos directos</h1>
                    </div>
                    <div className="pb-4 ">
                        <p className="text-black text-md">
                            Teléfono de planta: +1 (809) 819-2499
                        </p>
                        <p className="text-black text-md">
                            Servicio al cliente: +1 (829) 745-1201
                        </p>
                        <p className="text-black text-md">
                            Flota de ventas: +1 (829) 657-9768
                        </p>
                    </div>
                    <h1 className="text-2xl font-bold text-black">
                        Correo electrónico
                    </h1>
                    <p className="text-black text-md">
                        yerdozasrl@gmail.com
                    </p>
                    <button className="bg-black text-white px-4 py-4 w-full lg:w-72 font-bold mt-4 flex justify-center items-center ">
                        <WhatsappIcon />
                    </button>

                </motion.div>
                <motion.div className="flex flex-col space-y-2 w-full px-0 lg:px-4"
                                                        initial={{
                                                            opacity: 0,
                                                            x: 100
                                                        }}
                                                        whileInView={{
                                                            opacity: 1,
                                                            x: 0,
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
                    <div className="w-full">
                        <h2 className="text-lg font-semibold mb-2 text-black">Nombre</h2>
                        <input
                            type="text"
                            placeholder=""
                            className="w-full px-3 py-2 border text-black bg-gray-100"
                        />
                    </div>
                    <div className="w-full">
                        <h2 className="text-lg font-semibold mb-2 text-black">Número</h2>
                        <input
                            type="text"
                            placeholder=""
                            className="w-full px-3 py-2 border text-black bg-gray-100"
                        />
                    </div>
                    <div className="w-full">
                        <h2 className="text-lg font-semibold text-black">Asunto</h2>
                        <textarea
                            placeholder=""
                            className="w-full px-3 py-2 border text-black bg-gray-100"
                        ></textarea>
                    </div>
                    <div className="w-full">
                        <h2 className="text-lg font-semibold text-black">Mensaje</h2>
                        <textarea
                            placeholder=""
                            className="w-full px-3 py-2 border text-black bg-gray-100"
                            rows={4}
                        ></textarea>
                    </div>
                    <button className="bg-black text-white px-4 py-4 font-bold mt-4 justify-center items-center w-full" onClick={onSubmit}>
                        <h1 className="text-center uppercase">Enviar Mensaje</h1>
                    </button>
                </motion.div>
            </Grid>
        </Container>
    )
}

export default HelpInfo;