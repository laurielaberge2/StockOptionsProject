import React from "react";
import { View } from "react-native";
import { SearchBar } from '@rneui/themed';
import { useState } from "react";
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

function HomePage() {
    const styles = useHomePageStyles();

    const [stockOption, setStockOption] = useState<string>("");

    const updateSearch = (search: string) => {
        setStockOption(search);
    };

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
        </ View >
    );
}

const useHomePageStyles = makeStyles(() => ({
    parentView: {
        backgroundColor: '#b0afab', height: '100%'
    },
}));

export default HomePage;