import { postPayload, postFormdata, getFormdata } from "./axios";

export const getStockList = (data: {
  ProductCode: string;
  Color: string;
  Size: string;
  NeedleType: string;
  ProductName: string;
  PageNumber: number;
  PageSize: number;
}) => {
  return getFormdata(
    "/api/app/inventory-management/inventory-management-list",
    data
  );
};
