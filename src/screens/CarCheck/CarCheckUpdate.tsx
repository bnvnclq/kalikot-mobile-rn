import { SafeScreen } from '@/components/template';
import { useTheme } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
	Button,
	Divider,
	List,
	RadioButton,
	Switch,
	Text,
	TextInput,
} from 'react-native-paper';
import { TabNavigatorProps } from '@/types/navigation';

import { CarCheck, HwStatus } from '@/models';
import { useKStore } from '@/stores/KStore';
import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { lightColors } from '@/theme/_config';

const buttonStyle = StyleSheet.create({
	flexDirection: 'row',
	flex: 1,
});

function renderHWStatusSelectItems(
	props: any,
	defaultValue: string,
	handleChange: void,
	hw: string,
) {
	const idSelections = [
		HwStatus.GOOD,
		HwStatus.FGOOD,
		HwStatus.FBAD,
		HwStatus.BAD,
	];
	const selections = ['Good', 'Fairly Good', 'Fairly Bad', 'Bad'];
	let ind = 0;
	idSelections.forEach((value, index) => {
		if (value === defaultValue) ind = index;
	});
	return (
		<SelectDropdown
			{...props}
			data={selections}
			defaultValue={defaultValue}
			defaultButtonText={selections[ind]}
			onSelect={(selectedItem, index) => {
				handleChange(hw, idSelections[index]);
			}}
			buttonTextAfterSelection={(selectedItem, index) => {
				return selections[index];
			}}
			rowTextForSelection={(item, index) => {
				return selections[index];
			}}
			buttonStyle={{
				backgroundColor: lightColors.colors.secondaryContainer,
			}}
		/>
	);
}

export default function CarCheckUpdate({
	route,
	navigation,
}: TabNavigatorProps) {
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
	const checklistId = route.params?.checklistId;

	const getCheckList = useKStore(state => state.getCheckList);
	const updateCheckList = useKStore(state => state.updateCheckList);
	const [objCarCheck, setObjCarCheck] = useState<CarCheck | undefined>(
		getCheckList(checklistId as string),
	);

	// const initialCarCheckTemplate: CarCheck = {
	// 	title: '',
	// 	uuid: uuidv4(),
	// 	battery: HwStatus.GOOD,
	// 	light_headlamp: HwStatus.GOOD,
	// 	light_signal: HwStatus.GOOD,
	// 	light_tail: HwStatus.GOOD,
	// 	light_rear: HwStatus.GOOD,
	// 	oil: HwStatus.GOOD,
	// 	water: HwStatus.GOOD,
	// 	brake: HwStatus.GOOD,
	// 	air: HwStatus.GOOD,
	// 	gas: HwStatus.GOOD,
	// 	engine: HwStatus.GOOD,
	// 	tires: HwStatus.GOOD,
	// 	bearing_fr: HwStatus.GOOD,
	// 	bearing_fl: HwStatus.GOOD,
	// 	bearing_rr: HwStatus.GOOD,
	// 	bearing_rl: HwStatus.GOOD,
	// 	created_at: new Date(),
	// 	updated_at: new Date(),
	// };

	const handleSelectChange = (property_name, value: any) => {
		const objCopy = objCarCheck;
		objCopy[property_name] = value;
		setObjCarCheck(objCopy);
		console.log(objCopy);
	};

	return (
		<SafeScreen>
			<ScrollView>
				{objCarCheck ? (
					<>
						<View
							style={{
								alignItems: 'center',
							}}
						>
							<Text variant="titleLarge">Update your list</Text>
						</View>
						<Text variant="bodySmall">ID: {objCarCheck.uuid}</Text>

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
						<List.Item
							title="Battery"
							left={props => <List.Icon {...props} icon="car-battery" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.battery,
									handleSelectChange,
									'battery',
								)
							}
						/>
						<List.Item
							title="Headlamp"
							left={props => <List.Icon {...props} icon="car-light-high" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.light_headlamp,
									handleSelectChange,
									'light_headlamp',
								)
							}
						/>
						<List.Item
							title="Signals"
							left={props => <List.Icon {...props} icon="car-parking-lights" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.light_signal,
									handleSelectChange,
									'light_signal',
								)
							}
						/>
						<List.Item
							title="Tail/Rear"
							left={props => <List.Icon {...props} icon="alarm-light" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.light_tail,
									handleSelectChange,
									'light_tail',
								)
							}
						/>
						<List.Item
							title="Oil"
							left={props => <List.Icon {...props} icon="oil" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.oil,
									handleSelectChange,
									'oil',
								)
							}
						/>
						<List.Item
							title="Water"
							left={props => <List.Icon {...props} icon="water-outline" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.water,
									handleSelectChange,
									'water',
								)
							}
						/>
						<List.Item
							title="Brakes"
							left={props => <List.Icon {...props} icon="car-brake-alert" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.brake,
									handleSelectChange,
									'brake',
								)
							}
						/>
						<List.Item
							title="Air"
							left={props => <List.Icon {...props} icon="car-tire-alert" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.air,
									handleSelectChange,
									'air',
								)
							}
						/>
						<List.Item
							title="Gas"
							left={props => (
								<List.Icon {...props} icon="gas-station-outline" />
							)}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.gas,
									handleSelectChange,
									'gas',
								)
							}
						/>
						<List.Item
							title="Engine"
							left={props => <List.Icon {...props} icon="engine-outline" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.engine,
									handleSelectChange,
									'engine',
								)
							}
						/>
						<List.Item
							title="Tires"
							left={props => <List.Icon {...props} icon="tire" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.tires,
									handleSelectChange,
									'tires',
								)
							}
						/>
						<List.Item
							title="FR Bearing"
							left={props => <List.Icon {...props} icon="car-cog" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.bearing_fr,
									handleSelectChange,
									'bearing_fr',
								)
							}
						/>
						<List.Item
							title="FL Bearing"
							left={props => <List.Icon {...props} icon="car-cog" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.bearing_fl,
									handleSelectChange,
									'bearing_fl',
								)
							}
						/>
						<List.Item
							title="RR Bearing"
							left={props => <List.Icon {...props} icon="car-cog" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.bearing_rr,
									handleSelectChange,
									'bearing_rr',
								)
							}
						/>
						<List.Item
							title="RL Bearing"
							left={props => <List.Icon {...props} icon="car-cog" />}
							right={props =>
								renderHWStatusSelectItems(
									props,
									objCarCheck.bearing_rl,
									handleSelectChange,
									'bearing_rl',
								)
							}
						/>
						<Divider />
						<Text variant="bodySmall">
							Updated: {objCarCheck.updated_at.toLocaleDateString()}
						</Text>
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
									updateCheckList(objCarCheck);
									navigation.goBack();
								}}
							>
								Update
							</Button>
						</View>
					</>
				) : (
					<View />
				)}
			</ScrollView>
		</SafeScreen>
	);
}
