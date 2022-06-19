
const TokenEth = artifacts.require('ImperialCredits.sol');
const TokenBsc = artifacts.require('TokenChild.sol');
const BridgeEth = artifacts.require('MainBridge.sol');
const BridgeBsc = artifacts.require('SideBridge.sol');

module.exports = async function (deployer, network) {

  
  if(network === 'development') {
    await deployer.deploy(TokenEth);
    const tokenEth = await TokenEth.deployed();
   // await tokenEth.mint(addresses[0], 1000);
    await deployer.deploy(BridgeEth, tokenEth.address, '0x1a0630E130AF78F3980bA4F30027788b2b585129');
    const bridgeEth = await BridgeEth.deployed(tokenEth.address, '0x1a0630E130AF78F3980bA4F30027788b2b585129');
  //  await tokenEth.updateAdmin(bridgeEth.address);
  }
  if(network === 'polyTestnet') {
    await deployer.deploy(TokenBsc, '0x1a0630E130AF78F3980bA4F30027788b2b585129');
    const tokenBsc = await TokenBsc.deployed('0x1a0630E130AF78F3980bA4F30027788b2b585129');
    await deployer.deploy(BridgeBsc, '0x1a0630E130AF78F3980bA4F30027788b2b585129');
    const bridgeBsc = await BridgeBsc.deployed('0x1a0630E130AF78F3980bA4F30027788b2b585129');
 //   await tokenBsc.updateAdmin(bridgeBsc.address);
  }
};
