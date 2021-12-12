import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Theme from '../constants/Theme';
import Icon from './Icon';
const BottomTabComponent = ({state, descriptors, navigation}) => {
  const getTabBarIcon = (index, focused) => {
    let iconName = 'basket';
    let iconSize = focused ? Theme.sizes.width(5.5) : Theme.sizes.width(5);
    let tintColor = focused ? Theme.colors.active : Theme.colors.gray;
    switch (index) {
      case 0: {
        iconName = 'library';
        return (
          <Icon.Ionicons
            name={iconName}
            size={iconSize}
            color={tintColor}
            outline
          />
        );
      }
      case 1: {
        iconName = 'dumbbell';
        return (
          <Icon.MaterialCommunityIcons
            name={iconName}
            size={iconSize}
            color={tintColor}
            outline
          />
        );
      }
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 58,
        width: Theme.sizes.device_width,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View
            key={index}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Theme.colors.white,
              borderColor: Theme.colors.border,
              borderTopWidth: 0.5,
            }}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {/* {getTabBarIcon(index, isFocused)} */}
              <Text
                numberOfLines={1}
                style={{
                  color: isFocused ? Theme.colors.active : Theme.colors.gray,
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default BottomTabComponent;
