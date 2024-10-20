import React from "react";
import { View } from "react-native";
import { SearchBar } from '@rneui/themed';
import { useState } from "react";
import StockOptionResult from "@/components/stock-option/stock-option-result.component";
import { makeStyles } from '@rneui/themed';
import { SocialMediaItem, SocialMediaEnum } from "@/app/models/social-media.models";
import { Colors } from "@/constants/Colors";
import SocialMediaList from "@/components/social-media/social-media-list.component";

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

    // TODO tests et tester de cloner et build pour voir si ca fonctionne

    return (
        <View style={styles.parentView}>
            <SearchBar
                placeholder="Enter a stock option"
                onChangeText={updateSearch}
                value={stockOption}
                platform="android"
                containerStyle={{
                    backgroundColor: Colors.lightGrey
                }}
                placeholderTextColor={Colors.darkText}
            />

            <SocialMediaList socialMediaList={socialMediaSelection} onToggleSelected={onToggleSelected} />

            <StockOptionResult
                stockOption={stockOption}
                selectedSocialMedia={socialMediaSelection.filter(x => x.selected).map(x => x.name)}
            />
        </ View >
    );
};

const useHomePageStyles = makeStyles(() => ({
    parentView: {
        backgroundColor: Colors.lightGrey,
        height: '100%',
    },
}));

export default HomePage;