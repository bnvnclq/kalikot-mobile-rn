import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import { CommonActions, useNavigation } from '@react-navigation/native';

interface BottomNavProps {
	state: any; // Replace with your specific type for navigation state
	descriptors: any; // Replace with your specific type for descriptors
	insets: any; // Replace with your specific type for insets
}

const BottomNav: React.FC<BottomNavProps> = ({
	state,
	descriptors,
	insets,
}) => {
	const navigation = useNavigation();

	return (
		<BottomNavigation.Bar
			navigationState={state}
			safeAreaInsets={insets}
			onTabPress={({ route, preventDefault }) => {
				const event = navigation.emit({
					type: 'tabPress',
					target: route.key,
					canPreventDefault: true,
				});

				if (event.defaultPrevented) {
					preventDefault();
				} else {
					navigation.dispatch({
						...CommonActions.navigate(route.name, route.params),
						target: state.key,
					});
				}
			}}
			renderIcon={({ route, focused, color }) => {
				const { options } = descriptors[route.key];
				if (options.tabBarIcon) {
					return options.tabBarIcon({ focused, color, size: 24 });
				}

				return null;
			}}
			getLabelText={({ route }) => {
				const { options } = descriptors[route.key];
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
							? options.title
							: route.title;

				return label;
			}}
		/>
	);
};

export default BottomNav;
