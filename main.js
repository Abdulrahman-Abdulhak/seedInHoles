import "./main.css";
import { init } from "./drawer/init";

document.querySelector("#app").innerHTML = `
  <canvas id="main-drawer" />
`;

init(document.querySelector("#main-drawer"));
