import React from 'react';
import { useWalletConnect } from '@walletconnect/react-native-dapp';

export async function connectWallet() {
    const connector = useWalletConnect();

    const connectWallet = React.useCallback(() => {
        return connector.connect();
    }, [connector]);
    
    await connectWallet();
}