import Navbar from '../components/NavBar'
import { FooterData } from '.'
import { OPENSEA_LINK } from '../constants/constants';
import { useEffect, useState } from 'react';

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

var FETCH_ALL_NFTs = JSON.stringify({
    query: "{\n  tokens(first: 5) {\n    id\n    tokenId\n    owner \n    fractionContract\n    originalContract \n    fractionCount\n    tokenURI\n  }\n}",
    variables: {}
})

const TradeCard = ({nftData={}}) => {

    const[data,setdata] = useState(nftData);

    const fetchImageSrc = async () => {
        let nftResponse = await fetch(data.nftImage.replace('ipfs://','https://ipfs.io/ipfs/'));
        let nftMeta = await nftResponse.json();
        setdata({...data, nftImage: nftMeta.image.replace('ipfs://','https://ipfs.io/ipfs/')});
    }
    fetchImageSrc();

    return (
        <div className="rounded-lg shadow-lg bg-white max-w-sm" key={data.originalAddress + "-" + data.tokenID}>
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

const Trade = () => {
    
    const[fractionData, setFractionData] = useState([]);

    const fetchAllFractionData = async () => {
        let fractionData = [];
    
        let response = await fetch("https://api.thegraph.com/subgraphs/name/cpp-phoenix/scatter", requestOptions(FETCH_ALL_NFTs));
    
        if(response.status === 200) {
            let data = await response.json();
            await data.data.tokens.map(async (token) => {
                if(token.fractionCount !== '0') {
                    fractionData.push({
                        nftImage: token.tokenURI,
                        originalAddress: token.originalContract,
                        fractionAddress: token.fractionContract,
                        tokenID: token.tokenId,
                        fractionCount: token.fractionCount,
                        openSeaLink: OPENSEA_LINK + token.fractionContract + '/' + token.tokenId,
                        id:token.id
                    });
                }
            });
        }
        setFractionData(fractionData);
    }

    useEffect(() => {
        fetchAllFractionData();
    },[]);

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
                <div className="pt-36 min-h-screen z-0">
                    <div className="p-20 z-0">
                        <div className="flex flex-rows">
                            <div className="flex-1"></div>
                            <div className="grid grid-cols-3 gap-12">
                                {
                                    fractionData.map((data) => 
                                        <TradeCard key={data.id} nftData={data} />
                                    )
                                }
                            </div>
                            <div className="flex-1"></div>
                        </div>
                    </div>
                </div>
                <FooterData />
            </div>
        </>
    )
}

export default Trade;