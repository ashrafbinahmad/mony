import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from './Themed';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from './useColorScheme.web';
import { colors } from '@/constants/Colors';

const Header = () => {
    return (
        <View>
            <Text style={{textAlign: 'center'}}>Balance</Text>
            <Text style={styles.headerTitle}> <Ionicons name='logo-bitcoin' style={{fontSize: 24}} ></Ionicons> 3555</Text>
        </View>
    );
}

export const HeaderLeft = () => {
    return (
        <View style={{margin:3}}>
            <Ionicons name="menu" size={24} color={colors.text} />
        </View>
    );
}

export const HeaderRight = () => {
    const theme = useColorScheme();
    return (
        <View style={{margin:3}}>
            <Ionicons name="settings" size={24} color={colors.text} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    headerTitle: {
        color: colors.accentText,
        fontSize: 30,
        fontWeight: 'bold',
    },
})

export default Header;
