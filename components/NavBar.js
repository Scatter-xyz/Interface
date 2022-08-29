import Link from "next/link";
import WalletConnect from "./WalletConnect";
import { useEffect, useState } from "react";
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
        <div className="flex flex-row">
            {
            navOptions.map(([title, url, active]) => (
                <div key={title} className="relative w-content h-content cursor-not-allowed">
                    {
                        !active ? (
                            <div className="absolute flex flex-row items-start justify-end w-full h-full z-0">
                                <div className="rounded-full flex bg-red-500 text-[10px] px-1 text-white font-semibold">dev</div>
                            </div>
                        ) : <> </>
                    }
                    <a href={active ? url : ''} className={ `py-3 text-l font-semibold ${active ? 'px-3 text-emerald-900 text-slate-700 hover:text-slate-900 hover:font-bold' : 'pr-7 pl-3 rounded text-zinc-400 disabled'} ${pageLoad === title ? 'border-b-2 border-emerald-500' : '' }` }>{title}</a>
                </div>
            ))}
        </div>
    )

}

const PopulateBottomNav = ({pageLoad}) => {
    return (
        <div className="rounded-[16px] m-auto flex flex-row justify-center items-center w-auto bg-stiletto-600 border-2 border-stiletto-400 text-white">
            {
                navOptions.map(([title, url, active]) => (
                    active ? <a key={title} href={active ? url : ''} className={`rounded-[16px] text-white px-4 py-3 text-semibold ${active ? 'hover:text-gray-100 text-white hover:text-slate-900' : 'rounded text-zinc-400 cursor-not-allowed disabled'} ${pageLoad === title ? 'font-bold bg-stiletto-400' : 'font-semibold' }` }>{title}</a> : ''
            ))}
        </div>
    )
}

const BurgerMenu = ({setBurgerMenu, pageLoad}) => {
    return (
        <div className="absolute w-screen h-screen border-4 z-40 bg-gin-50">
            <div className="absolute right-0 mt-6 mr-4">
                <img src="close.png" className="w-8 h-7" onClick={() => setBurgerMenu(false)}/>
            </div>
            <div className="flex flex-col pt-20 pl-8">
                {
                    navOptions.map(([title, url, active]) => (
                        <a key={title} href={active ? url : ''} className="text-3xl md:text-4xl m-4 md:m-5 text-greenKelp-500 hover:text-greenKelp-100 m-1 font-bold">{title}</a>
                    ))
                }
            </div>
        </div>
    )
}

const FaucetBar = () => {
    return (
        <div className="w-full h-10 border-b-2 border-stiletto-700 bg-stiletto-600 flex flex-row justify-center items-center">
            <div className="text-white text-[12px] font-semibold">To Mint Testnet NFTs <Link href="/faucet"><button className="rounded-full mx-2 px-3 py-1 bg-white text-stiletto-600 hover:bg-stiletto-700 hover:text-white font-bold">Click Here</button></Link></div>
        </div>
    )
}

const Navbar = ({pageLoad='Default'}) => {

    const [burgerMenu, setBurgerMenu] = useState(false);

    return (
        <>
        <div className="fixed z-50">
        {
            burgerMenu === true ? <BurgerMenu setBurgerMenu={setBurgerMenu} pageLoad={pageLoad}/> : ''
        }
        </div>
        <div className="lg:invisible fixed flex flex-row justify-center bottom-0 mb-2 w-full">
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
            <nav className="m-1 md:m-2 flex items-center space-x-1 lg:space-x-6">
                <Link href="/">
                    <a className="font-serif w-32 lg:border-r-2 border-black md:px-3 md:py-3 text-greenKelp-500 hover:text-emerald-700 text-lg md:text-2xl font-semibold md:font-bold">Scatter</a>
                </Link>
                <div className="invisible absolute lg:relative lg:visible min-w-0">
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
                <WalletConnect pageLoad={pageLoad}/> 
            </nav>
        </div>
        </>
    )
}

export default Navbar;