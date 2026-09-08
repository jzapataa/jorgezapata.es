import type { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="site-frame">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
