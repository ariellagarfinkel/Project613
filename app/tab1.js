import * as React from 'react';
import { ScrollView, View, Alert, FlatList } from 'react-native';
import { Avatar, Card, Button, Dialog, Portal, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Tab1 = () => {
    // const handleWhoWeArePress = () => {
    //     console.log("Who We Are");
    //     Alert.alert("Who We Are");
    // };
    const [visible, setVisible] = React.useState(false);
    const hideDialog = () => (setVisible(false));
return (
    <Portal>
        <Button onPress={() => setVisible(true)} mode="outlined">
            Show Dialog
        </Button>

      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.ScrollArea>
          <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
            <Text>History</Text>
          </ScrollView>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
         
  
  );
// return (
//     <ScrollView>
        
//         <Card>
//         <Card.Actions  style={{ justifyContent: 'center', alignItems: 'center' }}>
//             <Button onPress={() => console.log('Pressed')}mode= "outlined">
//                 Who We Are
//             </Button>
//             <Button onPress={() => console.log('Pressed')} mode= "outlined">
//                 What We Do
//             </Button>
//             <Button onPress={() => console.log('Pressed')} mode= "outlined">
//                 Our History
//             </Button>
//             <Button onPress={() => console.log('Pressed')} mode= "outlined">
//                 Staff Bios
//             </Button>
//             <Button onPress={() => console.log('Pressed')} mode= "outlined">
//                 Affiliate Partners
//             </Button>
//          </Card.Actions>
//          </Card>
         
//     </ScrollView>
//   );
};
  
  export default Tab1;


