import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type ApplicationStackParamList = {
	TabNavigator: undefined;
	CarCheckCreate: undefined;
	CarCheckUpdate: { checklistId: string };
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;

export type TabNavigatorParamList = {
	Startup: undefined;
	Example: undefined;
	KList: undefined;
	About: undefined;
	CarCheckCreate: undefined;
	CarCheckUpdate: { checklistId: string };
};

export type TabNavigatorProps = BottomTabScreenProps<TabNavigatorParamList>;
