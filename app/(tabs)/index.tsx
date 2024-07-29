import AccountCardList from '@/components/common/AccountCardList';
import CategoryTitle from '@/components/home/CategoryTitle';
import IncomeText from '@/components/home/IncomeText';
import { Text } from '@/components/Themed';
import { colors } from '@/constants/Colors';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <CategoryTitle title='Accounts' rightComponent={<IncomeText text='500' />} />
      <AccountCardList />
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.bg,
  }
})

export default Index;
