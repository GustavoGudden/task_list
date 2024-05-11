import { ReactNode } from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { SlideInDown, SlideOutDown, runOnJS, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

interface ISheetProps {
  open: () => void;
  closeSheet: () => void;
  body: ReactNode;
}

export const BottomSheet = ({ open, closeSheet, body }: ISheetProps) => {
  const offset = useSharedValue(0);

  const SHEET_HEIGHT = 220;
  const SHEET_OVER_DRAG = 20;

  function close() {
    offset.value = 0;
    open();
  }

  const pan = Gesture.Pan()
    .onChange((event) => {
      const ofsetDelta = event.changeY + offset.value;
      const clamp = Math.max(-SHEET_OVER_DRAG, ofsetDelta);

      offset.value = ofsetDelta > 0 ? ofsetDelta : withSpring(clamp);
    })
    .onFinalize(() => {
      if (offset.value < SHEET_HEIGHT / 3) {
        offset.value = withSpring(0);
      } else {
        offset.value = withTiming(SHEET_HEIGHT, {}, () => {
          runOnJS(close)();
        });
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return (
    <>
      <View className="flex-1 absolute top-0 left-0 w-full h-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <TouchableOpacity
          className="w-full h-full"
          onPress={() => {
            closeSheet();
          }}
        />
        <GestureDetector gesture={pan}>
          <Animated.View
            entering={SlideInDown.springify().damping(15)}
            exiting={SlideOutDown}
            className={`w-full absolute bottom-[-20] bg-white rounded-t-xl `}
            style={translateY}
          >
            {body}
          </Animated.View>
        </GestureDetector>
      </View>
    </>
  );
};
