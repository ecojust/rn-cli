import { postPayload, postFormdata, getFormdata, del, put } from "./axios";

export const getOrderNumberRule = (data: {
  pageNumber: number;
  pageSize: number;
}) => {
  return getFormdata("/api/app/order-number-rule/order-number-rule", data);
};

export const delOrderNumberRule = (data: { id: number }) => {
  return del("/api/app/order-number-rule/order-number-rule", data);
};

export const updateOrderNumberRule = (data: {
  id: number;
  ruleId: string;
  prefix: string;
  orderType: string;
  format: string;
  description: string;
  example: string;
  suffix: string;
}) => {
  return put("/api/app/order-number-rule/order-number-rule", data);
};

export const addOrderNumberRule = (data: {
  ruleId: string;
  prefix: string;
  orderType: string;
  format: string;
  description: string;
  example: string;
  suffix: string;
}) => {
  return postPayload("/api/app/order-number-rule/order-number-rule", data);
};
