import SafeAreaView from 'react-native-safe-area-view';
import { View, Text, ScrollView, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import images from '../assets/images'

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>
          Look, I'm safe! Not under a status bar or notch or home indicator or
          anything! Very cool
        </Text>
        <Image source={images.challah} style={{ width: 200, height: 200 }}/>
      </View>
    </SafeAreaView>
  );
}

