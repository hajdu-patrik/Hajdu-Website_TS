import { Inter } from "next/font/google";

// Only the core latin file is preloaded; the latin-ext face (ő, ű) still loads on demand through unicode-range.
export const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
