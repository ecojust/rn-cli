import React, { useEffect, useRef } from "react";
import { ImageBackground, Animated, StyleSheet } from "react-native";

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  source: any;
  duration?: number;
}

export default function AnimatedBackground({
  children,
  source,
  duration = 800,
}: AnimatedBackgroundProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const d = 0;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: d,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, d]);

  return (
    <ImageBackground
      source={source}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <Animated.View
        style={[
          styles.container,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        {children}
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
