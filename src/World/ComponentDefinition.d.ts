export interface ComponentDefinition {
	name?: string;
	defaults?: unknown;
	validator?: (data: unknown) => data is Data<this>;
	tag?: boolean | string;
	replicate?: boolean;
	destructor?: Callback;
}

export type ComponentResolvable = ModuleScript | ComponentDefinition | string;
