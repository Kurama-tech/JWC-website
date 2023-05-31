import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    CardFooter,
    Button,
} from "@material-tailwind/react";
import TextWrapper from "./textwrapper";
//mport  Context  from '../store/context';
import { useAppContext } from "@/store/store";
import { useRouter } from "next/router";

type Products = {
    trim: boolean;
}


export default function Products({ trim }: Products) {

    const { state, setState } = useAppContext();
    const router = useRouter();
    
    const products = trim? state.childHome : state.childItems

    function gotoP(id: string){
        router.push("/product/"+id)
    }

    
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-orange-600">
                    Products
                </h2>

                <div className=" mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product: any) => (
                        <div key={product.id} className="p-4">
                            <Card className="w-full">
                                <CardHeader shadow={false} floated={false} className="h-60">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <div className="flex items-center justify-between mb-2">
                                        <Typography color="blue-gray" className="font-medium">
                                            {product.name}
                                        </Typography>
                                    </div>
                                    <TextWrapper text={product.description} />
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <a
                                        
                                        
                                        href={"/product/"+product.id}
                                        className="rounded-md px-3.5 bg-orange-600 hover:bg-orange-800 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Learn More
                                    </a>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>

                {trim && (<div className="flex items-center justify-center">

                    <a
                        href="/products"
                        className="rounded-md px-3.5 bg-orange-600 hover:bg-orange-800 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        See more
                    </a>

                </div>)}
            </div>
        </div>
    );
}
