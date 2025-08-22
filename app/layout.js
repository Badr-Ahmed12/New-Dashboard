import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "created by badr ahmed soliman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/logo.png" />
    </head>
      <body>
       {children}
      </body>
    </html>
  );
}
