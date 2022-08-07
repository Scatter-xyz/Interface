import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/NavBar'
import Link from 'next/link'

const Default = () => {
  return (
    <div className="h-full w-full relative">
      <div className="absolute top-0 left-0 ml-12 mt-28">
          <p className="text-white text-6xl">An Innovation In NFT Space</p>
          <Link href="/fractionalise"><button className="font-mono mt-32 rounded bg-stiletto-500 hover:bg-stiletto-300 border-2 border-white text-white px-8 py-3 text-base font-normal">Fractionalise ></button></Link>
      </div>
    </div>
  )
}

const Fractionalise = () => {
  return (
    <div className="h-full w-full relative">
      <div className="absolute top-0 left-0 ml-12 mt-28">
          <p className="text-white text-6xl">Fractionalise Your NFTs</p>
          <Link href="/fractionalise"><button className="font-mono mt-32 rounded bg-stiletto-500 hover:bg-stiletto-300 border border-white text-white px-8 py-3 text-base font-normal">Fractionalise ></button></Link>
      </div>
    </div>
  )
}

const Merge = () => {
  return (
    <div className="h-full w-full relative">
      <div className="absolute top-0 left-0 ml-12 mt-28">
          <p className="text-white text-6xl">Collect Fractions And Merge</p>
          <Link href="/merge"><button className="font-mono mt-32 rounded bg-stiletto-500 hover:bg-stiletto-300 border border-white text-white px-8 py-3 text-base font-normal">Merge ></button></Link>
      </div>
    </div>
  )
}

const IFO = () => {
  return (
    <div className="h-full w-full relative">
      <div className="absolute top-0 left-0 ml-12 mt-28">
          <p className="text-white text-6xl">Host Initial Fraction Offering Sales</p>
          <button className="font-mono mt-32 rounded bg-stiletto-500 hover:bg-stiletto-300 border border-white text-white px-8 py-3 text-base font-normal cursor-not-allowed" disabled>Under Development</button>
      </div>
    </div>
  )
}

const Trade = () => {
  return (
    <div className="h-full w-full relative">
      <div className="absolute top-0 left-0 ml-12 mt-28">
          <p className="text-white text-6xl">Trade On NFT Marketplaces</p>
          <Link href="/trade"><button className="font-mono mt-32 rounded bg-stiletto-500 hover:bg-stiletto-300 border border-white text-white px-8 py-3 text-base font-normal">Trade ></button></Link>
      </div>
    </div>
  )
}

export const FooterData = () => {
  return (
    <div className="bg-greenKelp-500 w-full h-60">
        <div className="grid place-items-center h-full">
          <div>
          <p className="font-sans font-normal text-white text-4xl">Wanna connect with us?</p>
          </div>
        </div>
      </div>
  )
}

export default function Home() {
  const[cardSelector, setCardSelector] = useState('FRACTIONALISE');
  return (
    <div>
      <Head>
        <title>Scatter</title>
        <meta name="description" content="Fractionalise your NFTs for more liquidity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="w-full min-h-content bg-gin-50">
          <div className="w-full h-screen z-0 border-4">
            <div className="absolute bottom-0 left-0 ml-16 mb-28 w-content">
            <h1 className=" font-serif text-6xl font-bold mb-4 text-greenKelp-500">Scatter</h1>
            <p className="font-sans text-l text-greenKelp-500 font-normal ">A vision of truly distributed and decentralised NFT world with reduced creator fee</p>
            </div>
            {/* <div className="absolute bottom-0 right-0 flex flex-row-reverse items-center space-x-3 mr-24 mb-24 border-b-2">
                <Image src="/task.svg"  width="200" height="5" className="border-b"/>
                <p className="border-b font-mono text-xs font-medium text-slate-600 px-3 py-3 w-2/12 space-x-3">Enabling new investers to become a part of blue chip Nfts fractions hodler</p>

                <Image src="/task.svg"  width="200" height="1"/>
                <p className=" font-mono text-xs text-slate-600 font-medium px-3 py-3 border-b border-emerald-900 w-2/12 space-x-3">Providing utility to the community to trade fractions at reduced creator fees</p>
            </div> */}
          </div>

          <div className="w-full h-screen">
            <div className="grid grid-rows-7 grid-flow-col h-5/6 border-b-2 border-t-2 border-emerald-900 min-h-[50%]">
              <div className="cursor-pointer col-span-2 hover:bg-seaMist-500 relative border-b-2 border-r-2 border-emerald-900" onClick={() => setCardSelector("FRACTIONALISE")}>
                <div className="h-full w-full">
                  <div className="relative grid place-items-center h-full">
                      <p className="absolute font-sans font-normal text-greenKelp-500 text-4xl">Fractionalise</p>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer col-span-2 hover:bg-seaMist-500 border-r-2 border-emerald-900" onClick={() => setCardSelector("IFO")}>
                <div className="h-full w-full">
                  <div className="relative grid place-items-center h-full">
                      <p className="absolute font-sans font-normal text-greenKelp-500 text-4xl">IFO</p>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer col-span-2 hover:bg-seaMist-500 border-b-2 border-emerald-900" onClick={() => setCardSelector("TRADE")}>
                <div className="h-full w-full">
                  <div className="relative grid place-items-center h-full">
                      <p className="absolute font-sans font-normal text-greenKelp-500 text-4xl">Trade</p>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer col-span-2 hover:bg-seaMist-500" onClick={() => setCardSelector("MERGE")}>
                <div className="h-full w-full">
                  <div className="relative grid place-items-center h-full">
                      <p className="absolute font-sans font-normal text-greenKelp-500 text-4xl">Merge</p>
                  </div>
                </div>
              </div>
              <div className="row-span-2 col-span-3 bg-stiletto-500">
                {
                  cardSelector === "FRACTIONALISE" ? <Fractionalise/> : cardSelector === "MERGE" ? <Merge/> : cardSelector === "IFO" ? <IFO/> : cardSelector === "TRADE" ? <Trade/> : <Default/>
                }
              </div>
            </div>
          </div>
        </div>
        <FooterData/>
      </main>
    </div>
  )
}
