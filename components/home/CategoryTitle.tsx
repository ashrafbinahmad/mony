import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../Themed';

const CategoryTitle = ({title="Title", rightComponent=<Text>200</Text>}) => {
    return (
        <View style={styles.row}>
            <Text style={{fontWeight: 'bold'}}>{title}</Text>
            <Text>{rightComponent}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    }
})

export default CategoryTitle;
