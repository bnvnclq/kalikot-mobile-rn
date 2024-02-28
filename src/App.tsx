import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';
import {
	MD3LightTheme as DefaultTheme,
	PaperProvider,
} from 'react-native-paper';
import { lightColors } from './theme/_config';

import ApplicationNavigator from './navigators/Application';
import './translations';

const queryClient = new QueryClient();
const paperTheme = {
	...DefaultTheme,
	colors: lightColors.colors,
};

export const storage = new MMKV();

function App() {
	return (
		<PaperProvider theme={paperTheme}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider storage={storage}>
					<ApplicationNavigator />
				</ThemeProvider>
			</QueryClientProvider>
		</PaperProvider>
	);
}

export default App;
