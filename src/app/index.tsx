import { useFonts } from 'expo-font';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { View } from 'react-native';
const TIMEOUT = 1000 * 1;

export default function Splashart() {
  const onLayout = useCallback(() => {
    const timeout = setTimeout(() => {
      router.replace('/home');
    }, TIMEOUT);
    return timeout;
  }, []);

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
    <View onLayout={onLayout}>
      <StatusBar style="light" />
    </View>
  );
}
