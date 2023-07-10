import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import TextWrapper from "./textwrapper";
import { useAppContext } from "@/store/store";
import Link from "next/link";

type Products = {
    trim: boolean;
}

export default function MainProducts({ trim }: Products) {

    const { state, setState } = useAppContext();
    const products = trim? state.mainHome : state.mainItems


    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-orange-600">Categories</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {products.map((product: any) => (
                        <div key={product.id} className="p-4">
                            {/* Content for the first column */}
                            <Card className="flex-row">
                                <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>

                                    <Typography variant="h4" color="blue-gray" className="mb-2">
                                        {product.name}
                                    </Typography>



                                    <TextWrapper text={product.description} />


                                    <a href={"/product/"+product.id} className="inline-block">
                                        <Button variant="text" className="flex items-center  gap-2 text-orange-600 hover:text-orange-800">
                                            Learn More
                                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                                        </Button>
                                    </a>
                                </CardBody>
                            </Card>
                        </div>))}
                        </div>

                        {trim && (<div className="flex items-center justify-center">

                    <Link
                        href="/categories"
                        className="rounded-md px-3.5 bg-orange-600 hover:bg-orange-800 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        See more
                    </Link>

                </div>)}


            </div>
        </div>
    )
}

export function MixedProducts({ trim }: Products) {

    const { state, setState } = useAppContext();
    const products = trim? state.mainItems : state.mainItems


    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-orange-600">Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {products.map((product: any) => (
                        <div key={product.id} className="p-4">
                            {/* Content for the first column */}
                            <Card className="flex-row">
                                <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>

                                    <Typography variant="h4" color="blue-gray" className="mb-2">
                                        {product.name}
                                    </Typography>



                                    <TextWrapper text={product.description} />


                                    <a href={"/product/"+product.id} className="inline-block">
                                        <Button variant="text" className="flex items-center  gap-2 text-orange-600 hover:text-orange-800">
                                            Learn More
                                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                                        </Button>
                                    </a>
                                </CardBody>
                            </Card>
                        </div>))}
                        </div>

                        {trim && (<div className="flex items-center justify-center">

                    <Link
                        href="/categories"
                        className="rounded-md px-3.5 bg-orange-600 hover:bg-orange-800 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        See more
                    </Link>

                </div>)}


            </div>
        </div>
    )
}
