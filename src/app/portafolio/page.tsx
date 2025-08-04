"use client"
import { Container } from "@bitnation-dev/components";
import { IconArrowLeft } from "../components/icons";
import { IconArrowRight } from "../components/icons";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const Portafolio = () => {
    const searchParams = useSearchParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);

    const categorias = [
        {
            titulo: "Ventanas",
            imagenes: [
                "/image/ventanas/1.png",
                "/image/ventanas/2.png",
                "/image/ventanas/3.png",
                "/image/ventanas/4.png",
                "/image/ventanas/5.png"
            ],
            slug: "ventanas"
        },
        {
            titulo: "Aluminio",
            imagenes: [
                "/image/aluminio/1.png",
                "/image/aluminio/2.png",
                "/image/aluminio/3.png",
                "/image/aluminio/4.png",
                "/image/aluminio/5.png"
            ],
            slug: "aluminio"
        },
        {
            titulo: "Topes de Cocina",
            imagenes: [
                "/image/topes/1.png",
                "/image/topes/2.png",
                "/image/topes/3.png",
                "/image/topes/4.png",
                "/image/topes/5.png"
            ],
            slug: "topes"
        },
        {
            titulo: "Acero Inoxidable",
            imagenes: [
                "/image/acero/1.png",
                "/image/acero/2.png",
                "/image/acero/3.png",
                "/image/acero/4.png",
                "/image/acero/5.png"
            ],
            slug: "acero"
        },
        {
            titulo: "Cristaleria",
            imagenes: [
                "/image/cristaleria/1.png",
                "/image/cristaleria/2.png",
                "/image/cristaleria/3.png",
                "/image/cristaleria/4.png",
                "/image/cristaleria/5.png"
            ],
            slug: "cristaleria"
        },
        {
            titulo: "Estructuras ",
            imagenes: [
                "/image/densglass/1.png",
                "/image/densglass/2.png",
                "/image/densglass/3.png",
                "/image/densglass/4.png",
                "/image/densglass/5.png"
            ],
            slug: "estructuras"
        },
        {
            titulo: "PVC",
            imagenes: [
                "/image/pvc/1.png",
                "/image/pvc/2.png",
                "/image/pvc/3.png",
                "/image/pvc/4.png",
                "/image/pvc/5.png"
            ],
            slug: "pvc"
        },
        {
            titulo: "Servicios Especiales",
            imagenes: [
                "/image/servicios/1.png",
                "/image/servicios/2.png",
                "/image/servicios/3.png",
                "/image/servicios/4.png",
                "/image/servicios/5.png"
            ],
            slug: "servicios"
        },
    ];
    
    useEffect(() => {
        setMounted(true);
        
        // Verificar si hay una categoría en los parámetros de búsqueda
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            // Encontrar el índice de la categoría
            const categoryIndex = categorias.findIndex(cat => cat.slug === categoryParam);
            if (categoryIndex !== -1) {
                setSelectedItem(categoryIndex);
            } else {
                // Por defecto, mostrar Cristalería si no se encuentra la categoría
                const cristaleriaCategoryIndex = categorias.findIndex(cat => cat.slug === 'cristaleria');
                setSelectedItem(cristaleriaCategoryIndex !== -1 ? cristaleriaCategoryIndex : 0);
            }
        } else {
            // Por defecto, mostrar Cristalería
            const cristaleriaCategoryIndex = categorias.findIndex(cat => cat.slug === 'cristaleria');
            setSelectedItem(cristaleriaCategoryIndex !== -1 ? cristaleriaCategoryIndex : 0);
        }
        
        setCurrentImageIndex(0);
    }, [searchParams, categorias]);

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
                                            <Image 
                                                src={imagen}
                                                alt={`${categorias[selectedItem]?.titulo} imagen ${imgIndex + 1}`}
                                                width={800}
                                                height={600}
                                                className="object-cover w-full h-full"
                                                onLoad={handleImageLoad}
                                                priority={imgIndex === 0}
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
                                        <Image
                                            src={imagenesCategoriaActual[currentImageIndex]}
                                            alt={`${categorias[selectedItem]?.titulo} imagen ${currentImageIndex + 1}`}
                                            width={1200}
                                            height={800}
                                            className="object-cover w-full h-full"
                                            onLoadingComplete={handleImageLoad}
                                            priority
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
                                            <Image 
                                                src={imagen}
                                                alt={`${categorias[selectedItem]?.titulo} miniatura ${imgIndex + 1}`}
                                                width={144}
                                                height={144}
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

export default Portafolio;