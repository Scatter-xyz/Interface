import Navbar from '../components/NavBar'
import { useState, useEffect } from 'react'
import { FooterData } from '.'
import { OPENSEA_LINK } from '../constants/constants';

var myHeaders = new Headers();
myHeaders.append("content-type", "application/json");

var requestOptions = (FETCH_TYPE) => {
    return {
        method: 'POST',
        headers: myHeaders,
        body: FETCH_TYPE,
        redirect: 'follow'
    }
};

function FETCH_OWNER_FRAC_NFTS(owner) {
    let jsonData = JSON.stringify({
        query: `{\n  tokens(where: {owner: "${owner}"}) {\n    id\n    tokenId\n    owner\n    fractionContract\n    tokenURI\n originalContract\n    fractionCount\n  }\n}\n`,
        variables: {}
        })
    return  jsonData;
}

const MergeCard = ({nftData={}}) => {
    console.log("Merge Data: ", nftData);

    const[data,setdata] = useState(nftData);

    const fetchImageSrc = async () => {
        let nftResponse = await fetch(data.nftImage.replace('ipfs://','https://ipfs.io/ipfs/'));
        let nftMeta = await nftResponse.json();
        setdata({...data, nftImage: nftMeta.image.replace('ipfs://','https://ipfs.io/ipfs/')});
    }

    useEffect(() => {
        fetchImageSrc();
    },[]);

    return (
        <>
            <div key={data.id} className="rounded-lg shadow-lg bg-white max-w-sm" key={data.originalAddress + "-" + data.tokenID}>
                <a href="#!">
                <img className="rounded-t-lg" src={data.nftImage} alt=""/>
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
        </>
    )
}

const fetchAllFractionData = async (owner, setOwnerFractionData) => {
    let ownerFractionData = [];

    let response = await fetch("https://api.thegraph.com/subgraphs/name/cpp-phoenix/scatter", requestOptions(FETCH_OWNER_FRAC_NFTS(owner)));

    if(response.status === 200) {
        let data = await response.json();
        console.log("Data is: ", data);
        await data.data.tokens.map(async (token) => { 
            ownerFractionData.push({
                nftImage: token.tokenURI,
                originalAddress: token.originalContract,
                fractionAddress: token.fractionContract,
                tokenID: token.tokenId,
                fractionCount: token.fractionCount,
                openSeaLink: OPENSEA_LINK + token.fractionContract + '/' + token.tokenId,
                id:token.id
            });
        });
    }
    setOwnerFractionData(ownerFractionData);
}

const Merge = () => {
    const[walletContext, setWalletContext] = useState();
    const[ownerFractionData, setOwnerFractionData] = useState([]);

    useEffect(() => {
        if(walletContext && !walletContext.error) {
            fetchAllFractionData(walletContext.address, setOwnerFractionData);
        }
    },[walletContext]);

    return (
        <>
            <Navbar pageLoad="Merge" setWalletContext={setWalletContext}/>
            <div className="w-full min-h-content bg-gin-50">
                <div className="pt-10 h-full z-10">
                    <div className="p-20 z-0">
                        <div className="grid grid-cols-3 gap-12">
                            {
                                ownerFractionData.map((data) => 
                                    <MergeCard nftData={data} />
                                )
                            }
                        </div>
                    </div>
                </div>
                <FooterData />
            </div>
        </>
    )
}

export default Merge;