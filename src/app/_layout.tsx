import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';

import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    900: require('../assets/fonts/Inter-Black.ttf'),
    800: require('../assets/fonts/Inter-ExtraBold.ttf'),
    700: require('../assets/fonts/Inter-Bold.ttf'),
    600: require('../assets/fonts/Inter-SemiBold.ttf'),
    500: require('../assets/fonts/Inter-Medium.ttf'),
    400: require('../assets/fonts/Inter-Regular.ttf'),
    300: require('../assets/fonts/Inter-Light.ttf'),
    200: require('../assets/fonts/Inter-ExtraLight.ttf'),
    100: require('../assets/fonts/Inter-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
  );
}
