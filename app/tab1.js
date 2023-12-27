import * as React from 'react';
import { ScrollView, View, Alert, FlatList } from 'react-native';
import { Avatar, Card, Button, Dialog, Portal, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Tab1 = () => {

    const [visibleWhoWeAre, setVisibleWhoWeAre] = React.useState(false);
    const [visibleWhatWeDo, setVisibleWhatWeDo] = React.useState(false);
    const [visibleOurHistory, setVisibleOurHistory] = React.useState(false);
    const [visibleStaffBios, setVisibleStaffBios] = React.useState(false);
    const [visibleAffiliatePartners, setVisibleAffiliatePartners] = React.useState(false);
    const hideDialog = () => {
        setVisibleWhoWeAre(false);
        setVisibleWhatWeDo(false);
        setVisibleOurHistory(false);
        setVisibleStaffBios(false);
        setVisibleAffiliatePartners(false);
    }
   

return (
    <ScrollView>
        <Card>
        <Card.Actions style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={() => { setVisibleWhoWeAre(true); console.log('Who We Are')}} mode= "outlined">
                Who We Are
            </Button>
            <Button onPress={() => { setVisibleWhatWeDo(true); console.log('What We Do')}} mode= "outlined">
                What We Do
            </Button>
            <Button onPress={() => { setVisibleOurHistory(true); console.log('Our History')}} mode= "outlined">
                Our History
            </Button>
            <Button onPress={() => { setVisibleStaffBios(true); console.log('Staff Bios')}} mode= "outlined">
                Staff Bios
            </Button>
            <Button onPress={() => { setVisibleAffiliatePartners(true); console.log('Affiliate Partners')}} mode= "outlined">
                Affiliate Partners
            </Button>
        </Card.Actions>
         </Card>
         <Portal>
          <Dialog visible={visibleWhoWeAre} onDismiss={hideDialog}>
             <Dialog.ScrollArea>
             <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
             <Text>Who We Are</Text>
             </ScrollView>
             </Dialog.ScrollArea>
          </Dialog>
          <Dialog visible={visibleWhatWeDo} onDismiss={hideDialog}>
             <Dialog.ScrollArea>
             <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
             <Text>What We Do</Text>
             </ScrollView>
             </Dialog.ScrollArea>
          </Dialog>
          <Dialog visible={visibleOurHistory} onDismiss={hideDialog}>
             <Dialog.ScrollArea>
             <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
             <Text>Our History</Text>
             </ScrollView>
             </Dialog.ScrollArea>
          </Dialog>
          <Dialog visible={visibleStaffBios} onDismiss={hideDialog}>
             <Dialog.ScrollArea>
             <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
             <Text>Staff Bios</Text>
             </ScrollView>
             </Dialog.ScrollArea>
          </Dialog>
          <Dialog visible={visibleAffiliatePartners} onDismiss={hideDialog}>
             <Dialog.ScrollArea>
             <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
             <Text>Affiliate Partners</Text>
             </ScrollView>
             </Dialog.ScrollArea>
          </Dialog>
        </Portal>
       </ScrollView>
  );
};
  
  export default Tab1;

















