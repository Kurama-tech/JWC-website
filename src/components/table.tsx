import { removeIdField } from "@/store/utils";
import { Card, Typography } from "@material-tailwind/react";

type TableType = {
  Data: any[];
};

export default function Table({ Data }: TableType) {
  const TableData = removeIdField(Data);
  const Headers = Object.keys(TableData[0]);

  return (
    <Card className="overflow-scroll h-full w-full"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <table className="w-full min-w-max table-auto text-left">
        <colgroup>
          {Headers.map((_, index) => (
            <col key={index} style={{ width: "120px" }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {Headers.map((head: any) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-2"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70 whitespace-normal overflow-wrap-normal"
                  style={{ maxWidth: "120px" }}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TableData.map((item: any, index) => {
            const isLast = index === TableData.length - 1;
            const classes = isLast
              ? "p-2"
              : "p-2 border-b border-blue-gray-50";

            return (
              <tr key={index}>
                {Headers.map((value: string | number) => (
                  <td key={value} className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal break-all"
                      style={{ maxWidth: "120px" }}  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                      {item[value] != undefined ? item[value] : '-'}
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
