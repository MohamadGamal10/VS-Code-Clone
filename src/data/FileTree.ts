import { IFileTree } from "../interfaces";

export const fileTree: IFileTree = {
  name: "VS Code Clone",
  isFolder: true,
  content: "",
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [
            {
              name: "react.js",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
        name: "public",
        isFolder: true,
        children: [
          {
            name: "index.html",
            isFolder: false,
          },
        ],
      },
    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "components",
          isFolder: true,
          children: [
            {
              name: "Button.tsx",
              isFolder: false,
            },
          ],
        },
      ],
    },

  ],
};
