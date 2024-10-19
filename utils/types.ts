export interface IOrderData {
  ordinalId: string;
  price: number;
  sellerPaymentAddress: string;
  sellerOrdinalPublicKey: string;
  status: "Active" | "Pending" | "Sold";
  ordinalUtxoTxId: string;
  ordinalUtxoVout: string;
  serviceFee: number;
  signedListingPSBT: string;
}
