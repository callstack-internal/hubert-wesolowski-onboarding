import { View } from 'react-native';

import { TemperatureUnitsToolbar } from '../../components';
import { useAppTheme } from '../../theme';
import { SettingsSection } from './partials';
import { getStyles } from './settings.styles';

export const SettingsView = () => {
  const theme = useAppTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <SettingsSection title="Select units">
        <TemperatureUnitsToolbar />
      </SettingsSection>
    </View>
  );
};
