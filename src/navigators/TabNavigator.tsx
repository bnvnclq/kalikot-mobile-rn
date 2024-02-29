import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { KList, About } from '@/screens';

import type { TabNavigatorParamList } from '@/types/navigation';
// import { useTheme } from '@/theme';
import { CommonActions } from '@react-navigation/native';
import { BottomNavigation, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

function renderBottomTab(props: any) {
	const { navigation, state, descriptors, insets } = props;
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
}
function TabNavigator() {
	// const { variant, colors } = useTheme();
	const { colors } = useTheme();

	return (
		<Tab.Navigator
			// key={variant}
			screenOptions={{
				headerShown: false,
				// tabBarActiveBackgroundColor: colors.primaryContainer,
				// tabBarInactiveBackgroundColor: colors.background,
				// // tabBarInactiveTintColor:,
				// tabBarActiveTintColor: colors.primary,
				// tabBarStyle: {
				// 	borderTopWidth: 0,
				// },
			}}
			tabBar={renderBottomTab}
		>
			<Tab.Screen
				name="KList"
				component={KList}
				options={{
					title: 'List',
					tabBarIcon: props => <Icon {...props} name="home" />,
				}}
			/>
			<Tab.Screen
				name="About"
				component={About}
				options={{
					title: 'About',
					tabBarIcon: props => <Icon {...props} name="information-variant" />,
				}}
			/>
		</Tab.Navigator>
	);
}

export default TabNavigator;
