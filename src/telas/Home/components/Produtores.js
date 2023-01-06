import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';

function Produtores({topo: Topo}) {
  const [titulo, lista] = useProdutores();

  const TopoLista = () => (
    <>
      <Topo />
      <Text style={styles.titulo}>{titulo}</Text>
    </>
  );
  return (
    <FlatList
      data={lista}
      renderItem={({item}) => (
        <Produtor
          nome={item.nome}
          imagem={item.imagem}
          distancia={item.distancia}
          estrelas={item.estrelas}
        />
      )}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
    />
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});

export default Produtores;
