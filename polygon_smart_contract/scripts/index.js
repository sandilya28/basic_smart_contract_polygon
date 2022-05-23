const connectWallet = async () => {
  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page
  const provider = await hre.ethers.providers.Web3Provider(window.ethereum);

  if (window.ethereum) {
    // MetaMask requires requesting permission to connect users accounts
    const accounts = await provider.send("eth_requestAccounts", []);
    const account = accounts[0]; 
  }
}