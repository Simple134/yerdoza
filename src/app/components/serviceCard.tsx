import BitnationWrapper from "@/components/BitnationWrapper";
import { Container, Grid } from "@bitnation-dev/components";

const ServiceCard = ({ title, description, image, list, reversed }: { 
    title: string, 
    description: string, 
    image: string, 
    list: string[], 
    reversed?: boolean 
}) => {
    if (reversed) {
        return (
            <BitnationWrapper>
            <Container>
            <Grid columns={{ xl: 2, lg: 2, md: 1, sm: 1 }} className=" lg:my-10 lg:!gap-10">
                <div className="flex flex-col lg:mr-12 lg:ml-56 order-1 lg:order-none">
                    <div className="flex flex-col ">
                        <span className="text-black font-bold uppercase pb-4">{title}</span>
                        <p className="text-black wrap-balance  pb-4">{description}</p>
                        <ul className="list-disc text-black pl-4 font-bold">
                            {list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-full h-full">
                    <div className="h-[300px] sm:h-full">
                        <img src={image} alt={title} className="object-cover w-full h-full lg:h-96" />
                    </div>
                </div>
            </Grid>
            </Container>
            </BitnationWrapper>
        )
    }

    return (
        <Container>
        <Grid columns={{ xl: 2, lg: 2, md: 1, sm: 1 }} className="lg:!gap-12 lg:my-10">
            <div className="w-full h-full flex lg:justify-end lg:pr-12">
                <div className="h-[300px] sm:h-full w-full">
                    <img src={image} alt={title} className="object-cover w-full h-full lg:h-96" />
                </div>
            </div>
            <div className="flex flex-col lg:mr-12">
                <div className="flex flex-col">
                    <span className="text-black font-bold uppercase pb-4">{title}</span>
                    <p className="text-black wrap-balance pb-4">{description}</p>
                    <ul className="list-disc text-black pl-4 font-bold">
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Grid>
        </Container>
    )
}

export default ServiceCard;