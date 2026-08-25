import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhishek Shukla | Data Engineer",
  description: "Data Engineer portfolio — Python, SQL, Spark, Databricks, ETL/ELT, cloud data platforms and AI evaluation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
