
import React from "react";
import { View } from "react-native";
import SocialMediaChoice from "./social-media-choice.component";
import { makeStyles } from '@rneui/themed';
import { SocialMediaItem } from "../../app/models/social-media.models";
import { Colors } from "../../constants/colors.constants";
import { TestIds } from "../../constants/test-ids.constants";

interface Props {
    socialMediaList: SocialMediaItem[],
    onToggleSelected: (socialMediaId: number) => void
}

function SocialMediaList({ socialMediaList, onToggleSelected }: Props) {
    const styles = useSocialMediaListStyles();

    return (
        <View
            style={styles.parentView} testID={TestIds.SOCIAL_MEDIA_LIST}>
            {socialMediaList.map((sm) =>
                <SocialMediaChoice
                    socialMedia={sm}
                    onToggleSelected={onToggleSelected}
                    key={sm.id}
                />
            )}
        </View>
    );
}

const useSocialMediaListStyles = makeStyles(() => ({
    parentView: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: Colors.darkGrey,
        justifyContent: 'space-evenly'
    }
}));

export default SocialMediaList;
