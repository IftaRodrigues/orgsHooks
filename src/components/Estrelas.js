import {Image, StyleSheet, Text, View} from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = true,
}) {
  const styles = stylesFunction(grande);

  return (
    <View style={styles.estrelas}>
      <Image source={estrela} style={styles.estrela} />
      <Image source={estrela} style={styles.estrela} />
    </View>
  );
}

const stylesFunction = ({grande}) =>
  StyleSheet.create({
    estrelas: {
      flexDirection: 'row',
      marginRight: 2,
    },
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
    },
  });