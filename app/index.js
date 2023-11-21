import SafeAreaView from 'react-native-safe-area-view';
import { View, Text, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>
          Look, I'm safe! Not under a status bar or notch or home indicator or
          anything! Very cool
        </Text>
        <Image source={images.challah}/>
      </View>
    </SafeAreaView>
  );
}

