import ReduxProvider from "@/provider/ReduxProvider";
import "./globals.css";
import { Roboto, Nunito, Inter } from "next/font/google";
import "./Scrollbar.css"

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
});
export const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Glamorex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className} data-theme="light">
        <ReduxProvider>     
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
