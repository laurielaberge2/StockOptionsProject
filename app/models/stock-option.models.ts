import { SocialMediaMentions } from "./social-media.models"

export enum BuyHoldSell {
    BUY = 'Buy',
    HOLD = 'Hold',
    SELL = 'Sell',
};

export interface StockOptionInfo {
    price: number,
    purchasePrice: number,
    priceInLastMonth: number,
    mentions: SocialMediaMentions[]
    recommendation: BuyHoldSell
}