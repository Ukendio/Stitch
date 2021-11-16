import { Entity } from "World";

export type Component = defined;
export interface ComponentDefinition<T extends Component> {
	name?: string;
	defaults?: T;
	validator: (data: T) => data is T;
	tag?: boolean | string;
	replicate?: boolean;
	destructor?: (a: Entity<[T]>, data: T) => void;
}

export type ComponentResolvable = ModuleScript | ComponentDefinition<Component> | string;
