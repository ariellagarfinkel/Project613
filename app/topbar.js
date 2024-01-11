import { Appbar, Image } from 'react-native-paper';
// import Image from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import images from '../assets/images';

// const TopBar = () => {
//   return (
//     <Appbar.Header>
//       <Appbar.Content 
//         title="Project613"
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'center',
//           backgroundColor: 'blue',
//           }} />
//     </Appbar.Header>
//   );
// };
const TopBar = () => {
  return (
    <Appbar.Header>
      <Appbar.Content>
      <Image 
      source={images.magendavid} 
      style={{ width: 200, height: 200 }}
      />
      </Appbar.Content>
    </Appbar.Header>
  );
};


  // Broken Header with Logo
//   return (
//     <Appbar.Header>
//       <Appbar.Content>
//         <Image 
//           source={images.p613_logo} 
//           style={{ width: 200, height: 200 }}
//         />
//       </Appbar.Content>
//     </Appbar.Header>
//   );
// };

export default TopBar;