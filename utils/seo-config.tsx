import { Metadata } from "next";

const siteName = "Habit Todo";
const description = "習慣化するTodoアプリ";
const url = "https://localhost:3001/";

export const SEO_DEFAULT: Metadata = {
  description,
  metadataBase: new URL(url),
  openGraph: {
    description,
    images: "/OGP.jpg",
    locale: "ja_JP",
    siteName,
    title: siteName,
    type: "website",
    url,
  },
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
};
