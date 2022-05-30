import { StyleSheet } from 'react-native';
import { theme } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
      alignItems: 'center', 
      paddingHorizontal: 24
  },
  header: {
      flexDirection: 'row',
      marginBottom: 8
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 24
  },
  image: {
      width: 24,
      height: 24,
      marginRight: 8 
  },
  title: {
      fontSize: 20, 
      fontFamily: theme.fonts.medium,
      color: theme.colors.text_primary      
  },
  textInput: {
    height: 112,

    padding: 12,
    marginBottom: 8,

    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.stroke,

    textAlignVertical: 'top',
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular
        
  },
  action: {            
      flexDirection: 'row',
      alignItems: 'center',
    
      marginBottom: 16
  },
  submitButton: {
      flex: 1,
      width: '100%',
      
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.brand,
      color: theme.colors.text_on_brand_color,      
      
      borderRadius: 4,
      
      paddingVertical: 8,
      paddingHorizontal: 24,
  }
});