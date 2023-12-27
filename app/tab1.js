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
        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
        <Card>
        <Card.Actions style={{ alignItems: 'center'}}>
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
        {/* </View> */}
         <Portal>
          <Dialog visible={visibleWhoWeAre} onDismiss={hideDialog}>
             <Dialog.ScrollArea>
             <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
             <Dialog.Title>Who We Are</Dialog.Title>
             <Text>You work hard, but you want more out of life than work alone can offer. You want to connect with high-quality people in a warm & welcoming environment. You feel Jewish and would be open to exploring the relevance of Jewish values on your life today. And of course, you want to have some fun! Welcome to Project 613! Through creative social, educational, and travel programs, Project 613 connects you to other Jews while providing timeless wisdom for you life. Led by Rabbi Shalom & Suri Garfinkel, Rabbi Marcus and Rebbetzin Shoshana Marcus, and Program Coordinator Kirya Fefer, and an active leadership committee, Project 613 is ready to welcome you to the family!</Text>
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
             <Dialog.Title>Our History</Dialog.Title>
             <Text>Founded by Rabbi Shalom & Suri Garfinkel on July 1st, 2017, Project 613 is the newest thing to hit the Jewish scene in downtown Chicago! The Garfinkels had run the very popular JET YP program since 2010 and now bring you Project 613 with a laser focus on providing the social, educational, and spiritual needs of Jewish Young Professionals in downtown Chicago. We look forward to writing the next chapters of this story with YOU and YOUR involvement!</Text>
             </ScrollView>
             </Dialog.ScrollArea>
          </Dialog>
          <Dialog visible={visibleStaffBios} onDismiss={hideDialog}>
             <Dialog.ScrollArea>
             <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
             <Dialog.Title>Staff Bios</Dialog.Title>
             <Text>Rabbi Shalom Garfinkel</Text>
             <Text>Suri Garfinkel</Text>
             <Text>Rabbi Mordechai and Shoshana Marcus</Text>
             <Text>Kirya Fefer</Text>
             </ScrollView>
             </Dialog.ScrollArea>
          </Dialog>
          <Dialog visible={visibleAffiliatePartners} onDismiss={hideDialog}>
             <Dialog.ScrollArea>
             <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
             <Dialog.Title>Affiliate Partners</Dialog.Title>
             <Text>Affiliate Partners</Text>
             <Dialog.Icon icon="alert" />
             </ScrollView>
             </Dialog.ScrollArea>
          </Dialog>
        </Portal>
       </ScrollView>
  );
};
  
  export default Tab1;

















