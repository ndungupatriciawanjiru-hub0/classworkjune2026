import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Navigation from "./AmazonPage/Navigation";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1>My Amazon Page</h1>
    <Navigation />
  </StrictMode>,
);