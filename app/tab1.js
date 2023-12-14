import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Tab1 = () => (
    <Card>
    <Card.Actions>
      <Button>Who We Are</Button>
      <Button>Our History</Button>
      <Button>Staff Bios</Button>
      <Button>Affiliate Partners</Button>
    </Card.Actions>
  </Card>
);


export default Tab1;

