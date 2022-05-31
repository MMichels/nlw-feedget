import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Copyright } from '../Copyright';

import { styles } from './styles';

const successSource = require('../../../assets/success.png');

interface SuccessProps {
  onEnviarOutro: () => void;
}

export function Success({onEnviarOutro}: SuccessProps) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.successImg}
        source={successSource}
      />
      <Text style={styles.title}>
        Agradecemos o feedback!
      </Text>
      <TouchableOpacity style={styles.button} onPress={onEnviarOutro}>
        <Text style={styles.buttonText}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>
      
      <Copyright />
    </View>
  );
}