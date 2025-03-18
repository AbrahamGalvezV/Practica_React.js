import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./src/App";

const root = createRoot(document.getElementById('app')) // Renderizamos app dentro de root 

root.render(<App />) 