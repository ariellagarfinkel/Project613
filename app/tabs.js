import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Tab1 from './tab1'
import { Avatar, Button, Card, Text } from 'react-native-paper';


const FirstRoute = () => (
  <View>
  <Card>
  <Card.Actions>
    <Button>Who We Are</Button>
    <Button>Our History</Button>
    <Button>Staff Bios</Button>
    <Button>Affiliate Partners</Button>
  </Card.Actions>
</Card>
</View>
);

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

export default function Tabs() {
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

  return (
    <View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      {/* <View>
        <Tab1 />
      </View> */}
    </View>
   
  );
}

