import { postPayload, postFormdata, getFormdata } from "./axios";

export const getOutStorageRecord = (data: {
  pageNumber: number;
  pageSize: number;
}) => {
  return getFormdata("/api/app/out-storage-record/out-storage-record", data);
};
