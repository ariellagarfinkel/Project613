// import * as React from 'react';
// import { Appbar } from 'react-native-paper';

// const TopBar = () => (
//   <Appbar.Header>
//     <Appbar.BackAction onPress={() => {}} />
//     <Appbar.Content title="Title" />
//     <Appbar.Action icon="calendar" onPress={() => {}} />
//     <Appbar.Action icon="magnify" onPress={() => {}} />
//   </Appbar.Header>
// );

// export default TopBar;


// import * as React from 'react';
import { Appbar } from 'react-native-paper';

const TopBar = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default TopBar;