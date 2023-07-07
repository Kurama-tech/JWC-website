import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'To Manufacture',
    description:
      'and deliver quality products efficiently, in a professional and flexible environment, on time and at the right cost to our customers, while driving to become a world-class organization.',
  },
  {
    name: 'Provide',
    description: 'products and services of the highest possible standards, to satisfy our customer needs, expectations of quality, safety, reliability and service.',
    
  },
  {
    name: 'Accomplish',
    description: 'quality objectives by establishing, implementing and maintaining a documented effective Quality Assurance System.',
  },
]

export default function Services() {
  return (
    <div className="overflow-hidden bg-white sm:py-1">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
             
              <p className="mt-2 text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl">Quality Policy</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                     
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="/services.png"
            alt="Services"
            className="w-auto"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
