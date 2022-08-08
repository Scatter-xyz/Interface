import Navbar from '../components/NavBar'
import Image from 'next/image'
import { FooterData } from '.'

const MergeCard = ({ownerFractionDataList}) => {
    return (
        <>
            <Navbar pageLoad="Merge"/>
            <div className="p-20 z-0">
                <div className="grid grid-cols-3 gap-12">
                    {
                        ownerFractionDataList.map((data) => 
                            <div className="rounded-lg shadow-lg bg-white max-w-sm" key={data.originalAddress + "-" + data.tokenID}>
                                <a href="#!">
                                <Image className="rounded-t-lg" src={data.nftImage} alt=""/>
                                </a>
                                <div className="p-6">
                                    <div className="flex flex-row">
                                        <p className="text-emerald-700 text-sm font-semibold mb-2">Original Address: </p>
                                        <div className="flex-1" />
                                        <a className="text-sm text-emerald-900 hover:text-emerald-700" href={`https://etherscan.io/address/${data.originalAddress}`} rel="noreferrer" target="_blank">{data.originalAddress.substring(0,6) + "..." + data.originalAddress.substring(data.originalAddress.length-6,data.originalAddress.length)} </a> 
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="text-emerald-700 text-sm font-semibold mb-2">Fraction Address: </p>
                                        <div className="flex-1" />
                                        <a className="text-sm text-emerald-900 hover:text-emerald-700" href={`https://rinkeby.etherscan.io//address/${data.fractionAddress}`} rel="noreferrer" target="_blank">{data.fractionAddress.substring(0,6) + "..." + data.fractionAddress.substring(data.fractionAddress.length-6,data.fractionAddress.length)}  </a>
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="text-emerald-700 text-sm font-semibold mb-2">Token Id: </p>
                                        <div className="flex-1" />
                                        <p className="text-sm text-emerald-900">{data.tokenID}</p>
                                    </div>
                                    <div className="flex flex-row">
                                        <p className="text-emerald-700 text-sm font-semibold mb-2">Fractions:</p>
                                        <div className="flex-1" />
                                        <p className="text-sm text-emerald-900">{data.availableFractionCount}/{data.totalFractionCount} </p>
                                    </div>
                                    <div className="relative grid place-items-center h-full mb-12 mt-12">
                                        {
                                            data.availableFractionCount === data.totalFractionCount ? <button className="absolute font-sans px-12 py-4 bg-stiletto-500 text-white font-semibold text-l uppercase rounded">Merge</button> : <button className="absolute font-sans px-12 py-4 bg-gray-400 text-white font-semibold text-l uppercase rounded" disabled>Insufficient Fractions</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

const Merge = ({ownerFractionData}) => {
    return (
        <div className="w-full min-h-content bg-gin-50">
            <div className="pt-10 h-full z-10">
                <MergeCard ownerFractionDataList={ownerFractionData} />
            </div>
            <FooterData />
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            ownerFractionData: [
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "1",
                    totalFractionCount: 15,
                    availableFractionCount: 12
                },
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "2",
                    totalFractionCount: 20,
                    availableFractionCount: 20
                },
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "3",
                    totalFractionCount: 15,
                    availableFractionCount: 8
                },
                {
                    nftImage: "https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi",
                    originalAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
                    fractionAddress: "0xe482247E3C9087b22106B03e03d0cbeB35F5d958",
                    tokenID: "4",
                    totalFractionCount: 4,
                    availableFractionCount: 4
                }
            ]
        },
    }
}

export default Merge;