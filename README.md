# Basic Wallet Connect Feature (Next.js + RainbowKit + Wagmi)

This is a simple Next.js app that lets users connect their crypto wallet using [RainbowKit](https://www.rainbowkit.com/) and [Wagmi](https://wagmi.sh/).  
I built this manually to understand how wallet connection works in a modern React app.

---

## Features

- Connect wallet button (MetaMask, WalletConnect, etc.)
- Uses RainbowKit for easy wallet UI
- Uses Wagmi for Ethereum wallet logic
- Built with the Next.js App Router

---

## Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Set up environment variable:**
   - Create a `.env.local` file in the project root.
   - Add your WalletConnect project ID:
     ```
     NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
     ```

3. **Run the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser:**  
   Go to [http://localhost:3000](http://localhost:3000)

---

## How It Works

- The app uses a `Providers` component to wrap the whole app with Wagmi and RainbowKit providers.
- The config is set up in `src/rainbowKitConfig.tsx` using `getDefaultConfig`.
- The connect button is imported from RainbowKit and works out of the box.

---

## What I Learned

- How to manually set up wallet connection in Next.js
- The difference between SSR and client-side rendering for wallet features
- How to use environment variables in Next.js (`NEXT_PUBLIC_` prefix for client-side)
- Why providers are important for sharing wallet state

---

## Useful Links

- [RainbowKit Docs](https://www.rainbowkit.com/docs/installation)
- [Wagmi Docs](https://wagmi.sh/react/guides/connect-wallet)
- [Next.js Docs](https://nextjs.org/docs)

---

**This project is intentionally simple and for learning purposes.**
