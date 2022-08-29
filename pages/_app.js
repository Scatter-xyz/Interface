import '../styles/globals.css'
import { createContext, useState } from 'react';

export const WalletContext = createContext();

function MyApp({ Component, pageProps }) {

  const [wallet,setWallet] = useState({
    provider:'',
    address: '',
    signer: '',
    chain: {},
    errorCode: '',
    signedStakingContract: '',
    signedTokenAddress: '',
    loading:true,
  });

  return (
    <WalletContext.Provider value={{wallet,setWallet}} >
      <Component {...pageProps} /> 
    </WalletContext.Provider>
  );
}

export default MyApp;
