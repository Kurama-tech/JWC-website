


export default function ShopByCategoryGrid()
{
  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <span className="text-orange-400 text-2xl">Shop By Category</span>
        <div className="grid md:grid-cols-2 md:gap-6 sm:grid-cols-1  sm:gap-1 mt-5">
            <ShopByCategoryCard name="Broadcast And AV Cable" description="Power Cord for Xbox One S, Xbox One X, Xbox Series X/S, Sony PS3 Slim / PS4 / PS5 Playstation 4 Slim Power Supply Cable Replacement"></ShopByCategoryCard>
            <ShopByCategoryCard name="Camera Cable" description="Power Cord for Xbox One S, Xbox One X, Xbox Series X/S, Sony PS3 Slim / PS4 / PS5 Playstation 4 Slim Power Supply Cable Replacement"></ShopByCategoryCard>
            <ShopByCategoryCard name="Power Cable" description="Power Cord for Xbox One S, Xbox One X, Xbox Series X/S, Sony PS3 Slim / PS4 / PS5 Playstation 4 Slim Power Supply Cable Replacement"></ShopByCategoryCard>
            <ShopByCategoryCard name="Single Core Cable" description="Power Cord for Xbox One S, Xbox One X, Xbox Series X/S, Sony PS3 Slim / PS4 / PS5 Playstation 4 Slim Power Supply Cable Replacement"></ShopByCategoryCard>
            <ShopByCategoryCard name="Data & Communication Cable" description="Power Cord for Xbox One S, Xbox One X, Xbox Series X/S, Sony PS3 Slim / PS4 / PS5 Playstation 4 Slim Power Supply Cable Replacement"></ShopByCategoryCard>
            <ShopByCategoryCard name="UNINYVIN Cable" description="Power Cord for Xbox One S, Xbox One X, Xbox Series X/S, Sony PS3 Slim / PS4 / PS5 Playstation 4 Slim Power Supply Cable Replacement"></ShopByCategoryCard>

        
        </div>
    </div>
  )
}


function ShopByCategoryCard({name,description}:{name:string,description:string})
{
    return (
    <div>
        <div className="flex flex-col items-center border border-gray-200 bg-gray-100 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <p className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">{name}</p>
                <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{description}</p>
                <a href="#" className="text-gray-900 text-sm underline hover:text-blue-600">Know More</a>  
            </div>
            <img className="object-contain w-full h-auto rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://firebasestorage.googleapis.com/v0/b/mamun-public.appspot.com/o/jwclogo.png?alt=media&token=120110d3-ec71-435a-9d40-c5c870bb3cb2" alt="" />
        </div>
    </div>    

    )
}