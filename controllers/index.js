require("dotenv").config();
const ethers = require("ethers");
const _abi = require("../abi/Termyt.json");

const abi = JSON.stringify(_abi);
const ABI = JSON.parse(abi).abi;

const { MAINNET_PROVIDER, MAINNET_SIGNER, MAINNET_ADDRESS } = process.env;

const { JsonRpcProvider, Contract, Wallet } = ethers;

let contract;

const connect = async () => {
    const provider = await new JsonRpcProvider(MAINNET_PROVIDER);
    const wallet = await new Wallet(MAINNET_SIGNER);
    const signer = wallet.connect(provider);
    contract = await new Contract(MAINNET_ADDRESS, ABI, signer);

    console.log(provider, wallet, signer, contract);
}

const welcome = (req, res) => {
    const data = {
        abi : ABI,
        contract_address : MAINNET_ADDRESS,
        payload : {
            message : "Welcome to the Termyt Withdrawal Server"
        }
    }

    res.status(500).json(data);
};

const withdraw = async (req, res) => {
    try {
        const response = await contract.withdraw();

        response ? res.status(200).send("You have withdrew funds from the Termyt NFT contract.") : undefined;
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const controllers = { welcome, withdraw, connect };

module.exports = controllers;