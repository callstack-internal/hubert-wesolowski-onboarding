import { Button as RNPButton } from 'react-native-paper';

export const Button = () => {
  const handlePressButton = () => {
    console.info('Press test button');
  };
  return <RNPButton onPress={handlePressButton}>Test Button</RNPButton>;
};
