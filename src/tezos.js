import { BeaconWallet } from '@taquito/beacon-wallet';
import { TezosToolkit } from '@taquito/taquito';

const DAPP_NAME = "Tezos Developer Hub"
const RPC_URL = "https://granadanet.smartpy.io";
const NETWORK = "granadanet"
const CONTRACT_ADDRESS = "KT1Ba56eW3NHGSeTQrTQHZGAyGCJJb2Sev6U"

const Tezos = new TezosToolkit(RPC_URL);

const wallet = new BeaconWallet({
    name: DAPP_NAME,
    preferredNetwork: NETWORK,
    colorMode: 'light'
});

// Setting the wallet as the wallet provider for Taquito.
Tezos.setWalletProvider(wallet)

const network = {
    type: NETWORK,
    rpcUrl: RPC_URL
};

const getActiveAccount = async () => {
    const activeAccount = await wallet.client.getActiveAccount();

    // no active account, we need permissions first
    if (!activeAccount) {
        await wallet.requestPermissions({ network });
        return getActiveAccount();
    }

    return activeAccount;
};

const clearActiveAccount = async () => {
  return wallet.client.clearActiveAccount();
}

const getContract = async () => {
  return Tezos.wallet.at(CONTRACT_ADDRESS);
}

const getContractStorage = async () => {
  return (await getContract()).storage();
}

export {
    Tezos,
    wallet,
    getActiveAccount,
    clearActiveAccount,
    getContract,
    getContractStorage
};
