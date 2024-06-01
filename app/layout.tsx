import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Provider from "@/provider";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Home from "./page";

config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });
// Create a client
const queryClient = new QueryClient()
export const metadata: Metadata = {
  title: "Wedding Event",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         
      <Provider>
      <body className={inter.className}>
   
        {children}
       <Home/> 
      </body>
      </Provider>
    </html>
  );
}