import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import "@nomicfoundation/hardhat-ethers";
import 'dotenv/config';

const { PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  defaultNetwork: 'base_sepolia',
  networks: {
    base_sepolia: {
      url: 'https://sepolia.base.org',
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  solidity: {
    version: '0.8.24',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
};

export default config;
