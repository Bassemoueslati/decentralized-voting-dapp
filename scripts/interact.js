const { ethers } = require("hardhat");

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.attach(contractAddress);

  await voting.vote("Alice");

  const votes = await voting.getVotes("Alice");

  console.log("Votes for Alice:", votes.toString());
}

main().catch(console.error);
