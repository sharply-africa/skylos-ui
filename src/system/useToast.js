import { toast as rToast } from "react-toastify";

const TYPES = ["info", "success", "warning", "error"];

export const useToast = () => {
  const toast = (msg = "", type, options = {}) => {
    if (type && TYPES.includes(type)) {
      rToast[type](msg, options);
    } else {
      rToast(msg, options);
    }
  };

  return { toast };
};
