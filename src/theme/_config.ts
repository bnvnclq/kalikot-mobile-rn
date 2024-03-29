import { DarkTheme } from '@react-navigation/native';

import type { ThemeConfiguration } from '@/types/theme/config';

const colorsLight = {
	red500: '#C13333',
	gray800: '#303030',
	gray400: '#4D4D4D',
	gray200: '#A1A1A1',
	gray100: '#DFDFDF',
	gray50: '#EFEFEF',
	grotto50: '#e8f5f8',
	grotto100: '#d1ebf0',
	grotto200: '#bae1e9',
	grotto300: '#a3d7e1',
	grotto400: '#8ccdda',
	grotto500: '#5db8cb',
	grotto600: '#46aec3',
	grotto700: '#2fa4bc',
	grotto800: '#189ab4',
	grotto900: '#168ba2',
	grotto1000: '#137b90',
} as const;

const colorsDark = {
	red500: '#C13333',
	gray800: '#E0E0E0',
	gray400: '#969696',
	gray200: '#BABABA',
	gray100: '#000000',
	gray50: '#EFEFEF',
	grotto50: '#168ba2',
	grotto100: '#189ab4',
	grotto200: '#189ab4',
	grotto300: '#2fa4bc',
	grotto400: '#46aec3',
	grotto500: '#5db8cb',
	grotto600: '#8ccdda',
	grotto700: '#a3d7e1',
	grotto800: '#bae1e9',
	grotto900: '#d1ebf0',
	grotto1000: '#e8f5f8',
} as const;

export const lightColors = {
	colors: {
		primary: 'rgb(0, 104, 116)',
		onPrimary: 'rgb(255, 255, 255)',
		primaryContainer: 'rgb(151, 240, 255)',
		onPrimaryContainer: 'rgb(0, 31, 36)',
		secondary: 'rgb(74, 98, 103)',
		onSecondary: 'rgb(255, 255, 255)',
		secondaryContainer: 'rgb(205, 231, 236)',
		onSecondaryContainer: 'rgb(5, 31, 35)',
		tertiary: 'rgb(82, 94, 125)',
		onTertiary: 'rgb(255, 255, 255)',
		tertiaryContainer: 'rgb(218, 226, 255)',
		onTertiaryContainer: 'rgb(14, 27, 55)',
		error: 'rgb(186, 26, 26)',
		onError: 'rgb(255, 255, 255)',
		errorContainer: 'rgb(255, 218, 214)',
		onErrorContainer: 'rgb(65, 0, 2)',
		background: 'rgb(250, 253, 253)',
		onBackground: 'rgb(25, 28, 29)',
		surface: 'rgb(250, 253, 253)',
		onSurface: 'rgb(25, 28, 29)',
		surfaceVariant: 'rgb(219, 228, 230)',
		onSurfaceVariant: 'rgb(63, 72, 74)',
		outline: 'rgb(111, 121, 122)',
		outlineVariant: 'rgb(191, 200, 202)',
		shadow: 'rgb(0, 0, 0)',
		scrim: 'rgb(0, 0, 0)',
		inverseSurface: 'rgb(46, 49, 50)',
		inverseOnSurface: 'rgb(239, 241, 241)',
		inversePrimary: 'rgb(79, 216, 235)',
		elevation: {
			level0: 'transparent',
			level1: 'rgb(238, 246, 246)',
			level2: 'rgb(230, 241, 242)',
			level3: 'rgb(223, 237, 238)',
			level4: 'rgb(220, 235, 237)',
			level5: 'rgb(215, 232, 234)',
		},
		surfaceDisabled: 'rgba(25, 28, 29, 0.12)',
		onSurfaceDisabled: 'rgba(25, 28, 29, 0.38)',
		backdrop: 'rgba(41, 50, 52, 0.4)',
	},
} as const;

export const darkColors = {
	colors: {
		primary: 'rgb(79, 216, 235)',
		onPrimary: 'rgb(0, 54, 61)',
		primaryContainer: 'rgb(0, 79, 88)',
		onPrimaryContainer: 'rgb(151, 240, 255)',
		secondary: 'rgb(177, 203, 208)',
		onSecondary: 'rgb(28, 52, 56)',
		secondaryContainer: 'rgb(51, 75, 79)',
		onSecondaryContainer: 'rgb(205, 231, 236)',
		tertiary: 'rgb(186, 198, 234)',
		onTertiary: 'rgb(36, 48, 77)',
		tertiaryContainer: 'rgb(59, 70, 100)',
		onTertiaryContainer: 'rgb(218, 226, 255)',
		error: 'rgb(255, 180, 171)',
		onError: 'rgb(105, 0, 5)',
		errorContainer: 'rgb(147, 0, 10)',
		onErrorContainer: 'rgb(255, 180, 171)',
		background: 'rgb(25, 28, 29)',
		onBackground: 'rgb(225, 227, 227)',
		surface: 'rgb(25, 28, 29)',
		onSurface: 'rgb(225, 227, 227)',
		surfaceVariant: 'rgb(63, 72, 74)',
		onSurfaceVariant: 'rgb(191, 200, 202)',
		outline: 'rgb(137, 146, 148)',
		outlineVariant: 'rgb(63, 72, 74)',
		shadow: 'rgb(0, 0, 0)',
		scrim: 'rgb(0, 0, 0)',
		inverseSurface: 'rgb(225, 227, 227)',
		inverseOnSurface: 'rgb(46, 49, 50)',
		inversePrimary: 'rgb(0, 104, 116)',
		elevation: {
			level0: 'transparent',
			level1: 'rgb(28, 37, 39)',
			level2: 'rgb(29, 43, 46)',
			level3: 'rgb(31, 49, 52)',
			level4: 'rgb(32, 51, 54)',
			level5: 'rgb(33, 54, 58)',
		},
		surfaceDisabled: 'rgba(225, 227, 227, 0.12)',
		onSurfaceDisabled: 'rgba(225, 227, 227, 0.38)',
		backdrop: 'rgba(41, 50, 52, 0.4)',
	},
};

const sizes = [12, 16, 24, 32, 40, 80] as const;

export const config = {
	colors: colorsLight,
	fonts: {
		sizes,
		colors: colorsLight,
	},
	gutters: sizes,
	backgrounds: colorsLight,
	borders: {
		widths: [1, 2],
		radius: [4, 16],
		colors: colorsLight,
	},
	navigationColors: {
		...DarkTheme.colors,
		background: colorsLight.gray50,
		card: colorsLight.gray50,
	},
	variants: {
		dark: {
			colors: colorsDark,
			fonts: {
				colors: colorsDark,
			},
			backgrounds: colorsDark,
			navigationColors: {
				...DarkTheme.colors,
				background: colorsDark.grotto500,
				card: colorsDark.grotto300,
			},
		},
	},
} as const satisfies ThemeConfiguration;
