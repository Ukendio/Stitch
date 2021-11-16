export interface ComponentDefinition {
	name?: string;
	defaults?: unknown;
	validator?: (data: unknown) => data is this["defaults"];
	tag?: boolean | string;
	replicate?: boolean;
	destructor?: Callback;
}

export type ComponentResolvable = ModuleScript | ComponentDefinition | string;
