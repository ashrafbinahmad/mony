import { colors } from '@/constants/Colors';
import React, { ReactNode } from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';

const IconContainer = ({iconComponent}:{iconComponent: ReactNode}) => {
    return (
        <View style={styles.container}>
            {iconComponent}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: colors.iconBg,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export const iconStyle:TextStyle = {
    fontSize: 40,
}

export default IconContainer;
