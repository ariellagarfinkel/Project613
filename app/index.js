// import SafeAreaView from 'react-native-safe-area-view';
// import { View, Text, ScrollView, Image } from 'react-native';
// import { Stack, useRouter } from 'expo-router';
// import images from '../assets/images';
// // import carousel from 'carousel';
// // import "bootstrap";
// // import "bootstrap/dist/css/bootstrap.min.css";


// export default function Home() {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1 }}>
//         <Text>
//           Look, I'm safe! Not under a status bar or notch or home indicator or
//           anything! Very cool
//         </Text>
//         <Image source={images.challah} style={{ width: 200, height: 200 }}/>
//         <Image source={images.magendavid} style={{ width: 200, height: 200 }}/>
//         <Image source={images.kotel} style={{ width: 200, height: 200 }}/>
//       </View>
//       {/* <View> */}
//         {/* <Carousel /> */}
//       {/* </View> */}
//     </SafeAreaView>
//   );
// }


// import { GluestackUIProvider, Text } from '@gluestack-ui/themed';
// import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

// export default function Home() {
//   return (
//     <GluestackUIProvider config={config}>
//       <Text>Hello World!</Text>
//     </GluestackUIProvider>
//   );
// }

import { GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import SafeAreaView from 'react-native-safe-area-view';
import { View, ScrollView, Image } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import images from '../assets/images';

export default function Home() {
  return (
    <GluestackUIProvider config={config}>
     <SafeAreaView style={{ flex: 1 }}>
       <View style={{ flex: 1 }}>
         <Text>
           Look, I'm safe! Not under a status bar or notch or home indicator or
           anything! Very cool
         </Text>
         <Image source={images.challah} style={{ width: 200, height: 200 }}/>
         <Image source={images.magendavid} style={{ width: 200, height: 200 }}/>
         <Image source={images.kotel} style={{ width: 200, height: 200 }}/>
       </View>
     </SafeAreaView>
      <Text>Hello World!</Text>
    </GluestackUIProvider>
  );
}
