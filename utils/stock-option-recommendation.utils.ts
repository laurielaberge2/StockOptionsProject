import { SocialMediaMentions } from "@/app/models/social-media.models";
import { BuyHoldSell } from "@/app/models/stock-option.models";

export function getBuyHoldSellSuggestion(
    mentions: SocialMediaMentions[],
    price: number,
    purchasePrice: number,
    priceInLastMonth: number
): BuyHoldSell {
    console.log({ mentions })
    let points = 0;
    const priceWentUpSincePurchase = price > purchasePrice;
    console.log({ points })
    mentions.map(x => x.nbMentions > 3 && points++);
    console.log(points >= 3)

    price > priceInLastMonth && points++;
    price < priceInLastMonth && points--;

    let a;
    if (points >= 3) {
        console.log('salut')
        a = BuyHoldSell.BUY;
    } else {
        a = priceWentUpSincePurchase
            ? BuyHoldSell.HOLD
            : BuyHoldSell.SELL;
    }

    console.log({ a })

    return a
};
