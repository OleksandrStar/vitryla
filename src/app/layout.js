import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
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
  description: 'Молодіжний центр "Вітрила"',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body
        className={`${eUkraineMediumSans.variable} ${eUkraineRegularSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
