import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import type { ApplicationStackParamList } from '@/types/navigation';
import { CarCheckCreate, CarCheckUpdate } from '@/screens/CarCheck';
import TabNavigator from './TabNavigator';

const RootStack = createStackNavigator<ApplicationStackParamList>();

export default function ApplicationNavigator() {
	return (
		<NavigationContainer>
			<RootStack.Navigator
				screenOptions={{
					cardStyle: { backgroundColor: 'transparent' },
					headerShown: false,
				}}
			>
				<RootStack.Screen name="TabNavigator" component={TabNavigator} />
				<RootStack.Group>
					<RootStack.Screen name="CarCheckCreate" component={CarCheckCreate} />
					<RootStack.Screen name="CarCheckUpdate" component={CarCheckUpdate} />
				</RootStack.Group>
			</RootStack.Navigator>
		</NavigationContainer>
	);
}
