import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "product",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Support",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Product Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Global Presence",
    path: "/blog-sidebar",
    newTab: false,
  },
  {
    id: 6,
    title: "product Page",
    path: "/blog-details",
    newTab: false,
  },
];

export default menuData;
