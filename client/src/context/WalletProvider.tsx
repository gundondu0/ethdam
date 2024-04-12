"use client"
import React from 'react';
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";

const WalletProvider = ({ children }: any) => {
    const url = typeof window !== 'undefined' ? window.location.href : 'http://localhost:3000';

    return (
        <MetaMaskUIProvider
            sdkOptions={{
                dappMetadata: {
                    name: "Example React UI Dapp",
                    url: url,
                },
                infuraAPIKey: process.env.INFURA_API_KEY,
            }}
        >
            {children}
        </MetaMaskUIProvider>
    );
};

export default WalletProvider;