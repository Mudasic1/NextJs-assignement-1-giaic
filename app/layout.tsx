import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "M Mudasir Chandio",
  description: "Modern Minimalist Mudasir's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-Inter`}
      >  
       
        {children}
        
      </body>
    </html>
  );
}
