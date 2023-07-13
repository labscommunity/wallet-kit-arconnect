import BrowserWalletStrategy from "@arweave-wallet-kit/browser-wallet-strategy";
import { Strategy } from "@arweave-wallet-kit/core/strategy";

export default class ArConnectStrategy
  extends BrowserWalletStrategy
  implements Strategy
{
  public id = "arconnect";
  public name = "ArConnect";
  public description = "Non-custodial Arweave wallet for your favorite browser";
  public theme = "171, 154, 255";
  public logo = "tQUcL4wlNj_NED2VjUGUhfCTJ6pDN9P0e3CbnHo3vUE";
  public url = "https://arconnect.io";

  constructor() {
    super();
  }

  public async isAvailable() {
    const injectedAvailable = await super.isAvailable();

    if (!injectedAvailable || !window.arweaveWallet) {
      return false;
    }

    return window.arweaveWallet.walletName === "ArConnect";
  }

  public async addToken(id: string): Promise<void> {
    return await super.callWindowApi("addToken", [id]);
  }
}