import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { InputField } from './components/InputField';
import { PrimaryButton } from './components/PrimaryButton';
import { OutlineButton } from './components/OutlineButton';
import { Card } from './components/Card';
import { Toggle } from './components/Toggle';
import { Checkbox } from './components/Checkbox';
import { COLORS } from './constants/colors';
import { SIZES } from './constants/sizes';
import { TYPOGRAPHY } from './constants/typography';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reminder, setReminder] = useState(true);
  const [symptoms, setSymptoms] = useState({
    pain: false,
    headache: false,
    bloating: false,
    breast: false,
    mood: false,
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>CycleTrack Components</Text>

      <Card>
        <Text style={styles.cardTitle}>📝 InputField</Text>
        <InputField placeholder="Email" value={email} onChangeText={setEmail} />
        <InputField placeholder="Пароль" value={password} onChangeText={setPassword} secureTextEntry />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>🔘 Buttons</Text>
        <PrimaryButton title="Увійти" onPress={() => console.log('Login')} />
        <OutlineButton title="Зареєструватися" onPress={() => console.log('Register')} />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>🔄 Toggle</Text>
        <View style={styles.toggleRow}>
          <Text>Нагадування</Text>
          <Toggle value={reminder} onValueChange={setReminder} />
        </View>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>✅ Симптоми</Text>
        <Checkbox
          label="Біль унизу живота"
          checked={symptoms.pain}
          onPress={() => setSymptoms({ ...symptoms, pain: !symptoms.pain })}
        />
        <Checkbox
          label="Головний біль"
          checked={symptoms.headache}
          onPress={() => setSymptoms({ ...symptoms, headache: !symptoms.headache })}
        />
        <Checkbox
          label="Здуття"
          checked={symptoms.bloating}
          onPress={() => setSymptoms({ ...symptoms, bloating: !symptoms.bloating })}
        />
        <Checkbox
          label="Нагрубання грудей"
          checked={symptoms.breast}
          onPress={() => setSymptoms({ ...symptoms, breast: !symptoms.breast })}
        />
        <Checkbox
          label="Перепади настрою"
          checked={symptoms.mood}
          onPress={() => setSymptoms({ ...symptoms, mood: !symptoms.mood })}
        />
      </Card>

      <Card variant="pink">
        <Text style={styles.cardTitle}>🌸 Картка (рожевий фон)</Text>
        <Text>День циклу: <Text style={styles.cycleDay}>14</Text></Text>
        <Text>Висока ймовірність овуляції</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  title: {
    fontSize: TYPOGRAPHY.title,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: TYPOGRAPHY.cardTitle,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cycleDay: {
    fontSize: TYPOGRAPHY.cycleDay,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});