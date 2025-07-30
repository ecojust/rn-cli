import { postPayload, postFormdata, getFormdata } from "./axios";

export const getPutInStorageRecordLog = (data: {
  pageNumber: number;
  pageSize: number;
}) => {
  return getFormdata(
    "/api/app/put-in-storage-records/put-in-storage-record",
    data
  );
};

export const putInStorageRecord = (data: {
  productCode: String;
  color: String;
  size: String;
  needleType: String;
  productName: String;
  processId: Number;
  storageId: Number;
  productLineId: Number;
  putInboundQuantity: Number;
  photoPath: String;
}) => {
  console.log("putInStorageRecord", data);
  return postPayload(
    "/api/app/put-in-storage-records/put-in-storage-record",
    Object.assign(data, { operator: "iii", processId: 2 })
  );
};

export const putInStorageRecordAdd = (data: {
  isTransferred: Boolean;
  productId: Number;
  storageId: Number;
  putInboundQuantity: Number;
  operator: String;
  transferOrderId: Number;
}) => {
  console.log("putinStorageRecord", data);
  return postPayload(
    "/api/app/put-in-storage-records/ed-put-in-storage-record",
    Object.assign(data, { operator: "iii", processId: 2 })
  );
};
