import { Appbar, Colors } from 'react-native-paper';
// import Image from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
// import images from '../assets/images';

const TopBar = () => {
  // const _goBack = () => console.log('Went back');

  // const _handleSearch = () => console.log('Searching');

  // const _handleMore = () => console.log('Shown more');
  // const lighterBlueColor = Colors.blue300;
  return (
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content 
        title="Project613"
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: 'blue',
          }} />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
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