import Dock from "./components/Dock";
import { ScrollIndicator } from "./components/ui/scroll-indicator";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
export const metadata = {
  title: "Nayan Aher - Architect",
  description:
    "Portfolio of Nayan Aher, an architect specializing in modern design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {/* <ScrollIndicator /> */}
        <Dock />
        {children}
      </body>
    </html>
  );
}
