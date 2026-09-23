import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--f-display" });
const body = Figtree({ subsets: ["latin"], variable: "--f-body" });

export const metadata = {
  title: "Jasmin Urrutia · Portafolio",
  description: "Estudiante de Ingeniería de Software. Apps web y móviles.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
