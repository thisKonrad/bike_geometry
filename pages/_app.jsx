/* :::: APP :::: */
import { useToggleStore } from '../components/Zustand/index.jsx';
import { useEffect } from 'react';
import '@/styles/globals.css';


export default function App({ Component, pageProps }) {
  
  const isToggled = useToggleStore(state => state.isToggled);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isToggled ? 'dark' : 'light');
  }, [isToggled]);


  return (<Component {...pageProps} />)
}
