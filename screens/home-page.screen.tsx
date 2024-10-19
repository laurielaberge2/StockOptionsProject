import React from "react";
import { View } from "react-native";
import { SearchBar } from '@rneui/themed';
import { useState } from "react";
import SocialMediaList from "@/components/social-media-list.component";
import StockOptionResult from "@/components/stock-option-result.component";
import { makeStyles } from '@rneui/themed';

export enum SocialMediaEnum {
    FACEBOOK = 'Facebook',
    INSTAGRAM = 'Instagram',
    TWITTER = 'Twitter / X',
    TIKTOK = 'TikTok',
}

export interface SocialMediaItem {
    id: number,
    name: SocialMediaEnum,
    selected: boolean
}

export interface SocialMediaMentions {
    name: SocialMediaEnum,
    nbMentions: number
}

function HomePage() {
    const styles = useHomePageStyles();

    const [stockOption, setStockOption] = useState<string>("");

    const [socialMediaSelection, setSocialMediaSelection] = useState<SocialMediaItem[]>([
        { id: 1, name: SocialMediaEnum.FACEBOOK, selected: true },
        { id: 2, name: SocialMediaEnum.INSTAGRAM, selected: true },
        { id: 3, name: SocialMediaEnum.TWITTER, selected: true },
        { id: 4, name: SocialMediaEnum.TIKTOK, selected: true }
    ]);

    const updateSearch = (search: string) => {
        setStockOption(search);
    };

    const onToggleSelected = (socialMediaId: number) => {
        const newSocialMediaSelection = [...socialMediaSelection]

        newSocialMediaSelection.map((sm: SocialMediaItem) => {
            if (sm.id === socialMediaId) {
                sm.selected = !sm.selected
            }
        })

        setSocialMediaSelection(newSocialMediaSelection)
    }

    return (
        <View style={styles.parentView}>
            <SearchBar
                placeholder="Enter a stock option"
                onChangeText={updateSearch}
                value={stockOption}
                platform="android"
                containerStyle={{ backgroundColor: '#666665' }}
                placeholderTextColor={"#b0afab"}
            />

            <SocialMediaList socialMediaList={socialMediaSelection} onToggleSelected={onToggleSelected} />

            <StockOptionResult
                stockOption={stockOption}
                selectedSocialMedia={socialMediaSelection.filter(x => x.selected).map(x => x.name)}
            />
        </ View >
    );
}

const useHomePageStyles = makeStyles(() => ({
    parentView: {
        backgroundColor: '#b0afab',
        height: '100%'
    },
}));

export default HomePage;