import { command, query } from "$app/server";
var files = [
  {
    title: "français",
    url: "/files",
    pages: 2,
    status: "personnel",
    type: "pdf",
  },
  {
    title: "Anglais",
    url: "/files",
    pages: 3,
    status: "personnel",
    type: "pdf",
  },
  {
    title: "Chimie",
    url: "/files",
    pages: 4,
    status: "public",
    type: "pdf",
  },
  {
    title: "Bible",
    url: "/files",
    pages: 1026,
    status: "public",
    type: "pdf",
  },
  {
    title: "La Rousse",
    url: "/files",
    pages: 2000,
    status: "public",
    type: "pdf",
  },
  {
    title: "programme du jour",
    url: "/files",
    pages: 1,
    status: "personnel",
    type: "docs",
  },
  {
    title: "rapport mentuel",
    url: "/files",
    pages: 2,
    status: "public",
    type: "pdf",
  },
];

export const getFiles = query(async () => {
  return files;
});

export const addFile = command(async () => {
  let file = [
    {
      title: "inconnu",
      url: "/files",
      pages: NaN,
      status: "public",
      type: "docs",
    },
  ];
  files = [...files, ...file];
  await getFiles().refresh();
});
