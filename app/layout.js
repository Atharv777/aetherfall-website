import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata = {
    title: "Aether Fall",
    description: "Aether Fall is a game produced by SAILAS Game Studio",

};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <meta name="viewport" content="width=device-width, initial-scale=0.68, maximum-scale=0.68, user-scalable=no" />
            <body className={`${montserrat.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
