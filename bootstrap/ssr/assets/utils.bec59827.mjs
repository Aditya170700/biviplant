import { u as useToast } from "../ssr.mjs";
import moment from "moment";
const index = "";
const toast = useToast();
const imageReader = (files, target) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    target.value = e.target.result;
  };
  reader.readAsDataURL(files);
};
const toastSuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    timeout: 3e3,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
  });
};
const toastError = (message) => {
  toast.error(message, {
    position: "top-right",
    timeout: 3e3,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
  });
};
const dataURLtoFile = (dataurl) => {
  let arr = dataurl.split(","), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], "haha", { type: mime });
};
const slugify = (text, ampersand = "and") => {
  const a = "\xE0\xE1\xE4\xE2\xE8\xE9\xEB\xEA\xEC\xED\xEF\xEE\xF2\xF3\xF6\xF4\xF9\xFA\xFC\xFB\xF1\xE7\xDF\xFF\u1EF3\xFD\u0153\xE6\u0155\u015B\u0144\u1E55\u1E83\u01F5\u01F9\u1E3F\u01D8\u1E8D\u017A\u1E27";
  const b = "aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh";
  const p = new RegExp(a.split("").join("|"), "g");
  return text.toString().toLowerCase().replace(/[\s_]+/g, "-").replace(p, (c) => b.charAt(a.indexOf(c))).replace(/&/g, `-${ampersand}-`).replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+|-+$/g, "");
};
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
};
const formatDate = (date, format) => {
  return date == "-" ? date : moment(date).format(format);
};
export {
  toastSuccess as a,
  dataURLtoFile as d,
  formatDate as f,
  imageReader as i,
  rupiah as r,
  slugify as s,
  toastError as t
};
