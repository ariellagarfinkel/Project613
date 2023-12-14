import SafeAreaView from 'react-native-safe-area-view';
import { View, Text, ScrollView, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { useTheme } from 'react-native-paper';
import images from '../assets/images';
import TopBar from './topbar';
import BottomBar from './bottombar';
import Tabs from './tabs';

export default function Home() {
    const theme = useTheme()
  return (
    <View style={{ flex: 1 }}>
      <TopBar />
      <Tabs />
      <View style={{ flex: 1, backgroundColor: theme.colors.tertiary }}>
        <Text>
          Look, I'm safe! Not under a status bar or notch or home indicator or
          anything! Very cool
        </Text>
        <Image source={images.challah} style={{ width: 200, height: 200 }}/>
        <Image source={images.magendavid} style={{ width: 200, height: 200 }}/>
        <Image source={images.kotel} style={{ width: 200, height: 200 }}/>
      </View>
      <BottomBar />
    </View>
  );
}
