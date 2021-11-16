import { World } from ".";

export interface SystemDefinition {
	name?: string;
	priority?: number;
	updateEvent?: RBXScriptSignal;
	destroy?: () => void;

	onCreate?: (world: World) => void;
	onUpdate?: (world: World) => void;
	onDestroy?: (world: World) => void;
}

export type SystemResolvable = SystemDefinition | string | ModuleScript;
