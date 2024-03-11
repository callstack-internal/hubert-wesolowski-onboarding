import { View } from 'react-native';

import { TemperatureUnitsToolbar } from '../../components';
import { SettingsSection } from './partials/settings-section';
import { styles } from './settings.styles';

export const SettingsView = () => {
  return (
    <View style={styles.container}>
      <SettingsSection title="Select units">
        <TemperatureUnitsToolbar />
      </SettingsSection>
    </View>
  );
};
