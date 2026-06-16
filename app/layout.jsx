import "./globals.css";

export const metadata = {
  title: "Sujata Khedekar — Full Stack Developer",
  description:
    "Sujata Khedekar — Full Stack Developer from India. Specializing in Next.js, Laravel, Shopify & WordPress. 40+ live projects across 7+ industries.",
  openGraph: {
    title: "Sujata Khedekar — Full Stack Developer",
    description: "40+ live projects. Next.js, Laravel, Shopify & WordPress.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0C0C0C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;0,700;0,900;1,500&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground font-sans antialiased selection:bg-orange/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
