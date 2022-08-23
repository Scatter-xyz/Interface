export const METAMASK_NOT_INSTALLED = "METAMASK_NOT_INSTALLED";
export const CHAINID_NOT_SUPPORTED = "CHAINID_NOT_SUPPORTED";
export const NFT_CALL_FAILED = "NFT_CALL_FAILED";


//NFT 
export const ERC_721 = "ERC721";


//Fraction Count
export const MAX_FRACTION_COUNT = 10000;
export const FRACTION_CONTRACT_ADDRESS = "0xd4B71e9D524FB4925c8C3044b45f5FdABbad976e";

//Faucet Contract
export const FAUCET_CONTRACT_ADDRESS = "0x7fF62C41a99DcF968395cC47eAa5014efD9b3A4b";

//Opensea Details
export const OPENSEA_LINK = "https://testnets.opensea.io/assets/mumbai/"
export const MUMBAI_CONTRACT_BASE_URL = "https://mumbai.polygonscan.com/address/"

//Social Media Handles
export const TWITTER_LINK = "https://twitter.com/tryscatterxyz?s=11&t=hyIpfRdZV0OGHvouJEFPIg";
export const DISCORD_LINK = "";
export const GITHUB_LINK = "https://github.com/Scatter-xyz";

//Supported Chains
export const SUPPORTED_CHAINS = [
    {
        name: "Ethereum",
        chainId: 1,
        image: "ethereum-eth-logo.png",
        active: false
    },
    {
        name: "Polygon",
        chainId: 80001,
        image: "polygon-matic-logo.png",
        active: true
    },
    {
        name: "Celo",
        chainId: 42220,
        image: "celo-celo-logo.png",
        active: false
    },
    {
        name: "Aurora",
        chainId: 1313161554,
        image: "aurora-aoa-logo.png",
        active: false
    }
];