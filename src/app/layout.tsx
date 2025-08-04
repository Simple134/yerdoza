import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import StyledComponentsRegistry from '../lib/registry'

export const metadata: Metadata = {
  title: "Yerdoza",
  description: "Yerdoza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
