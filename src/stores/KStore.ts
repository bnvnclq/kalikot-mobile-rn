import { create } from 'zustand';
import { persist, devtools, createJSONStorage } from 'zustand/middleware';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CarCheck, HwStatus } from '../models';

interface KStore {
	carCheck: CarCheck[];
	initialCarCheck: CarCheck;
	addCheckList: (newCheck: CarCheck) => void;
	createCarCheckList: () => CarCheck;
	getCheckList: (checklistId: string) => CarCheck | undefined;
	updateCheckList: (updatedCheckList: CarCheck) => boolean;
}

const initialCarCheckTemplate: CarCheck = {
	title: '',
	uuid: uuidv4(),
	battery: HwStatus.GOOD,
	light_headlamp: HwStatus.GOOD,
	light_signal: HwStatus.GOOD,
	light_tail: HwStatus.GOOD,
	light_rear: HwStatus.GOOD,
	oil: HwStatus.GOOD,
	water: HwStatus.GOOD,
	brake: HwStatus.GOOD,
	air: HwStatus.GOOD,
	gas: HwStatus.GOOD,
	engine: HwStatus.GOOD,
	tires: HwStatus.GOOD,
	bearing_fr: HwStatus.GOOD,
	bearing_fl: HwStatus.GOOD,
	bearing_rr: HwStatus.GOOD,
	bearing_rl: HwStatus.GOOD,
	created_at: new Date(),
	updated_at: new Date(),
};

export const useKStore = create<KStore>()(
	devtools(
		persist(
			(set, get) => ({
				carCheck: [],
				initialCarCheck: initialCarCheckTemplate,
				addCheckList: (newCheck: CarCheck) => {
					const checklist = get().carCheck;
					set({ carCheck: [newCheck, ...checklist] });
				},
				createCarCheckList: () => {
					const template: CarCheck = {
						title: '',
						uuid: uuidv4(),
						battery: HwStatus.GOOD,
						light_headlamp: HwStatus.GOOD,
						light_signal: HwStatus.GOOD,
						light_tail: HwStatus.GOOD,
						light_rear: HwStatus.GOOD,
						oil: HwStatus.GOOD,
						water: HwStatus.GOOD,
						brake: HwStatus.GOOD,
						air: HwStatus.GOOD,
						gas: HwStatus.GOOD,
						engine: HwStatus.GOOD,
						tires: HwStatus.GOOD,
						bearing_fr: HwStatus.GOOD,
						bearing_fl: HwStatus.GOOD,
						bearing_rr: HwStatus.GOOD,
						bearing_rl: HwStatus.GOOD,
						created_at: new Date(),
						updated_at: new Date(),
					};
					return template;
				},
				getCheckList: (checklistId: string) => {
					const checklist = get().carCheck;
					return checklist.find(carcheck => carcheck.uuid === checklistId);
				},
				updateCheckList: (updatedCheckList: CarCheck) => {
					try {
						const checklist = get().carCheck.filter(
							check => check.uuid !== updatedCheckList.uuid,
						);
						set({
							carCheck: [
								{ ...updatedCheckList, updated_at: new Date() },
								...checklist,
							],
						});
						return true;
					} catch (e) {
						return false;
					}
				},
			}),
			{
				name: 'kstore_db',
				storage: createJSONStorage(() => AsyncStorage),
			},
		),
	),
);
