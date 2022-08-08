import Navbar from '../components/NavBar'
import { FooterData } from '.'

const TradeCard = ({fractionDataList}) => {
    return (
        <div className="p-20 z-0">
            <div className="grid grid-cols-3 gap-12">
                {
                    fractionDataList.map((data) => 
                        <div className="rounded-lg shadow-lg bg-white max-w-sm" key={data.originalAddress + "-" + data.tokenID}>
                            <a href="#!">
                            <img className="rounded-t-lg" src={data.nftImage} alt=""/>
                            </a>
                            <div className="p-6">
                                <div className="flex flex-row">
                                    <p className="text-emerald-700 text-sm font-semibold mb-2">Original Address: </p>
                                    <div className="flex-1" />
                                    <a className="text-sm text-emerald-900 hover:text-emerald-700" href={`https://etherscan.io/address/${data.originalAddress}`} target="_blank">{data.originalAddress.substring(0,6) + "..." + data.originalAddress.substring(data.originalAddress.length-6,data.originalAddress.length)} </a> 
                                </div>
                                <div className="flex flex-row">
                                    <p className="text-emerald-700 text-sm font-semibold mb-2">Fraction Address: </p>
                                    <div className="flex-1" />
                                    <a className="text-sm text-emerald-900 hover:text-emerald-700" href={`https://rinkeby.etherscan.io//address/${data.fractionAddress}`} target="_blank">{data.fractionAddress.substring(0,6) + "..." + data.fractionAddress.substring(data.fractionAddress.length-6,data.fractionAddress.length)}  </a>
                                </div>
                                <div className="flex flex-row">
                                    <p className="text-emerald-700 text-sm font-semibold mb-2">Token Id:</p>
                                    <div className="flex-1" />
                                    <p className="text-sm text-emerald-900">{data.tokenID}</p>
                                </div>
                                <div className="flex flex-row">
                                    <p className="text-emerald-700 text-sm font-semibold mb-2">Fraction Count:</p>
                                    <div className="flex-1" />
                                    <p className="text-sm text-emerald-900">{data.fractionCount}</p>
                                </div>
                                <div className="relative grid place-items-center h-full mb-12 mt-16">
                                <button onClick={() => window.open(data.openSeaLink, '_blank', 'noopener,noreferrer')} type="button"  className="absolute font-sans px-12 py-4 bg-stiletto-500 text-white font-semibold text-l uppercase rounded">Trade On Opensea</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const Trade = ({fractionData}) => {
    return (
        <>
            <Navbar pageLoad="Trade" />
            <div className="bg-gin-50">
                <div className="fixed w-full h-fit pt-32 bg-gin-50 z-10">
                    <div className="flex justify-center">
                        <div className="mb-3 w-6/12">
                            <div className="input-group relative flex items-stretch w-full mb-4 ">
                                <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-900 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
                                <button className="btn text-white inline-block px-6 py-2 bg-emerald-900 text-white font-medium text-xs uppercase rounded hover:bg-emerald-700" type="button" id="button-addon3">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-36 h-full z-0">
                    <TradeCard fractionDataList={fractionData} />
                </div>
                <FooterData />
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            fractionData: [
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "1",
                    fractionCount: "15",
                    openSeaLink: "https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1",
                },
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "2",
                    fractionCount: "15",
                    openSeaLink: "https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1",
                },
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "3",
                    fractionCount: "15",
                    openSeaLink: "https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1",
                },
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "4",
                    fractionCount: "15",
                    openSeaLink: "https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1",
                },
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "5",
                    fractionCount: "15",
                    openSeaLink: "https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1",
                },
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "6",
                    fractionCount: "15",
                    openSeaLink: "https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1",
                },
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "7",
                    fractionCount: "15",
                    openSeaLink: "https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1",
                },
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "8",
                    fractionCount: "15",
                    openSeaLink: "https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1",
                },
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "9",
                    fractionCount: "15",
                    openSeaLink: "https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1",
                },
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "10",
                    fractionCount: "15",
                    openSeaLink: "https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1",
                },
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "11",
                    fractionCount: "15",
                    openSeaLink: "https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1",
                }
            ]
        },
    }
}

export default Trade;