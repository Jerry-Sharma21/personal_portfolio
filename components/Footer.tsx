import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
};

export default Footer;
