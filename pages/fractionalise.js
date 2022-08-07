import axios from 'axios';
import Navbar from '../components/NavBar'
import { ethers } from 'ethers';
import { useEffect, useReducer, useState } from 'react';
import { FooterData } from '.'
import { ERC_721, MAX_FRACTION_COUNT, FRACTION_CONTRACT_ADDRESS } from '../constants/constants';
import contractABI from '../public/fractionABI.json';
import ERC721ABI from '../public/ERC721ABI.json';

const maxFractionCount = MAX_FRACTION_COUNT;

const executeFractionalisation = async ({walletContext, contractAddress, tokenID, tokenCount}) => {
    const stakingContract = new ethers.Contract(FRACTION_CONTRACT_ADDRESS,contractABI,walletContext.provider);
    const signedStakingContract = await stakingContract.connect(walletContext.signer);

    const tokenAddress = new ethers.Contract(contractAddress, ERC721ABI, walletContext.provider);
    const signedTokenAddress = await tokenAddress.connect(walletContext.signer);
    const tokenApproved = await signedTokenAddress.getApproved(tokenID);

    console.log("Approver is: ", tokenApproved);

    if(tokenApproved.toLowerCase() !== FRACTION_CONTRACT_ADDRESS.toLowerCase()) {
        const txnReceipt = await signedTokenAddress.approve(FRACTION_CONTRACT_ADDRESS,tokenID);
        console.log("Transcation Receipt: ", txnReceipt);
        <div class="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3" role="alert">
            Transaction has been sent with Reciept: {txnReceipt.hash}
        </div>
    } else {
        console.log("Can fractionalise now!");
        const txnReceipt = await signedStakingContract.fractionalize(contractAddress, tokenID, tokenCount);
        console.log("Transcation Receipt: ", txnReceipt);
        <div class="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3" role="alert">
            Transaction has been sent with Reciept: {txnReceipt.hash}
        </div>
    }
}

const FractionCard = ({walletNFTsList = [], walletContext}) => {

    const reducer = (state, action) => {
        return state.set(action.key,action.value);
    }

    const [fractionCount, dispatch] = useReducer(reducer,new Map([]));

    const fractionalise = ({key,contractAddress,tokenID}) => {
        const tokenCount = fractionCount.get(key);
        console.log("Fraction Count: ", tokenCount, " Contract: ", contractAddress, " TokenID: ", tokenID);
        if(tokenCount <= 0 || tokenCount > maxFractionCount) {
            <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 z-50" role="alert">
                <span class="font-medium">Fraction Count should be less than {MAX_FRACTION_COUNT}</span>
            </div>
        } else if(walletContext){
            executeFractionalisation({walletContext, contractAddress, tokenID, tokenCount});
        }
    }

    return (
        <>
            <div className="p-20 z-0">
                <div className="flex flex-rows">
                    <div className="flex-1"></div>
                    <div className="grid grid-cols-3 gap-20">
                        {
                            walletNFTsList.map((data) => 
                                <div className="rounded-lg shadow-lg bg-white max-w-sm" key={data.originalAddress + "-" + data.tokenID}>
                                    <div className="m-h-60">
                                        <img className="rounded-t-lg" src={data.nftImage} alt=""/>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex flex-row">
                                            <p className="text-emerald-700 text-sm font-semibold mb-2">Original Address: </p>
                                            <div className="flex-1" />
                                            <a className="text-sm text-emerald-900 hover:text-emerald-700" href={`https://rinkeby.etherscan.io/address/${data.originalAddress}`} target="_blank">{data.originalAddress.substring(0,6) + "..." + data.originalAddress.substring(data.originalAddress.length-6,data.originalAddress.length)} </a> 
                                        </div>
                                        <div className="flex flex-row">
                                            <p className="text-emerald-700 text-sm font-semibold mb-2">Token Id:</p>
                                            <div className="flex-1" />
                                            <p className="text-sm text-emerald-900">{data.tokenID}</p>
                                        </div>
                                        <div className="flex flex-row">
                                            <p className="text-emerald-700 text-sm font-semibold mb-2">Fraction Count:</p>
                                            <div className="flex-1" />
                                            <input value={fractionCount.get(data.originalAddress + "-" + data.tokenID)} onChange={(e) => dispatch({value: e.target.value, key: (data.originalAddress + "-" + data.tokenID)})} min="1" max={maxFractionCount} className="min-w-0 block w-28 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-emerald-900 focus:outline-none" type='number' name="fractionCount" required/>
                                        </div>
                                        <div className="relative grid place-items-center h-full mb-12 mt-16">
                                        <button type="button" onClick={() => fractionalise({key: (data.originalAddress + "-" + data.tokenID), contractAddress: data.originalAddress, tokenID: data.tokenID})}  className="absolute font-sans px-12 py-4 bg-stiletto-500 hover:bg-stiletto-600 text-white font-semibold text-l uppercase rounded">Fractionalise</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="flex-1"></div>
                </div>
            </div>
        </>
    )
}

function fetchNfts(owner, setNftsList) {
    let nftsList = [];

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch(`https://eth-rinkeby.alchemyapi.io/v2/9QLQtE0COOGdYHOSbo43OOYPqZ_Fw2OM/getNFTs/?owner=${owner}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        result.ownedNfts.map((nft) => {
            if(nft.id.tokenMetadata.tokenType === ERC_721) {
                nftsList.push(
                    {
                        nftImage: nft.media[0].gateway,
                        originalAddress: nft.contract.address,
                        tokenID: parseInt(nft.id.tokenId,16),
                    }
                );
            }
        });
        setNftsList(nftsList);
    })
    .catch(error => console.log('error', error));
    return nftsList;
}

const Fractionalise = () => {

    const[walletContext, setWalletContext] = useState();
    const[nftsList, setNftsList] = useState([]);

    useEffect(() => {

        if(walletContext && !walletContext.error) {
            fetchNfts(walletContext.address, setNftsList);
        }
    },[walletContext]);

    return (
        <div className="w-full min-h-content bg-gin-50">
            <Navbar pageLoad='Fractionalise' setWalletContext={setWalletContext}/>
            <div className="pt-10 min-h-screen z-10">
                <FractionCard walletNFTsList={nftsList}  walletContext={walletContext}/>
            </div>
            <FooterData />
        </div>
    )
}

export default Fractionalise;