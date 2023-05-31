import { useState } from "react"



const products = [
    { id:1, name: 'CCTV Cables', description: 'CCTV Cables' },
    { id:2, name: 'Co-axial Cables', description: 'Co-axial Cables'},
    { id:3, name: 'Flexible Wires', description: 'Flexible Wires' },
    { id:4, name: 'Hook-up Wires', description: 'Hook-up Wires' },
    { id:5, name: 'Microphone Cables', description: 'Microphone Cables' },
    { id:6, name: 'Moulded Cords', description: 'Moulded Cords'},
    { id:7, name: 'Multicore Power Cables', description: 'Multicore Power Cables' },
    { id:8, name: 'Multicore Sheilded Wire', description: 'Multicore Sheilded Wire' },
    { id:9, name: 'Multicore Unsheilded Wire', description: 'Multicore Unsheilded Wire' },
    { id:10, name: 'Multimeter Test Prod Wires', description: 'Multimeter Test Prod Wires' },
    { id:11, name: 'Speaker Wires', description: 'Speaker Wires'},
    { id:12, name: 'Wire Harness', description: 'Wire Harness' },
  ]

  

export default function ProdsGrid()
{
    const [pageCount,setPageCount]=useState(1)
    const [prodIndex,setProdIndex]=useState(0) 

    return (
        <div className="w-full max-w-screen-xl  py-6 lg:py-8 items-center">
            <span className="text-orange-400 text-2xl">Shop By Products</span>
            <div className="flex flex-col items-center  bg-gray-50 py-6">
                
                <div className="grid grid-rows-2 grid-cols-4 grid-flow-row gap-6 gap-x-24">
                    { products.slice(prodIndex,prodIndex+8).map((item) => { return  <ShopByProductCard 
                    key={item.id} name={item.name} description={item.description}></ShopByProductCard>}
                    )
                }
                
                                                   
                </div>
                <div className="inline-flex mt-10 xs:mt-0">
                
                    <a onClick={()=>{
                        setPageCount(pageCount===1 ? 1 : Math.abs((pageCount-1)%3))
                        setProdIndex(prodIndex===0? 0 : Math.abs((prodIndex-10)%products.length)) 
                        }} 
                        className="inline-flex items-center px-4 py-2  mx-4 text-sm font-medium text-white bg-orange-600  hover:bg-orange-800 border-0 border-l dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                        Prev
                    </a>
                    <a href="#" className="inline-flex items-center px-4 py-2 mx-4 text-sm font-medium text-white bg-orange-600 border-0 border-l  hover:bg-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {pageCount}
                       
                    </a>
                    <a  onClick={()=>{
                        setPageCount(pageCount===2? 1 : Math.abs((pageCount+1)%3))
                        setProdIndex(pageCount===2 ? 0 : (prodIndex+8)%products.length)
                         }}
                         className="inline-flex items-center px-4 py-2 mx-4 text-sm font-medium text-white bg-orange-600 border-0 border-l  hover:bg-orange-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
          
    )
}


function ShopByProductCard({name,description}:{name:string,description:string})
{
    return (
        <div className="relative  w-52 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 mx-2">
            <img className="rounded-t-lg h-40 w-full" src="https://firebasestorage.googleapis.com/v0/b/mamun-public.appspot.com/o/jwclogo.png?alt=media&token=120110d3-ec71-435a-9d40-c5c870bb3cb2" alt="" />
            <div className="p-4 items-center ">
                <h5 className="mb-2 text-lg font-bold tracking-tight underline decoration-orange-600 text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-8 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <a href="#" className="flex justify-center items-center absolute bottom-2 left-4 right-4 px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ">
                    Order Now
                  
                </a>
            </div>
        </div>

    )
}