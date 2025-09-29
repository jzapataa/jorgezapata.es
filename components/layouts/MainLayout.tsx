// components/layouts/MainLayout.tsx
import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
