"use client";

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  sepolia,
  anvil,
  mainnet,
} from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'Wallet Feature',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [sepolia, anvil, mainnet],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

export default config;