import type { AppProps } from "next/app";
import { Providers } from "@/lib/providers";
import { Inter } from "next/font/google";

import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx("flex p-24", inter.className)}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </main>
  );
}