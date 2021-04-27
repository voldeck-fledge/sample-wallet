import React from 'react';
import ReactDOM from 'react-dom';
import { ERC20Asset } from '@burner-wallet/assets';
import BurnerCore from '@burner-wallet/core';
import { InjectedSigner, LocalSigner } from '@burner-wallet/core/signers';
import { InfuraGateway, InjectedGateway, XDaiGateway, } from '@burner-wallet/core/gateways';
//import Exchange, { Uniswap, XDaiBridge } from '@burner-wallet/exchange';
import ModernUI from '@burner-wallet/modern-ui';
//import {Biconomy} from '@biconomy/mexa';

const fldg = new ERC20Asset({
  id: 'fldg',
  name: 'TEST',
  network: '100',
  address: '0xE58F4bfAC26736b7EE4272809a3F47adEfe59BAB',
  icon: 'https://thefledge.community/custom/images/fldg_icon.png',
});

const core = new BurnerCore({
  signers: [new InjectedSigner(), new LocalSigner()],
  gateways: [
    new InjectedGateway(),
    new InfuraGateway(process.env.REACT_APP_INFURA_KEY),
    new XDaiGateway(),
  ],
  // TODO use Sai
  assets: [fldg],
});

//const biconomy = new Biconomy(new InfuraGateway(process.env.REACT_APP_INFURA_KEY),{apiKey: 'gX7qIsQoe.7f06c33d-1499-4d2b-8c1d-339494939d8d', debug: true});
//web3 = new Web3(biconomy);

const BurnerWallet = () =>
  <ModernUI
    title="FLDG Wallet"
    core={core}
  />


ReactDOM.render(<BurnerWallet />, document.getElementById('root'));
