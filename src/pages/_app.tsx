import { AppProps } from 'next/app';
import React, { FC } from 'react';

import '../styles/index.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <main className="min-h-screen bg-red-200">
      <Component {...pageProps} />
      <h1 className="bg-red-200"></h1>
    </main>
  );
};

export default MyApp;
