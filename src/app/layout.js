import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import Favicon from "@/assets/logo.svg";

const eUkraineMediumSans = localFont({
  src: "./fonts/e-Ukraine-Medium.ttf",
  variable: "--font-e-ukraine-medium",
  weight: "500",
});

const eUkraineRegularSans = localFont({
  src: "./fonts/e-Ukraine-Regular.ttf",
  variable: "--font-e-ukraine-regular",
  weight: "400",
});

export const metadata = {
  title: "Вітрила",
  description: "Громадська організація «Молодіжні вітрила»",
  icons: {
    icon: Favicon.src,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/*<link rel="icon" href="./favicon.svg" type="image/svg+xml" />*/}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body
        className={`${eUkraineMediumSans.variable} ${eUkraineRegularSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
