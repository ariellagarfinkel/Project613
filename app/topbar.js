import { Appbar, Colors } from 'react-native-paper';

const TopBar = () => {
  // const _goBack = () => console.log('Went back');

  // const _handleSearch = () => console.log('Searching');

  // const _handleMore = () => console.log('Shown more');
  const lighterBlueColor = Colors.blue300;
  return (
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content 
        title="Project613"
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: `${lighterBlueColor}99`
          }} />
      {/* <Appbar.Action icon="magnify" onPress={_handleSearch} /> */}
      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
    </Appbar.Header>
  );
};

export default TopBar;