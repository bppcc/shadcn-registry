// import type { Metadata } from "next";

export function createRootLayout() {
  return function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  };
}

const RootLayout = createRootLayout();
export default RootLayout;