import "./components/calculator-card.js";
import "./components/result-tile.js";
import "./components/conversion-view.js";
import "./components/alu-view.js";
import { setupNavigation } from "./navigation.js";
import { setupConversion } from "./conversion.js";
import { setupAlu } from "./alu.js";

setupNavigation();
setupConversion();
setupAlu();
