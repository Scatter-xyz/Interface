import Navbar from '../components/NavBar';
import { useState, useEffect } from 'react';
import { FooterData } from '.';
import { ethers } from 'ethers';
import { OPENSEA_LINK,FRACTION_CONTRACT_ADDRESS } from '../constants/constants';
import contractABI from '../public/fractionABI.json';
import ERC1155ABI from '../public/ERC1155ABI.json';

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
        query: `{\n  tokens(first: 20) {\n    id\n    tokenId\n    owner\n    fractionContract\n    tokenURI\n originalContract\n    fractionCount\n  }\n}\n`,
        variables: {}
        })
    return  jsonData;
}

const MergeCard = ({nftData={}, walletContext}) => {
    const[data,setdata] = useState(nftData);

    const fetchFractionCount = async () => {
        const fractionalAddress = new ethers.Contract(data.fractionAddress, ERC1155ABI, walletContext.provider);
        const signedFractionalAddress = await fractionalAddress.connect(walletContext.signer);
        const availableFractionCount = await signedFractionalAddress.balanceOf(walletContext.address, data.tokenID);
        availableFractionCount = BigInt(availableFractionCount);
        return availableFractionCount.toString();
    }

    const mergeFraction = async () => {
        if(walletContext && !walletContext.error) {
            const stakingContract = new ethers.Contract(FRACTION_CONTRACT_ADDRESS, contractABI, walletContext.provider);
            const signedStakingContract = await stakingContract.connect(walletContext.signer);
            
            const tokenAddress = new ethers.Contract(data.fractionAddress, ERC1155ABI, walletContext.provider);
            const signedTokenAddress = await tokenAddress.connect(walletContext.signer);
            const isApproved = await signedTokenAddress.isApprovedForAll(data.owner, FRACTION_CONTRACT_ADDRESS);

            console.log("Approver is: ", isApproved);
        
            if(!isApproved) {
                const txnReceipt = await signedTokenAddress.setApprovalForAll(FRACTION_CONTRACT_ADDRESS, true);
                console.log("Transcation Receipt: ", txnReceipt);
                <div className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3" role="alert">
                    Transaction has been sent with Reciept: {txnReceipt.hash}
                </div>
            } else {
                console.log("Can merge now!");
                const txnReceipt = await signedStakingContract.merge(data.fractionAddress, data.tokenID);
                console.log("Transcation Receipt: ", txnReceipt);
                <div className="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3" role="alert">
                    Transaction has been sent with Reciept: {txnReceipt.hash}
                </div>
            } 
        }
    }

    const fetchImageSrc = async () => {
        let nftResponse = await fetch(data.nftImage.replace('ipfs://','https://ipfs.io/ipfs/'));
        let nftMeta = await nftResponse.json();
        let availableFractionCount = '0';
        if(walletContext && !walletContext.error) {
            availableFractionCount = fetchFractionCount();
        }
        availableFractionCount = await fetchFractionCount();

        console.log("Fraction Count: ", availableFractionCount);

        setdata({...data, availableFractionCount: availableFractionCount, nftImage: nftMeta.image.replace('ipfs://','https://ipfs.io/ipfs/')});
    }

    useEffect(() => {
        fetchImageSrc();
    },[]);

    
    return (
        <>
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
                        <p className="text-emerald-700 text-sm font-semibold mb-2">Token Id: </p>
                        <div className="flex-1" />
                        <p className="text-sm text-emerald-900">{data.tokenID}</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="text-emerald-700 text-sm font-semibold mb-2">Fractions:</p>
                        <div className="flex-1" />
                        <p className="text-sm text-emerald-900">{data.availableFractionCount}/{data.fractionCount} </p>
                    </div>
                    <div className="relative grid place-items-center h-full mb-12 mt-12">
                        {
                            data.availableFractionCount === data.fractionCount ? <button onClick={() => mergeFraction()} className="absolute font-sans px-12 py-4 bg-stiletto-500 text-white font-semibold text-l uppercase rounded">Merge</button> : <button className="absolute font-sans px-12 py-4 bg-gray-400 text-white font-semibold text-l uppercase rounded" disabled>Insufficient Fractions</button>
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
            console.log("FractionCount is: ", token.fractionCount);
            if(token.fractionCount !== '0') {
                console.log("FractionCount New is: ", token.fractionCount);
                ownerFractionData.push({
                    owner: token.owner,
                    nftImage: token.tokenURI,
                    originalAddress: token.originalContract,
                    fractionAddress: token.fractionContract,
                    tokenID: token.tokenId,
                    fractionCount: token.fractionCount,
                    availableFractionCount: "0",
                    openSeaLink: OPENSEA_LINK + token.fractionContract + '/' + token.tokenId,
                    id:token.id
                });
            }
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
        <div className="w-full min-h-content bg-gin-50">
            <Navbar pageLoad="Merge" setWalletContext={setWalletContext}/>  
            <div className="pt-10 min-h-screen z-10">
                <div className="p-20 z-0">
                    <div className="grid grid-cols-3 gap-12">
                        {
                            ownerFractionData.map((data) => 
                                <MergeCard key={data.id} nftData={data} walletContext={walletContext}/>
                            )
                        }
                    </div>
                </div>
            </div>
            <FooterData />
        </div>
    )
}

export default Merge;