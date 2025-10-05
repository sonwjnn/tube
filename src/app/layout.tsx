import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { TRPCProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tube | YouTube Clone",
  description:
    "A modern YouTube clone built with Next.js and React. Watch, upload, share videos, and discover content effortlessly.",
  keywords: [
    "YouTube Clone",
    "Video Streaming",
    "Next.js Project",
    "React Video App",
    "Tube Platform",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Modern UI/UX",
  ],
  openGraph: {
    title: "Tube | YouTube Clone",
    description:
      "Experience a seamless YouTube-like video platform powered by Next.js. Explore trending videos, channels, and advanced search features.",
    url: "https://sonwave.vercel.app",
    type: "website",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Tube - YouTube Clone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tube | YouTube Clone",
    description:
      "Dive into our Next.js-powered YouTube clone: Stream videos, build channels, and engage with the community.",
    images: ["/open-graph.png"],
  },
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en">
        <body className={inter.className}>
          <TRPCProvider>
            <Toaster />
            {children}
          </TRPCProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
