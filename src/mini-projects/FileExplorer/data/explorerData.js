export default {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "index.html",
          isFolder: false,
          items: [],
        },
        {
          name: "index.css",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "App.js",
          isFolder: false,
          items: [],
        },
        {
          name: "index.js",
          isFolder: false,
          items: [],
        },
        {
          name: "style.js",
          isFolder: false,
          items: [],
        },
        {
          name: "components",
          isFolder: true,
          items: [
            {
              name: "Explorer.jsx",
              isFolder: false,
              items: [],
            },
            {
              name: "Folder.jsx",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};
