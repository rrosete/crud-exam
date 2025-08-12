// "use client";

import "../globals.css";
import { Navbar } from "components/navbar/navbar";

export const metadata = {
  title: {
    default: "Admin - CRUD Exam",
    template: "%s | EXAM",
  },
  description: "CRUD Exam",
};

const navLinks = [
  { name: "User", href: "/user" },
  { name: "Post", href: "/post" },
];

export default function AdminLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-stone-50">
        <header>
          <Navbar data={navLinks} />
        </header>
        <div className="flex-grow my-5 mx-2">{children}</div>
        {/* <footer className="bg-stone-100 p-1">
          <div className="container mx-auto text-center">
            <p>Ryan Cedrick Rosete</p>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
