// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Sanvith Coaching Centre",
//   description: "Sanvith Coaching Centre: Excellence in Education for Classes 1-12 in Meerut. Expert Tutor, Comprehensive Subjects, Proven Results.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }


// src/app/layout.js

import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Sanvith Coaching Centre',
  description: 'Excellence in Education for Classes 1-12 in Meerut. Expert Tutors, Comprehensive Subjects, Proven Results.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body>{children}</body>
    </html>
  );
}
