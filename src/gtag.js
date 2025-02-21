import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-WRITJW6R9X");
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};