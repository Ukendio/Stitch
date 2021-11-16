import { t } from "@rbxts/t";

export type Component = defined;
export interface ComponentDefinition<T extends Component> {
	name: string;
	defaults: T;
	validators: t.static<T>;
	destructor: (a: never, data: T) => void;
}
export type ComponentResolvable = ModuleScript | ComponentDefinition<Component> | string;
