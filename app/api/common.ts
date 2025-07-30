import { postPayload, postFormdata, getFormdata, postQuery } from "./axios";

export const getProductionLine = (data: {
  pageNumber: number;
  pageSize: number;
}) => {
  return getFormdata("/api/app/production-line/production-line", data);
};

export const getStorage = (data: { pageNumber: number; pageSize: number }) => {
  return getFormdata("/api/app/storage-information/storage-information", data);
};

export const getProcess = (data: { pageNumber: number; pageSize: number }) => {
  return getFormdata("/api/app/process-info/process-info", data);
};

export const uploadFile = (data: FormData) => {
  return postFormdata("/api/File/UploadFile", data);
};

export const getUploadUrl = () => {
  const host = process.env.EXPO_PUBLIC_API_URL || "http://139.224.0.239:50000";
  return `${host}/api/File/UploadFile`;
};

export const uploadFile2 = (data: FormData) => {
  const d = new FormData();
  d.append("name", "123");
  return postFormdata("/uploadfile", d);
};
