import { View } from 'react-native';
import { ActivityIndicator } from '~/components/nativewindui/ActivityIndicator';
import { Text } from '~/components/nativewindui/Text';

export default function ActivityIndicatorDemo() {
  return (
    <View className="flex-1 items-center justify-center gap-8 p-4">
      <View className="items-center gap-4">
        <Text variant="title2" className="text-center">
          Activity Indicator Demo
        </Text>

        <View className="items-center gap-6">
          <View className="items-center gap-2">
            <Text variant="subhead" className="text-center">
              Default Size
            </Text>
            <ActivityIndicator />
          </View>

          <View className="items-center gap-2">
            <Text variant="subhead" className="text-center">
              Large Size
            </Text>
            <ActivityIndicator size="large" />
          </View>

          <View className="items-center gap-2">
            <Text variant="subhead" className="text-center">
              Small Size
            </Text>
            <ActivityIndicator size="small" />
          </View>

          <View className="items-center gap-2">
            <Text variant="subhead" className="text-center">
              Custom Color
            </Text>
            <ActivityIndicator color="#FF6B6B" />
          </View>
        </View>
      </View>
    </View>
  );
}
