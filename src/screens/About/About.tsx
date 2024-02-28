// import { SafeScreen } from '@/components/template';
import type { TabNavigatorProps } from '@/types/navigation';
import { ScrollView, View } from 'react-native';
import { SafeScreen } from '@/components/template';
import { Text } from 'react-native-paper';

function About({ navigation }: TabNavigatorProps) {
	return (
		<SafeScreen>
			<ScrollView>
				<View>
					<Text variant="bodySmall" style={{ marginTop: 20, marginBottom: 20 }}>
						Bien Laqui presents...
					</Text>
					<Text variant="headlineMedium" style={{ marginBottom: 20 }}>
						Kalikot
					</Text>
					<Text variant="bodyMedium" style={{ marginBottom: 10 }}>
						This app aims to be a handy checklist for checking your own car
						without a prior knowledge of how the entire car
						mechanical/electrical system work.
					</Text>
					<Text variant="bodyMedium">
						My goal is to continuously improve this app along the way... Stay
						tuned.
					</Text>
				</View>
			</ScrollView>
		</SafeScreen>
	);
}

export default About;
