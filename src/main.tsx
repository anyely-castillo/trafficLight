import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { TrafficLight } from "./01-useState/TrafficLight";
import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TrafficLightWithHook />
    <TrafficLight />
  </StrictMode>
);
