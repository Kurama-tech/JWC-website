export default function About() {
    return (
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.orange.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-orange-600/10 ring-1 ring-orange-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">

          <figure className="mt-10">
           
              <p className="text-center text-lg  leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                In addition to wires, we offer 2 Pin and 3 Pin plugs, mains cords, power cords, 15 Amp server cords, audio cords, and USB cords. We can also customize wires and cords to your specifications. Our brand, Push, manufactures plugs, sockets, connectors, crocodile clips, and battery clips for audio, video, computer, and telecommunication applications.
              </p>
            
          </figure>

          <figure className="mt-10">
           
              <p className="text-center text-lg leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              With our well-equipped laboratory, we ensure the highest quality products that meet your requirements. Trust Jai Wires & Cables for all your wire and cable needs
              </p>
            
          </figure>
        </div>
      </section>
    )
  }
  