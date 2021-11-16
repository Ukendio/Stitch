export interface SystemDefinition {
	name: string;
	priority: number;
	updateEvent: RBXScriptSignal;
	destroy: () => void;
}

export type SystemResolvable = SystemDefinition | string | ModuleScript;
