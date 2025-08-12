"use client"
import { Container } from "@bitnation-dev/components";
import { IconArrowLeft } from "../components/icons";
import { IconArrowRight } from "../components/icons";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const categorias = [
    {
        titulo: "Ventanas",
        imagenes: [
            "/Ventanas/ventanas.jpg",
            "/Ventanas/ventanas2.png",
            "/Ventanas/ventanas3.jpg",
            "/Ventanas/ventanas4.jpg",
            "/Ventanas/ventanas5.jpg"
        ],
        slug: "ventanas"
    },
    {
        titulo: "Aluminio",
        imagenes: [
            "/Balcones/balcon1.jpg",
            "/Balcones/balcon2.jpg",
            "/Balcones/balcon3.jpg",
            "/Balcones/balcon4.jpg",
            "/Balcones/balcon5.jpg"
        ],
        slug: "aluminio"
    },
    {
        titulo: "Topes de Cocina",
        imagenes: [
            "/Cocina/cocina1.jpg",
            "/Cocina/cocina2.jpg",
            "/Cocina/cocina3.jpg",
            "/Cocina/cocina4.jpg",
            "/Cocina/cocina5.jpg"
        ],
        slug: "topes"
    },
    {
        titulo: "Acero Inoxidable",
        imagenes: [
            "/Balcones/balcon7.jpg",
            "/Balcones/balcon8.jpg",
            "/Balcones/balcon9.jpg",
            "/Balcones/balcon10.jpg",
            "/Balcones/balcon11.jpg"
        ],
        slug: "acero"
    },
    {
        titulo: "Cristaleria",
        imagenes: [
            "/Closet/closet1.jpg",
            "/Closet/closet2.jpg",
            "/Closet/closet3.jpg",
            "/Closet/closet4.jpg",
            "/Closet/closet5.jpg"
        ],
        slug: "cristaleria"
    },
    {
        titulo: "Estructuras ",
        imagenes: [
            "/Fachada/facha1.jpg",
            "/Fachada/facha2.jpg",
            "/Fachada/facha3.jpg",
            "/Fachada/facha4.jpg",
            "/Fachada/facha5.jpg"
        ],
        slug: "estructuras"
    },
    // {
    //     titulo: "PVC",
    //     imagenes: [
    //         "/Baños/banos1.jpg",
    //         "/Baños/banos2.jpg",
    //         "/Baños/banos3.jpg",
    //         "/Baños/banos4.jpg",
    //         "/Baños/banos5.jpg"
    //     ],
    //     slug: "pvc"
    // },
    {
        titulo: "Servicios Especiales",
        imagenes: [
            "/Puertas/puertas1.jpg",
            "/Puertas/puertas2.jpg",
            "/Puertas/puertas3.jpg",
            "/Puertas/puertas4.jpg",
            "/Puertas/puertas5.jpg"
        ],
        slug: "servicios"
    },
];

const PortafolioComponent = () => {
    const searchParams = useSearchParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            const categoryIndex = categorias.findIndex(cat => cat.slug === categoryParam);
            if (categoryIndex !== -1) {
                setSelectedItem(categoryIndex);
            } else {
                const cristaleriaCategoryIndex = categorias.findIndex(cat => cat.slug === 'cristaleria');
                setSelectedItem(cristaleriaCategoryIndex !== -1 ? cristaleriaCategoryIndex : 0);
            }
        } else {
            const cristaleriaCategoryIndex = categorias.findIndex(cat => cat.slug === 'cristaleria');
            setSelectedItem(cristaleriaCategoryIndex !== -1 ? cristaleriaCategoryIndex : 0);
        }

        setCurrentImageIndex(0);
    }, [searchParams]);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [selectedItem]);

    if (!mounted) {
        return null;
    }

    const imagenesCategoriaActual = categorias[selectedItem]?.imagenes || [];
    const totalImagesInCategory = imagenesCategoriaActual.length;

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? totalImagesInCategory - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % totalImagesInCategory
        );
    };

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <>
            <Container className="bg-black">
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="text-white text-2xl font-bold uppercase lg:text-4xl">
                        {categorias[selectedItem]?.titulo}
                    </h1>
                </div>
            </Container>
            <Container className="bg-black items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col space-y-2 w-full h-full ">
                        {/* Versión móvil: Slider táctil sin botones */}
                        <div className="block lg:hidden w-full">
                            <div className="overflow-x-auto touch-pan-x snap-x snap-mandatory scrollbar-hide w-full">
                                <div className="flex h-[50vh]">
                                    {imagenesCategoriaActual.map((imagen, imgIndex) => (
                                        <div 
                                            key={imgIndex} 
                                            className="snap-center flex-none w-full h-full shrink-0"
                                        >
                                            <img 
                                                src={imagen}
                                                alt={`${categorias[selectedItem]?.titulo} imagen ${imgIndex + 1}`}
                                                className="object-cover w-full h-full"
                                                onLoad={handleImageLoad}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Versión desktop: Imagen con botones de navegación */}
                        <div className="h-[70vh] hidden lg:flex justify-center items-center relative w-full">
                            <div className="flex w-full justify-between px-4 absolute z-10">
                                <button onClick={handlePrevImage}>
                                    <IconArrowLeft />
                                </button>
                                <button onClick={handleNextImage}>
                                    <IconArrowRight />
                                </button>
                            </div>
                            <div className="h-full w-full">
                                {loading ? (
                                    <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                                ) : (
                                    imagenesCategoriaActual.length > 0 && (
                                        <img
                                            src={imagenesCategoriaActual[currentImageIndex]}
                                            alt={`${categorias[selectedItem]?.titulo} imagen ${currentImageIndex + 1}`}
                                            className="object-cover w-full h-full"
                                            onLoad={handleImageLoad}
                                        />
                                    )
                                )}
                            </div>
                        </div>

                        {/* Miniaturas (solo en desktop) */}
                        <div className="overflow-x-auto no-scrollbar hidden lg:block">
                            <div className="flex space-x-2 items-center justify-center">
                                {loading ? (
                                    <div className="flex space-x-1">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <div key={index} className="w-36 h-36 bg-gray-200 animate-pulse"></div>
                                        ))}
                                    </div>
                                ) : (
                                    imagenesCategoriaActual.map((imagen, imgIndex) => (
                                        <div 
                                            key={imgIndex} 
                                            className={`w-36 h-36 cursor-pointer border-2 ${
                                                currentImageIndex === imgIndex ? 'border-[#D60B41]' : 'border-transparent'
                                            }`}
                                            onClick={() => setCurrentImageIndex(imgIndex)}
                                        >
                                            <img 
                                                src={imagen}
                                                alt={`${categorias[selectedItem]?.titulo} miniatura ${imgIndex + 1}`}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="bg-black pb-16">
                <div className="flex flex-col">
                    {categorias.map((categoria, index) => (
                        <p
                            key={index}
                            className={`cursor-pointer flex items-center gap-2 ${
                                selectedItem === index ? 'text-[#D60B41]' : 'text-white'
                            }`}
                            onClick={() => setSelectedItem(index)}
                        >
                            {selectedItem === index && (
                                <span className={`h-2 w-2 rounded-full inline-block ${
                                    selectedItem === index ? 'bg-[#D60B41]' : 'bg-white'
                                }`}></span>
                            )}
                            {categoria.titulo}
                        </p>
                    ))}
                </div>
            </Container>
        </>
    )
}


const Portafolio = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PortafolioComponent />
        </Suspense>
    )
}

export default Portafolio;