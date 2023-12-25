import * as React from 'react';
import { Avatar, Card, Text, Button } from 'react-native-paper';
import { ScrollView, View, FlatList } from 'react-native';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Tab1 = () => (
    <ScrollView>
        <View>
        <Card>
        <Card.Actions  style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={() => console.log('Pressed')} mode= "outlined">
                Who We Are
            </Button>
            <Button onPress={() => console.log('Pressed')} mode= "outlined">
                What We Do
            </Button>
            <Button onPress={() => console.log('Pressed')} mode= "outlined">
                Our History
            </Button>
            <Button onPress={() => console.log('Pressed')} mode= "outlined">
                Staff Bios
            </Button>
            <Button onPress={() => console.log('Pressed')} mode= "outlined">
                Affiliate Partners
            </Button>
         </Card.Actions>
         </Card>
         </View>
    </ScrollView>
  );
  
  export default Tab1;


