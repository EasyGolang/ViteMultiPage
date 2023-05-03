import "normalize.css";
import "./style.scss";
import $ from "cash-dom";

if (ViteConst) {
  window.ViteConst = {
    ...ViteConst,
  };
  window.$Event = {};
}

var app = $("#app");

console.log(app);
