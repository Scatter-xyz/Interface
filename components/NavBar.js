import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { METAMASK_NOT_INSTALLED, CHAINID_NOT_SUPPORTED } from "../constants/constants";

const Navbar = ({pageLoad='DEFAULT', setWalletContext}) => {

    const [wallet,setWallet] = useState({
        provider:'',
        address: '',
        signer: '',
        errorCode: '',
        loading:true,
    });

    const connect =  async (wallet) => {
        if(typeof window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            return {...wallet, provider: provider, signer: signer, address: address, loading:false, errorCode: null};
        } else {
            return {...wallet, address: null , errorCode: METAMASK_NOT_INSTALLED, loading:false}
        }
    }

    const connectWallet = async (wallet) => {
        const localwallet = await connect(wallet);
        setWallet(localwallet);
        setWalletContext(localwallet);
    }

    useEffect(() => {
        if(pageLoad !== 'DEFAULT') {
            connectWallet(wallet);
        }
    },[]);
    

    return (
        <div className="p-2 fixed top-0 border-b-2 border-emerald-900 bg-gin-50 w-full z-20 h-content">
            <nav className="flex items-center space-x-6">
                <a href='/' className=" font-serif w-32 border-r-2 border-black px-3 py-3 text-greenKelp-500 hover:text-emerald-700 text-2xl font-bold">Scatter</a>
                {[
                    ['Fractionalise', '/fractionalise', true],
                    ['Trade', '/trade', true],
                    ['Merge', '/merge', true],
                    ['IFOs', '/ifos', false],
                    // ['FAQ', '/faq', true],
                    // ['About Us', '/about', true],
                ].map(([title, url, active]) => (
                    <a key={title} href={active ? url : ''} className={ `px-3 py-3 text-l font-semibold ${active ? 'hover:border-b-2 hover:border-emerald-500 text-emerald-900 text-slate-700 hover:text-slate-900' : 'rounded text-zinc-400 cursor-not-allowed disabled'} ${pageLoad === title ? 'border-b-2 border-emerald-500' : '' }` }>{title}</a>
                ))}
                <div className="flex-1"> </div>
                { pageLoad !== 'DEFAULT' ? (wallet.loading ? '' : wallet.error === 'METAMASK_NOT_INSTALLED'
                ? <button onClick={() => connectWallet(wallet)} className="rounded bg-emerald-900 hover:bg-emerald-700 text-white px-3 py-3 text-slate-700 text-base font-normal"> Connect To Metamask</button> 
                : <button disabled className="rounded-full border-2 border-teal-800 bg-neutral-700 text-white px-8 py-2.5 font-normal text-sm"> {wallet.address.substring(0,6) + '...' + wallet.address.substring(wallet.address.length - 6,wallet.address.length)}</button> ) : ''}
                
            </nav>
        </div>
    )
}

export default Navbar;