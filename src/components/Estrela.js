import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrela({
  onPress,
  disabled = true,
  preenchida,
  grande = false,
}) {
  const styles = stylesFunction(grande);

  const getImage = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Image source={getImage()} style={styles.estrela} />
    </TouchableOpacity>
  );
}

const stylesFunction = (grande) =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
    },
  });
