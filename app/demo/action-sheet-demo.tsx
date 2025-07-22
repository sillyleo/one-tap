import { useActionSheet } from '@expo/react-native-action-sheet';
import { View } from 'react-native';
import { Button } from '~/components/nativewindui/Button';
import { Text } from '~/components/nativewindui/Text';

export default function ActionSheetDemo() {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ['Delete', 'Save', 'Cancel'];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      (selectedIndex) => {
        switch (selectedIndex) {
          case 1:
            // Save
            break;

          case destructiveButtonIndex:
            // Delete
            break;

          case cancelButtonIndex:
          // Canceled
        }
      }
    );
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Button onPress={onPress}>
        <Text>Press me</Text>
      </Button>
    </View>
  );
}
