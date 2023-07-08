import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from "@/store/store";
import { findObjectById, searchItemsByParent } from '@/store/utils';
import Table from './table';
import { fetchTable, fetchTables } from '@/requests/requests';
import { Card, CardBody, CardFooter, CardHeader, Spinner, Typography, useAccordion } from "@material-tailwind/react";
import TextWrapper from './textwrapper';
import ErrorPage from './error';

const product = {
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'Products', href: '/products' },
    ],
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Product({ data, tables }: any) {
    const router = useRouter();
    const { state, setState } = useAppContext();
    const { id } = router.query

    const prod = findObjectById(id, data)
    const [TablesFetched, setTables] = useState<any>([])
    const [Children, setChildren] = useState<any>([])
    const [loading, setLoading] = useState(true)
    const [nullpage, setnullpage] = useState(false)
    const [featuredImage, setFeaturedImage] = useState(prod?.images[0])
    const [hasNoChild, setHasNoChild] = useState(false)

    function onSubmitContact() {
        router.push("#contact")
    }


    useEffect(() => {
        const fetchData = async () => {
            let TablesData: any[] = [];
            setFeaturedImage(prod?.images[0]);

            prod?.tables.forEach((item: any) => {
                const data = findObjectById(item.id, tables);
                if (data != null) {
                    TablesData.push(data);
                }
            });
            setTables(TablesData);
            if (prod?.type === "Parent") {
                const childern = searchItemsByParent(prod?.id, data);
                if (childern.length <= 0) {
                    setHasNoChild(true);
                } else {
                    setHasNoChild(false);
                    setChildren(childern);
                }
            }
            if (prod != null) {
                setLoading(false);
            }
        };

        fetchData().then(() => {

        });

        const timer = setTimeout(() => {
            if (prod === null) {
                setLoading(false);
                setnullpage(true)
            }
        }, 7000);

        return () => {
            clearTimeout(timer); // Clean up the timer if the component unmounts before the timer completes
        };
    }, [prod]);

    if (prod === null && loading) {
        return (
            <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <Spinner className="h-12 w-12" />
            </div>
        )
    }

    if (nullpage && !loading) {
        return (
            <div className="bg-white">
                <ErrorPage />
            </div>
        )
    }





    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={"/product/" + prod?.id} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {prod?.name}
                            </a>
                        </li>
                    </ol>
                </nav>
                <br />

                {/* Image gallery */}
                <div className='mx-auto max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="col-span-1 sm:col-span-1 sm:order-2 p-2">
                        <div className="mb-5">
                            <div className="flex justify-center">
                                <img
                                    className="h-auto max-h-[300px] object-cover rounded-lg"
                                    src={featuredImage}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                                {prod?.images.map((image: any) => (
                                    <div key={image} className="flex justify-center h-auto max-w-[100px] max-h-[75px]">
                                        <img
                                            onClick={(e) => setFeaturedImage(image)}
                                            className="h-auto w-full rounded-lg object-cover"
                                            src={image}
                                            alt=""
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 sm:col-span-1 sm:order-1 p-2">
                        <div>
                            <h1 className="mt-5 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{prod?.name}</h1>
                            <div className="mt-5">
                                <h3 className="sr-only">Description</h3>
                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{prod?.description}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                
                                onClick={() => onSubmitContact()}
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-8 py-3 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                            >
                                Contact us
                            </button>
                        </div>
                    </div>
                </div>




                <div className="px-2  mt-3 flex flex-col">
                    <div className="w-full border-gray-300">
                        {TablesFetched.length > 0 && (
                            <div className="mt-5">

                                {/* <h1 className="text-xl font-bold">Tables</h1> */}

                                <div className="mt-4">
                                    {loading && (
                                        <Spinner className="h-12 w-12" />
                                    )}
                                    {TablesFetched.map((table: any) => (
                                        <div key={table.id}><h4 className="text-sm font-medium text-gray-900">{table.name}</h4><br />
                                            <Table Data={table.data} />
                                            <br />
                                        </div>

                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Product info */}
                {prod.type != "Child" && (
                    <div>
                        {Children.length > 0 && (
                        <><h2 className="text-xl font-semibold mb-4">Sub Products</h2><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {Children.map((product: any) => (
                                    <div key={product.id} className="p-4">
                                        <Card className="w-full max-h-[300px]">
                                            <CardHeader shadow={false} floated={false} className="h-60">
                                                <img
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    className="w-full h-[150px] object-cover" />
                                            </CardHeader>
                                            <CardBody>
                                                <div className="flex items-center justify-between mb-2">
                                                    <Typography color="blue-gray" className="font-bold">
                                                        {product.name}
                                                    </Typography>
                                                </div>
                                                {/* <TextWrapper text={product.description} /> */}
                                            </CardBody>
                                            <CardFooter className="pt-0">
                                                <a


                                                    href={"/product/" + product.id}
                                                    className="rounded-md px-3.5 bg-orange-600 hover:bg-orange-800 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                                >
                                                    Learn More
                                                </a>
                                            </CardFooter>
                                        </Card>
                                    </div>))}
                            </div></>)}
                    </div>
                )}
            </div></div>
        </div>
    )
}
