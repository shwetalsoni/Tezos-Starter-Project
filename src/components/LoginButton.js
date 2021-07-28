import React, { useState } from 'react';
import { getActiveAccount, clearActiveAccount } from "../tezos";

function LoginButton(){

    const [walletConnected, setWalletConnected] = useState(false);

    const handleLogin = async () => {
        if(!walletConnected) {
            let activeAccount = await getActiveAccount();
            setWalletConnected(true);
            console.log(activeAccount);
        }else {
            await clearActiveAccount();
            setWalletConnected(false);
        }
    }

    return(
        <>
            <button className="btn btn-round-hollow" onClick={handleLogin}>
                {walletConnected ? ('Disconnect Wallet') : ('Connect Wallet')}
            </button>
        </>
    );
}

export default LoginButton;