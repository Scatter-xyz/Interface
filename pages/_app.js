import '../styles/globals.css'
import { createContext, useState } from 'react';
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  lightTheme,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) })]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export const WalletContext = createContext();

function MyApp({ Component, pageProps }) {
  console.log("Chain:", chain.mainnet);

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
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider avatar="none" modalSize="compact" chains={chains} theme={lightTheme({
        accentColor: '#528F66',
        accentColorForeground: 'white',
        borderRadius: 'medium',
        fontStack: 'system',
        overlayBlur: 'small',
      })}
      >
        <WalletContext.Provider value={{wallet,setWallet}} >
          <Component {...pageProps} /> 
        </WalletContext.Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
