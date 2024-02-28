// import { SafeScreen } from '@/components/template';
import type { TabNavigatorProps } from '@/types/navigation';
import { ScrollView, View } from 'react-native';
import { useKStore } from '@/stores/KStore';
import { Divider, FAB, List, Text, useTheme } from 'react-native-paper';
// import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';

function KList({ navigation }: TabNavigatorProps) {
	const { colors } = useTheme();

	const carCheck = useKStore(state => state.carCheck);

	return (
		<>
			<SafeScreen>
				<ScrollView>
					<View
						style={{
							flexDirection: 'column',
						}}
					>
						<Text variant="titleLarge">Checklist so far...</Text>
						<Divider />
						{carCheck.map(checklist => (
							<List.Item
								key={checklist.uuid}
								title={checklist.title}
								description={new Date(
									checklist.updated_at,
								).toLocaleDateString()}
								onPress={() => {
									navigation.navigate('CarCheckUpdate', {
										checklistId: checklist.uuid,
									});
								}}
								left={props => <List.Icon {...props} icon="car" />}
							/>
						))}
					</View>
				</ScrollView>
			</SafeScreen>
			<FAB
				label="Checklist"
				icon="plus"
				style={{
					position: 'absolute',
					margin: 16,
					right: 0,
					bottom: 0,
				}}
				variant="secondary"
				// color={colors.primary}
				// background={colors.secondaryContainer}
				onPress={() => {
					navigation.navigate('CarCheckCreate');
				}}
			/>
		</>
	);
}

export default KList;
