import { ethers, utils } from "ethers";
import { WalletContext } from "../pages/_app";
import { useContext, useEffect, useState } from "react";
import { METAMASK_NOT_INSTALLED, CHAINID_NOT_SUPPORTED, SUPPORTED_CHAINS } from "../constants/constants";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const ConnectWalletButton = ({wallet, pageLoad, setWallet}) => {
    const [networkBar, toggleNetworkBar] = useState(false);

    const NetworkBar = () => {
        return (
            <div className="border-2 border-slate-500 rounded-[16px] flex flex-col items-start mr-20 md:mr-0 px-4 py-2 fixed mt-3 w-48 sm:w-52 h-48 bg-slate-700 z-100"> 
                <div className="text-gin-50 text-sm">Select a network</div>
                <div className="flex flex-col items-start px-2 py-1">
                    {
                        SUPPORTED_CHAINS.map((chain) => (
                            <div className="flex flex-row items-center text-white py-1.5" key={chain.chainId}>
                                <img src={chain.image} className="w-5 h-5 mr-2"  /> 
                                <div className="relative pr-8">
                                    {
                                        !chain.active ? (
                                            <div className="absolute z-120 flex justify-end w-full"> 
                                                <div className="rounded-lg font-semibold px-1 bg-red-500 text-[10px]">dev</div>
                                            </div>
                                        ) : <> </>
                                    }
                                    <button onClick={() => changeNetwork(wallet, chain, toggleNetworkBar, setWallet)} className={`${chain.active ? 'text-gin-50 hover:font-semibold': 'relative text-slate-400 cursor-not-allowed disabled'}`}>{chain.name}</button>
                                </div>
                                    
                            </div>
                        ))
                    }  
                </div>
            </div>
        )
    }

    return (
        <>
        { 
            !["Default","Trade"].includes(pageLoad) ? (wallet.address && wallet.loading ? '' : (wallet.errorCode === METAMASK_NOT_INSTALLED
            ? <button disabled className="rounded-lg md:rounded-[22px] bg-red-600 text-white px-3 py-3 sm:px-3 sm:py-3 text-[8px] sm:text-[10px] md:text-[12px] md:px-4 md:py-4 lg:px-5 lg:py-4 border-2 bored-red-800 lg:text-sm font-semibold"> Metamask Not Installed</button> 
            : ( 
            <div className="flex flex rows justify-center items-center">
                <div>
                    {
                        (wallet.errorCode === CHAINID_NOT_SUPPORTED) ? 
                        <div>
                            <button onClick={() => toggleNetworkBar(!networkBar)}  className=" flex flex-rows justify-center items-center md:rounded-[22px] bg-red-500 md:mx-2 md:px-3 md:py-3 text-sm fond-semibold text-white"><img src="warning.png" className="w-6 h-6 mr-1"  /> Switch Network { networkBar ? <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-8 h-2" viewBox="0 0 512 319.24"><path d="m5.9 270.28 43.07 43.07c7.86 7.86 20.73 7.84 28.56 0l178.48-178.48L434.5 313.35c7.86 7.86 20.74 7.82 28.56 0l43.07-43.07c7.83-7.84 7.83-20.72 0-28.56L313.72 49.32l-.36-.37-43.07-43.07c-7.83-7.82-20.7-7.86-28.56 0l-43.07 43.07-.36.37L5.9 241.72c-7.87 7.86-7.87 20.7 0 28.56z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-8 h-2"  viewBox="0 0 512.02 319.26"><path d="M5.9 48.96 48.97 5.89c7.86-7.86 20.73-7.84 28.56 0l178.48 178.48L434.5 5.89c7.86-7.86 20.74-7.82 28.56 0l43.07 43.07c7.83 7.84 7.83 20.72 0 28.56l-192.41 192.4-.36.37-43.07 43.07c-7.83 7.82-20.7 7.86-28.56 0l-43.07-43.07-.36-.37L5.9 77.52c-7.87-7.86-7.87-20.7 0-28.56z"/></svg>}</button> 
                            { networkBar ? <NetworkBar /> : ''}
                        </div> : 
                        <div>
                            <button onClick={() => toggleNetworkBar(!networkBar)}  className=" flex flex-rows justify-center items-center rounded-[22px] bg-slate-700 mx-1 px-3 py-1 md:mx-2 md:px-4 md:py-2 text-base fond-semibold text-white"><img src={wallet.chain.image} className="w-6 h-6 mr-2"  /> <div className="invisible absolute md:visible md:relative mr-1 lg:mr-0"> {wallet.chain.name} </div> { networkBar ? <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-8 h-2" viewBox="0 0 512 319.24"><path d="m5.9 270.28 43.07 43.07c7.86 7.86 20.73 7.84 28.56 0l178.48-178.48L434.5 313.35c7.86 7.86 20.74 7.82 28.56 0l43.07-43.07c7.83-7.84 7.83-20.72 0-28.56L313.72 49.32l-.36-.37-43.07-43.07c-7.83-7.82-20.7-7.86-28.56 0l-43.07 43.07-.36.37L5.9 241.72c-7.87 7.86-7.87 20.7 0 28.56z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-8 h-2"  viewBox="0 0 512.02 319.26"><path d="M5.9 48.96 48.97 5.89c7.86-7.86 20.73-7.84 28.56 0l178.48 178.48L434.5 5.89c7.86-7.86 20.74-7.82 28.56 0l43.07 43.07c7.83 7.84 7.83 20.72 0 28.56l-192.41 192.4-.36.37-43.07 43.07c-7.83 7.82-20.7 7.86-28.56 0l-43.07-43.07-.36-.37L5.9 77.52c-7.87-7.86-7.87-20.7 0-28.56z"/></svg>}</button> 
                            { networkBar ? <NetworkBar /> : <> </> }
                        </div>
                    }
                </div>
                <button disabled className="rounded-full border-2 border-teal-800 bg-slate-800 text-white px-4 py-1 md:px-6 md:py-2 font-normal text-sm"> {wallet.address.substring(0,4) + '...' + wallet.address.substring(wallet.address.length - 4,wallet.address.length)}</button>
            </div>))) : ''
        }
        </>
    )
}

async function changeNetwork(wallet, chain, toggleNetworkBar, setWallet) {
    if(chain.active) {
        if(chain.chainId !== wallet.chain.chainId) {
            console.log("Wallet: ", wallet);
            console.log("Chain: ", chain);

            await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [{
                    chainId: utils.hexValue(80001),
                    rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
                    chainName: "Polygon Mumbai Testnet",
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
                }]
            });

            connectWallet(wallet, setWallet);
        }
        toggleNetworkBar(false);
    }
}

const connect =  async (wallet) => {
    if(typeof window.ethereum !== 'undefined') {
        console.log("Wallet is Installed!!");
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        const providerId = await provider.getNetwork();
        console.log("Provider is: ", providerId);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();

        let errorCode = CHAINID_NOT_SUPPORTED;
        let chain = {};
        SUPPORTED_CHAINS.forEach(function (chainObj) {
            if(chainObj.active && chainObj.chainId === providerId.chainId) {
                errorCode = '';
                chain = chainObj;
            }
        });
        
        return {...wallet, chain:chain, provider: provider, signer: signer, address: address, loading:false, errorCode: errorCode};
    } else {
        console.log("Wallet Not Installed!!");
        return {...wallet, address: null , errorCode: METAMASK_NOT_INSTALLED, loading:false}
    }
}

const connectWallet = async (wallet, setWallet) => {
    const localwallet = await connect(wallet);
    console.log("Loacl Wallet: ", localwallet);
    setWallet(localwallet);
}

const WalletConnect = ({pageLoad}) => {

    const {wallet,setWallet} = useContext(WalletContext);

    useEffect(() => {
        console.log("wallet is Data WalletConnect: ", wallet);
        connectWallet(wallet, setWallet);
    },[]);

    return (
        <div>
            {
                !["Default"].includes(pageLoad) ? <ConnectButton chainStatus="icon" showBalance={false} accountStatus="address"/> : ''
                // <ConnectWalletButton wallet={wallet} pageLoad={pageLoad}  setWallet={setWallet}/>
            }
        </div>
    )
}

export default WalletConnect;