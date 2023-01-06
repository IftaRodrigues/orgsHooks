import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Estrelas from '../../../components/Estrelas';
import {useReducer, useState} from 'react';

export default function Produtor({nome, imagem, distancia, estrelas}) {
  const [selecionado, inverterSelecionado] = useReducer(
    selecionado => !selecionado,
    false,
  );

  return (
    <TouchableOpacity style={styles.cartao} onPress={inverterSelecionado}>
      <Image source={imagem} accessibilityLabel={nome} style={styles.imagem} />
      <View style={styles.informacoes}>
        <View>
          <Text style={styles.nome}>{nome}</Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={styles.distancia}>{distancia}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: '#F6F6F6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    //Android
    elevation: 4,
    //IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  informacoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#464646',
  },
  distancia: {
    fontSize: 12,
    lineHeight: 19,
    color: '#464646',
  },
});
