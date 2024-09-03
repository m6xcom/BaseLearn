async function main() {
    // Grab the contract factory
    const Contract = await ethers.getContractFactory("BasicMath");

    const contract = await Contract.deploy(); // Instance of the contract
    console.log("Contract deployed to address:", contract.target);
 }

 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
