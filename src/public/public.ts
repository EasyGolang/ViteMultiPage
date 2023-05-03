import "normalize.css";
import "@/public/public.scss";
import $ from "cash-dom";

if (ViteConst) {
  window.ViteConst = {
    ...ViteConst,
  };
  window.$Event = {};
}

var PageName = $(".PageName");

console.log(PageName[0], window.ViteConst);
