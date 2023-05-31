import { removeIdField } from "@/store/utils";
import { Card, Typography } from "@material-tailwind/react";


type TableType = {
    Data: any[];
}


 
export default function Table({Data}: TableType) {
  //const [Headers, setHeaders] = useState<any>(DATA.keys())
  
  const TableData = removeIdField(Data)
  const Headers = Object.keys(TableData[0])
  return (
    <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {Headers.map((head: any) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TableData.map((item : any, index) => {
            const isLast = index === TableData.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={index}>
                {Headers.map((value: string | number) => (
                    <td key={value} className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {item[value]}
                    </Typography>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}