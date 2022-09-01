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

const avalancheChain = {
  id: 43_114,
  name: 'Avalanche',
  network: 'avalanche',
  iconUrl: 'https://example.com/icon.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Avalanche',
    symbol: 'AVAX',
  },
  rpcUrls: {
    default: 'https://api.avax.network/ext/bc/C/rpc',
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  testnet: false,
};

const { provider, chains } = configureChains(
  [avalancheChain,chain.mainnet,chain.ropsten,chain.polygon,chain.polygonMumbai],
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
