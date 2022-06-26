import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import login from "./scripts/msal";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

login();
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
