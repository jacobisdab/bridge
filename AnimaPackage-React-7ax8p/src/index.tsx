import React from "react";
import ReactDOMClient from "react-dom/client";
import { BridgeWeb } from "./screens/BridgeWeb";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<BridgeWeb />);
