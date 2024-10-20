
import React from "react";
import { View } from "react-native";
import { CheckBox, makeStyles } from '@rneui/themed';
import { SocialMediaItem } from "../../app/models/social-media.models";
import { Colors } from "../../constants/colors.constants";
import { TestIds } from "../../constants/test-ids.constants";

interface Props {
    socialMedia: SocialMediaItem,
    onToggleSelected: (socialMediaId: number) => void
}

function SocialMediaChoice({ socialMedia, onToggleSelected }: Props) {
    const styles = useSocialMediaChoiceStyles();

    return (
        <View
            style={styles.parentView} testID={TestIds.SOCIAL_MEDIA_CHOICE_PARENT_VIEW}>
            <CheckBox
                center
                checked={socialMedia.selected}
                title={socialMedia.name}
                onPress={() => onToggleSelected(socialMedia.id)}
                checkedColor={Colors.checked}
                uncheckedColor={Colors.unchecked}
                containerStyle={styles.checkBoxContainer}
                textStyle={styles.checkBoxText}
                testID={TestIds.SOCIAL_MEDIA_CHECK_BOX}
            />
        </View>
    );
}

const useSocialMediaChoiceStyles = makeStyles(() => ({
    parentView: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    checkBoxContainer: {
        backgroundColor: Colors.darkGrey,
        marginBottom: 10
    },
    checkBoxText: {
        color: Colors.lightText
    }
}));

export default SocialMediaChoice;
