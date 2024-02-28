import { SafeAreaView, StatusBar } from 'react-native';

import { useTheme } from '@/theme';

import type { PropsWithChildren } from 'react';

function SafeScreen({ children }: PropsWithChildren) {
	const { layout, variant, navigationTheme, gutters } = useTheme();

	return (
		<SafeAreaView
			style={[
				layout.flex_1,
				{ backgroundColor: navigationTheme.colors.background },
				gutters.margin_16,
				gutters.marginTop_32,
			]}
		>
			<StatusBar
				barStyle={variant === 'dark' ? 'light-content' : 'dark-content'}
				backgroundColor={navigationTheme.colors.background}
			/>
			{children}
		</SafeAreaView>
	);
}

export default SafeScreen;
