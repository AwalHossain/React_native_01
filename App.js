import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { SafeAreaView } from 'react-native-web';

export default function App() {
  return (
   <>
  
    <View style={{backgroundColor:"green", height: 60, padding:20, marginTop:10}}>
      <Text>Kmai There</Text> 
      <Text>Kmai There</Text> 
    </View>
    <View style={{backgroundColor:"blue", height: 60}}>
    
    <Text>Come on man</Text>
    </View>


</>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
