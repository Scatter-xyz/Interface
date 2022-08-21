import { ethers } from "ethers";
import Link from "next/link";
import { useEffect, useState } from "react";
import { METAMASK_NOT_INSTALLED, CHAINID_NOT_SUPPORTED } from "../constants/constants";

const navOptions = [
    ['Fraction', '/fraction', true],
    ['Trade', '/trade', true],
    ['Merge', '/merge', true],
    ['IFOs', '/ifos', false],
    // ['FAQ', '/faq', true],
    // ['About Us', '/about', true],
]

const PopulateNav = ({pageLoad}) => {
    return (
        <>
            {
            navOptions.map(([title, url, active]) => (
                <a key={title} href={active ? url : ''} className={ `px-3 py-3 text-l font-semibold ${active ? 'text-emerald-900 text-slate-700 hover:text-slate-900 hover:font-bold' : 'rounded text-zinc-400 cursor-not-allowed disabled'} ${pageLoad === title ? 'border-b-2 border-emerald-500' : '' }` }>{title}</a>
            ))}
        </>
    )

}

const PopulateBottomNav = ({pageLoad}) => {
    return (
        <div className="rounded-[16px] m-auto flex flex-row justify-center items-center w-auto bg-stiletto-600 text-white border-2">
            {
                navOptions.map(([title, url, active]) => (
                    active ? <a key={title} href={active ? url : ''} className={`rounded-[16px] text-white px-4 py-2 md:px-6 md:py-3 text-sm md:text-base ${active ? 'hover:text-gray-100 text-white hover:text-slate-900' : 'rounded text-zinc-400 cursor-not-allowed disabled'} ${pageLoad === title ? 'font-semibold bg-stiletto-400' : 'font-base' }` }>{title}</a> : ''
            ))}
        </div>
    )
}

const BurgerMenu = ({setBurgerMenu, pageLoad}) => {
    return (
        <div className="absolute w-screen h-screen border-4 z-40 bg-gin-50">
            <div className="absolute right-0 mt-6 mr-4">
                <img src="close.png" className="w-8 h-6" onClick={() => setBurgerMenu(false)}/>
            </div>
            <div className="flex flex-col pt-20 pl-8">
                {
                    navOptions.map(([title, url, active]) => (
                        <a key={title} href={active ? url : ''} className="text-2xl md:text-4xl md:m-5 text-greenKelp-500 hover:text-greenKelp-100 m-1 font-bold">{title}</a>
                    ))
                }
            </div>
        </div>
    )
}

const FaucetBar = () => {
    return (
        <div className="w-full h-8 md:h-10 border-2 border-stiletto-700 bg-stiletto-600 flex flex-row justify-center items-center">
            <div className="text-white text-[10px] md:text-[12px] font-normal md:font-semibold">To Mint Testnet NFTs <Link href="/faucet"><button className="rounded-full mx-2 px-2 md:px-3 py-1 bg-white text-stiletto-600 hover:bg-stiletto-700 hover:text-white font-semibold md:font-bold">Click Here</button></Link></div>
        </div>
    )
}

const Navbar = ({pageLoad='Default', setWalletContext}) => {

    const [wallet,setWallet] = useState({
        provider:'',
        address: '',
        signer: '',
        errorCode: '',
        signedStakingContract: '',
        signedTokenAddress: '',
        loading:true,
    });

    const [burgerMenu, setBurgerMenu] = useState(false);

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
        if(!["Default","Trade"].includes(pageLoad)) {
            connectWallet(wallet);
        }
    },[]);

    return (
        <>
        <div className="fixed z-50">
        {
            burgerMenu === true ? <BurgerMenu setBurgerMenu={setBurgerMenu} pageLoad={pageLoad}/> : ''
        }
        </div>
        <div className="lg:invisible fixed flex flex-row justify-center bottom-0 mb-4 w-full">
            {
                pageLoad !== 'Default' ? <PopulateBottomNav pageLoad={pageLoad}/> : ''
            }
        </div>
        <div className="fixed top-0 border-b-2 border-emerald-900 bg-gin-100 w-full z-20 h-content">
            <div>
                {
                    !['Default','Faucet'].includes(pageLoad) ? <FaucetBar /> : ''
                }
            </div>
            <nav className="m-2 flex items-center space-x-6">
                <Link href="/">
                    <a className="font-serif w-32 lg:border-r-2 border-black px-3 py-3 text-greenKelp-500 hover:text-emerald-700 text-2xl font-bold">Scatter</a>
                </Link>
                <div className="invisible lg:visible min-w-0">
                    {
                        <PopulateNav pageLoad={pageLoad}/>
                    }
                </div>
                <div className="flex-1"> </div>
                <div className="visible lg:invisible">
                    {
                        pageLoad === "Default" ? (<div>
                            {
                                burgerMenu !== true ? <img onClick={() => setBurgerMenu(true)} src="hamburger.png" className="mr-6 w-8 h-6 lg:w-8 lg:h-8 md:mr-4" /> : ''
                            }
                            </div>) : ''
                    }
                </div>
                { !["Default","Trade"].includes(pageLoad) ? (wallet.loading ? <button onClick={() => connectWallet(wallet)} className="rounded bg-emerald-900 hover:bg-emerald-700 text-white px-3 py-3 text-base font-normal"> Connect To Metamask</button> : wallet.error === 'METAMASK_NOT_INSTALLED'
                ? <button onClick={() => connectWallet(wallet)} className="rounded bg-emerald-900 hover:bg-emerald-700 text-white px-3 py-3 text-slate-700 text-base font-normal"> Connect To Metamask</button> 
                : <button disabled className="rounded-full border-2 border-teal-800 bg-neutral-700 text-white px-4 py-1 md:px-8 md:py-2.5 font-normal text-sm"> {wallet.address.substring(0,4) + '...' + wallet.address.substring(wallet.address.length - 4,wallet.address.length)}</button> ) : ''}
            </nav>
        </div>
        </>
    )
}

export default Navbar;