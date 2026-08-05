import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import ColorsCircles from "./StateandEvents/ColoursAndCircles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorsCircles />
  </StrictMode>,
);