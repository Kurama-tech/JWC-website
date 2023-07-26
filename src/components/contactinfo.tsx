import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";

const ContactInfo: React.FC = () => {
  const address = "Jai Wires & Cables\n F-30/31 Meghdhoot Ind. Est.,\n Opp.Luthriya House, Waliv Phata,\n Vasai(E), Palghar 401208";
  const phone = "+91 9820126970";
  const phone2 = "+91 9820764384";
  const email = "info@jwcindia.com";

  return (
    <div className="py-3 md:pt-10 md:mt-10 flex flex-col items-start space-y-4">
      <div className="flex items-center space-x-2">
        <MapPinIcon className="w-5 h-5 text-orange-600" />
        <Typography variant="lead" className="text-orange-600 font-bold">
          Address
        </Typography>
      </div>
    
      <Typography variant="paragraph" className="text-black font-semibold ml-7"  dangerouslySetInnerHTML={{ __html: address.replace(/\n/g, '<br/>') }} />

      <div className="flex items-center space-x-2">
        <PhoneIcon className="w-5 h-5 text-orange-600" />
        <Typography variant="lead" className="text-orange-600 font-bold">
          Phone
        </Typography>
      </div>
      <Typography variant="paragraph" className="text-black font-semibold ml-7">
        <a href={`tel:${phone}`}>{phone}</a>
      </Typography>
      <Typography variant="paragraph" className="text-black font-semibold ml-7">
        <a href={`tel:${phone2}`}>{phone2}</a>
      </Typography>

      <div className="flex items-center space-x-2">
        <EnvelopeIcon className="w-5 h-5 text-orange-600" />
        <Typography variant="lead" className="text-orange-600 font-bold">
          Email
        </Typography>
      </div>
      <Typography variant="paragraph" className="text-black font-semibold ml-7">
        <a href={`mailto:${email}`}>{email}</a>
      </Typography>
    </div>
  );
};

export default ContactInfo;
