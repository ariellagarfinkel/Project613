import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
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
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

