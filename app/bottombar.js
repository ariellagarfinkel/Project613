// import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const BottomBar = () => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <View>
    <Appbar
      style={[
        styles.bottom,
        {
          height: BOTTOM_APPBAR_HEIGHT + bottom,
          backgroundColor: theme.colors.elevation.level2,
        },
      ]}
      safeAreaInsets={{ bottom }}
    >
      <Appbar.Action icon="archive" onPress={() => {}} />
      <Appbar.Action icon="email" onPress={() => {}} />
      <Appbar.Action icon="label" onPress={() => {}} />
      <Appbar.Action icon="delete" onPress={() => {}} />
      <FAB
        mode="flat"
        size="medium"
        icon="plus"
        onPress={() => {}}
        style={[
          styles.fab,
          { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
        ]}
      />
    </Appbar>
  </View>
  );
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 14,
  },
});

export default BottomBar;


// import { StyleSheet, View, ScrollView, Text} from 'react-native';
// import { Appbar, FAB, useTheme } from 'react-native-paper';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// const BOTTOM_APPBAR_HEIGHT = 80;
// const MEDIUM_FAB_HEIGHT = 56;

// const BottomBar = () => {
//   const { bottom } = useSafeAreaInsets();
//   const theme = useTheme();

//   return (
//     <View style={{ flex: 1 }}>
//       <ScrollView
//         contentContainerStyle={{ flexGrow: 1 }}
//         style={{ marginBottom: BOTTOM_APPBAR_HEIGHT + bottom }}
//       >
//         {/* Your scrollable content goes here */}
//         <View style={{ padding: 16 }}>
//           <Text>Your content goes here...</Text>
//         </View>
//       </ScrollView>

//       <Appbar
//         style={[
//           styles.bottom,
//           {
//             height: BOTTOM_APPBAR_HEIGHT + bottom,
//             backgroundColor: theme.colors.elevation.level2,
//           },
//         ]}
//       >
//         <Appbar.Action icon="archive" onPress={() => {}} />
//         <Appbar.Action icon="email" onPress={() => {}} />
//         <Appbar.Action icon="label" onPress={() => {}} />
//         <Appbar.Action icon="delete" onPress={() => {}} />
//         <FAB
//           mode="flat"
//           size="medium"
//           icon="plus"
//           onPress={() => {}}
//           style={[
//             styles.fab,
//             { bottom: bottom + 8 }, // Adjust the bottom position if needed
//           ]}
//         />
//       </Appbar>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   bottom: {
//     backgroundColor: 'aquamarine',
//     borderTopWidth: 1, // Add a border if needed
//     borderTopColor: 'gray',
//   },
//   fab: {
//     position: 'absolute',
//     right: 16,
//   },
// });

// export default BottomBar;
