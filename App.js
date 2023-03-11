import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useCallback, useState } from 'react';
import { IdnowManager } from '@tokenstreet/react-native-idnow-videoident';

export default function App() {
  const [transactionToken, setTransactionToken] = useState('YOUR_TRANSACTION_TOKEN');
  const [videoIdentResponse, setVideoIdentResponse] = useState('');
  const startVideoIdent = useCallback(() => {
    setVideoIdentResponse('');
    IdnowManager.startVideoIdent({transactionToken})
        .then((fulfilled) => setVideoIdentResponse(`Resolved:\n${JSON.stringify(fulfilled)}`))
        .catch((rejected) => setVideoIdentResponse(`Rejected:\n${JSON.stringify(rejected)}`));
  }, [transactionToken]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput onChangeText={setTransactionToken} placeholder="Transaction token" value={transactionToken} />
      <Button onPress={startVideoIdent} title="Start video ident" />
      <Text>{videoIdentResponse}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
