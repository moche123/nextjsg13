export const Routes = {
  HOME: {
    url: "/",
    label: "Home",
  },
  CHARACTERES: {
    url: "/characteres",
    label: "Characteres",
  },
  ABOUT: {
    url: "/about/us",
    label: "About us",
  },
};

export interface Route {
  url: string;
  label: string;
}
