
import React from "react";
import { View } from "react-native";
import SocialMediaChoice from "./social-media-choice.component";
import { SocialMediaItem } from "@/screens/home-page.screen";
import { makeStyles } from '@rneui/themed';

interface Props {
    socialMediaList: SocialMediaItem[],
    onToggleSelected: (socialMediaId: number) => void
}

function SocialMediaList({ socialMediaList, onToggleSelected }: Props) {
    const styles = useSocialMediaListStyles();

    return (
        <View
            style={styles.parentView}>
            {socialMediaList.map((sm) => <SocialMediaChoice socialMedia={sm} onToggleSelected={onToggleSelected} key={sm.id} />)}
        </View>
    );
}

const useSocialMediaListStyles = makeStyles(() => ({
    parentView: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#666665',
        justifyContent: 'space-evenly'
    }
}));

export default SocialMediaList;
