import { SocialMediaMention } from "../app/models/social-media.models";
import { BuyHoldSell } from "../app/models/stock-option.models";

export function getBuyHoldSellSuggestion(
    mentions: SocialMediaMention[],
    price: number,
    purchasePrice: number,
    priceInLastMonth: number
): BuyHoldSell {
    let points = 0;

    const priceWentUpSincePurchase = price > purchasePrice;

    mentions.map(x => x.nbMentions > 3 && points++);

    price > priceInLastMonth && points++;
    price < priceInLastMonth && points--;

    if (points >= 3) {
        return BuyHoldSell.BUY;
    } else if (priceWentUpSincePurchase) {
        return BuyHoldSell.HOLD
    }

    return BuyHoldSell.SELL
};
