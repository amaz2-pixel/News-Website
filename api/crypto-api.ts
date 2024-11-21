export class CryptoApi{
    static async fetchBitcoin(): Promise<CryptoItem>
    {
      const cryptoResponse: CryptoResponse= await  (await fetch("https://api.coincap.io/v2/assets/bitcoin")).json();

         return cryptoResponse.data;
    }
}