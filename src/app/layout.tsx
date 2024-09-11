import { ThemeProvider } from "@/components/theme";
import { ReactQueryProvider } from "@/react-query/provider";
import { ReduxProvider } from "@/redux/provider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maltivas",
  description: "A gamified, community-based learning platform.",
  viewport: "width=device-width, initial-scale=1.0",
  keywords: "learning, LMS, gamified education, online courses",
  openGraph: {
    title: "Maltivas",
    description: "A gamified, community-based learning platform.",
    url: "https://yourdomain.com", // Replace with my actual URL
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg", // Replace with my OG image
        width: 1200,
        height: 630,
        alt: "Maltivas Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maltivas",
    description: "A gamified learning platform.",
    images: "https://yourdomain.com/og-image.jpg", // Replace with my Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={jakarta.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <ReduxProvider>
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </ReduxProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
