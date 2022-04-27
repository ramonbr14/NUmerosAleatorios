import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';


const App = () => {
  
  const [numero, setNumero] = useState(1000)

  function handleNumero(){
    const novonumero =  Math.floor(Math.random() * 1000)
    setNumero(numero + novonumero)
  }

return(
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
          <Text>GERAR NUMERO DE ATHORALAN </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#00FF7F',
    flex: 1,
    justifyContent: "center",
    alignItens: 'center'
  },
  numero: {
    FontSize: 25,
    fontWeight: 'bold',
    color: '#00008b',
  },
  botao:{
    backgroundColor: '#ffe811',
    width: '50%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }
});

export default App;