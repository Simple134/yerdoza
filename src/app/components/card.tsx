"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightMiniIcon } from "./icons";
type CardProps = {
    title: string;
    description: string;
    image: string;
};
const Card = ({ title, description, image }: CardProps) => {
    return (
        <div className="flex flex-col w-full cursor-pointer">
            <div className="w-full h-64 " style={{ aspectRatio: "4/3" }}>
                <Image
                    src={image}
                    alt="image"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="flex flex-col justify-between h-56">
                <div>
                    <div className="mt-4">
                        <h1 className="text-white bg-black p-2 w-fit font-bold">{title}</h1>
                    </div>
                    <div className="flex w-full py-2 items-center justify-center">
                        <p className="text-md text-black font-medium">{description}</p>
                    </div>
                </div>
                <div className="flex mt-auto">
                    <Link href="/servicios">
                        <div className="flex px-4 justify-between items-center bg-[#D60B41] w-60 h-10">
                            <span className="text-white">Más información</span>
                            <ArrowRightMiniIcon />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
