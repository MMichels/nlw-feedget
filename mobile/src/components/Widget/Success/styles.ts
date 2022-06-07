import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  successImg: {
    width: 36,
    height: 36,
    marginTop: 42,
    marginBottom: 10,
  },
  title: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 24
  },
  button: {
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginBottom: 56
  },
  buttonText: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    lineHeight: 24,
    color: theme.colors.text_primary
  }
});