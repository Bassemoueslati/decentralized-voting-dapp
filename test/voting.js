const { expect } = require("chai");

describe("Voting", function () {
  it("Should allow voting once", async function () {
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy(["Alice"]);

    await voting.vote("Alice");

    const votes = await voting.getVotes("Alice");

    expect(votes.toString()).to.equal("1");
  });

  it("Should prevent double voting", async function () {
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy(["Alice"]);

    await voting.vote("Alice");

    try {
      await voting.vote("Alice");
    } catch (error) {
      return;
    }

    throw new Error("Double voting not prevented");
  });
});
