import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About site",
  description: "Description of about site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="py-4 px-5 bg-amber-800 text-yellow-50">{children}</div>
  );
}
