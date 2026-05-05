import React from 'react';
import { View, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { COLORS } from '../constants/colors';
import { SIZES } from '../constants/sizes';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'pink';
}

export const Card: React.FC<CardProps> = ({ children, variant = 'default' }) => {
  const { width } = useWindowDimensions();
  const cardWidth = width - 32;

  return (
    <View style={[styles.card, { width: cardWidth }, variant === 'pink' && styles.pinkCard]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: SIZES.borderRadiusLarge,
    marginBottom: 12,
    alignSelf: 'center',
    shadowColor: COLORS.black,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  pinkCard: {
    backgroundColor: COLORS.primaryLight,
    borderWidth: 0,
  },
});