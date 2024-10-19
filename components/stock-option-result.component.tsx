
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, makeStyles } from '@rneui/themed';
import EmptyState from "./empty-state.component";

interface Props {
    stockOption: string
}

function StockOptionResult({ stockOption }: Props) {
    const styles = useStockOptionResultStyles();

    const [infoIsShown, setInfoIsShown] = useState<boolean>(false);

    if (!stockOption) {
        return <EmptyState />
    }

    return (
        <View style={styles.parentView}>
            <Text style={styles.textSection}>
                <Text>Stock name: </Text>
                <Text style={styles.stockOption}>
                    {stockOption || "..."}
                </Text>
            </Text >

            <Button
                title={infoIsShown ? "Hide information" : "Show information"}
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
                containerStyle={styles.buttonContainer}
                onPress={() => setInfoIsShown(!infoIsShown)}
            />
        </View>

    );
}


const useStockOptionResultStyles = makeStyles(() => ({
    parentView: {
        margin: 10,
        alignItems: 'center'
    },
    textSection: {
        fontSize: 20,
        color: '#1a191c',
    },
    stockOption: {
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'rgba(90, 154, 230, 1)',
        borderRadius: 30,
        marginTop: 10
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonContainer: {
        width: 160,
    }
}));

export default StockOptionResult;
