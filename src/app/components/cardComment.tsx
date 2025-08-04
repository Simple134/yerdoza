import Image from "next/image"
import { StartIcon } from "./icons"

const CardComment = ({ name, comment, stars, image }: { name: string, comment: string, stars: number, image: string }) => {
    return (
        <div className=" border-2 space-y-2 border-black flex flex-col py-6 px-4 text-balance">
            <div className="flex  my-2 items-center h-24 gap-2">
                <div className="w-20 h-20 rounded-full flex items-center justify-center">
                    <Image
                        src={image}
                        alt="image"
                        width={100}
                        height={100}
                        quality={100}
                        className="object-contain"
                        priority

                    />
                </div>
                <div>
                    <div>
                        <p className="text-black ">{name}</p>
                            <div className="inline-flex space-x-1">

                                {Array.from({ length: stars }).map((_, index) => (
                                    <StartIcon key={index} />
                                ))}
                            </div>
                    </div>
                </div>
            </div>
            <div className="pt-2 pl-2 text-black">
                <p className="text-md">{comment}</p>
            </div>

        </div>
    )
}

export default CardComment