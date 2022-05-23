const deploy = async () => {
  const counterContractFactory = await hre.ethers.getContractFactory("Counter");
  const counterContract = await counterContractFactory.deploy();

  await counterContract.deployed();

  console.log("Contract deployed at ", counterContract.address);
  //Counter contract deployed at:  0x88f4eDFBE15a96d1dF6722Ef0dd54eFC938cdC07
}

deploy()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});