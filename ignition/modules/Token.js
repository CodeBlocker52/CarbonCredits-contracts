const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TokenModule", (m) => {
  const tokenContract = m.contract("CarbonCreditToken", []);

  return { tokenContract };
});
