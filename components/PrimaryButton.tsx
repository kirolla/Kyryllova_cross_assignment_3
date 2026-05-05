import React from 'react';
import { TouchableOpacity, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { COLORS } from '../constants/colors';
import { SIZES } from '../constants/sizes';
import { TYPOGRAPHY } from '../constants/typography';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onPress, disabled = false }) => {
  const { width } = useWindowDimensions();
  const buttonWidth = Math.min(width * 0.85, 320);

  return (
    <TouchableOpacity
      style={[styles.button, { width: buttonWidth }, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: SIZES.buttonHeight,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  disabled: { backgroundColor: COLORS.textLight, shadowOpacity: 0 },
  text: { color: COLORS.white, fontSize: TYPOGRAPHY.button, fontWeight: 'bold' },
});