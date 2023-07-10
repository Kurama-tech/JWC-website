import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";

const ContactInfo: React.FC = () => {
  const address = "Gala No. F 30 / 31, Meghdoot Estate, Sativali Road, Waliv Phata, Opp Luthria House, Vasai (East),Dist. Thane 401 208.";
  const phone = "+91 9820126970";
  const email = "info@jwcindia.com";

  return (
    <div className="py-3 md:pt-10 md:mt-10 flex flex-col items-start space-y-4">
      <div className="flex items-center space-x-2">
        <MapPinIcon className="w-5 h-5 text-orange-600" />
        <Typography variant="lead" className="text-orange-600 font-bold">
          Address
        </Typography>
      </div>
      <Typography variant="paragraph" className="text-black font-semibold ml-7">
        {address}
      </Typography>

      <div className="flex items-center space-x-2">
        <PhoneIcon className="w-5 h-5 text-orange-600" />
        <Typography variant="lead" className="text-orange-600 font-bold">
          Phone
        </Typography>
      </div>
      <Typography variant="paragraph" className="text-black font-semibold ml-7">
        <a href={`tel:${phone}`}>{phone}</a>
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
