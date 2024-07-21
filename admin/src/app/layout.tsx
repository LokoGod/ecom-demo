import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Margin_width_wrapper from "@/components/wrappers/margin_width_wrapper";
import { ThemeProvider } from "@/components/theme-provider";
import Page_wrapper from "@/components/wrappers/page_wrapper";
import Navbar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Created by PearlWave Labs @ Colombo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Margin_width_wrapper>
          <TooltipProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <Page_wrapper>{children}</Page_wrapper>
              <SideBar />
            </ThemeProvider>
          </TooltipProvider>
        </Margin_width_wrapper>
      </body>
    </html>
  );
}
