import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Tab1 from './tab1';
import { Avatar, Button, Card, Text, SegmentedButtons} from 'react-native-paper';
import { useFonts } from 'expo-font'; 
import Layout from './_layout'

const FirstRoute = () => (
    <Tab1 />
  )
const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const FifthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const SixthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const SeventhRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
  sixth: SixthRoute,
  seventh: SeventhRoute,
});

// const TabBarLabel = ({ route, focused }) => {
//   return (
//     <Text style={{ fontFamily: 'DMBold', fontSize: 16  }}>
//       {route.title}
//     </Text>
//   );
// };



const Tabs = ({ route, focused }) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'About Us' },
    { key: 'second', title: 'Events' },
    { key: 'third', title: 'Ignite the Light' },
    { key: 'fourth', title: 'Trips' },
    { key: 'fifth', title: 'Chevra House' },
    { key: 'sixth', title: 'Donate' },
    { key: 'seventh', title: 'Contact Us' },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#333' }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: focused ? 'white' : 'gray', fontFamily: 'DMBold', fontSize: 16 }}>
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <View>
      <Layout />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={renderTabBar}
        />
    </View>
   
  );
}

export default Tabs; 

