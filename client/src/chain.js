// Ethereum Mainnet
const EthereumMainnet = {
  hex: "0x1", // Chain ID in hex (1 in decimal)
  name: "Ethereum Mainnet",
  rpcUrl: "https://eth.llamarpc.com", // Public RPC (alternatives: Infura, Alchemy)
  ticker: "ETH",
  blockExplorer: "https://etherscan.io",
};

// Ethereum Sepolia Testnet
const Sepolia = {
  hex: "0xAA36A7", // Chain ID in hex (11155111 in decimal)
  name: "Ethereum Sepolia",
  rpcUrl: "https://0xrpc.io/sep", // Public RPC
  ticker: "ETH",
  blockExplorer: "https://sepolia.etherscan.io",
};

// Polygon Amoy Testnet (replacement for Mumbai)
const PolygonAmoy = {
  hex: "0x13882", // Chain ID in hex (80002 in decimal)
  name: "Polygon Amoy",
  rpcUrl: "https://rpc-amoy.polygon.technology", // Official RPC
  ticker: "MATIC",
  blockExplorer: "https://amoy.polygonscan.com",
};

// Export all supported chains
export const CHAINS_CONFIG = {
  "0x1": EthereumMainnet, // Ethereum Mainnet
  "0xaa36a7": Sepolia, // Ethereum Sepolia Testnet
  "0x13882": PolygonAmoy, // Polygon Amoy Testnet
};
