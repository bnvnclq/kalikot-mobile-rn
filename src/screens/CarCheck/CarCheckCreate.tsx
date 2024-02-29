import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Text, TextInput } from 'react-native-paper';
import { TabNavigatorProps } from '@/types/navigation';

import { CarCheck } from '@/models';
import { useKStore } from '@/stores/KStore';
import { useState } from 'react';

const buttonStyle = StyleSheet.create({
	flexDirection: 'row',
	flex: 1,
});
export default function CarCheckCreate({ navigation }: TabNavigatorProps) {
	const {
		colors,
		variant,
		changeTheme,
		layout,
		gutters,
		fonts,
		components,
		backgrounds,
	} = useTheme();

	const createCarCheckList = useKStore(state => state.createCarCheckList);
	const addCarChecklist = useKStore(state => state.addCheckList);
	const [objCarCheck, setObjCarCheck] = useState<CarCheck>(
		createCarCheckList(),
	);

	return (
		<SafeScreen>
			<ScrollView>
				<View
					style={{
						alignItems: 'center',
					}}
				>
					<Text variant="titleLarge">New Car Checklist</Text>
				</View>

				<TextInput
					label="Notes"
					value={objCarCheck.title}
					onChangeText={value => {
						setObjCarCheck({
							...objCarCheck,
							title: value,
						});
					}}
				/>
				<Text variant="bodySmall">ID: {objCarCheck.uuid}</Text>
				<View style={buttonStyle}>
					<Button
						style={{ flex: 1 }}
						onPress={() => {
							navigation.goBack();
						}}
					>
						Cancel
					</Button>
					<Button
						style={{ flex: 1 }}
						onPress={() => {
							addCarChecklist(objCarCheck);
							navigation.goBack();
						}}
					>
						Create
					</Button>
				</View>
			</ScrollView>
		</SafeScreen>
	);
}
