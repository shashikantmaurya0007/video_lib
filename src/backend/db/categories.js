import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "DSA",
    imgsrc: "/assets/dsa_corousel.jpeg",
    clickValue: "dsa",
    description:
      "Build intuition on the inner workings of various DSA, a foundational skill for any top software engineer",
  },
  {
    _id: uuid(),
    categoryName: "JAVASCRIPT",
    imgsrc: "/assets/javascript_courousel.png",
    clickValue: "javascript",
    description:
      "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application",
  },
  {
    _id: uuid(),
    categoryName: "REACT",
    imgsrc: "/assets/react_courousel.png",
    clickValue: "react",
    description:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces",
  },
  {
    _id: uuid(),
    categoryName: "PROJECTS",
    imgsrc: "/assets/project_courousel.png",
    clickValue: "projects",
    description:
      "Project based learning is the best way to apply your knowledge",
  },
];
