import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import '../styles/theme.css'
import '../styles/theme.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />
}
