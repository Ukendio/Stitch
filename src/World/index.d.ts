import { ComponentDefinition, ComponentResolvable } from "./ComponentDefinition";
import { SystemDefinition, SystemResolvable } from "./SystemDefinition";
import { EntityQuery } from "./EntityQuery";

//the generic is important to infer associated components
export type Entity<T extends ComponentDefinition["defaults"] | Array<ComponentDefinition["defaults"]>> =
	| (Instance & T)
	| defined;

export type Data<T extends { defaults?: unknown }> = T["defaults"];

export class World {
	public constructor(namespace: string);

	public destroy(): void;

	public registerComponent(componentDefinition: ComponentDefinition): void;

	public unregisterComponent(componentResolvable: ComponentResolvable): void;

	public createQuery(): EntityQuery<never>;

	public addSystem(systemDefinition: SystemDefinition): void;

	public removeSystem(systemResolvable: SystemResolvable): void;

	public addComponent<T extends ComponentDefinition>(
		componentResolvable: ComponentResolvable,
		entity: Instance | Entity<[Data<T>]>,
		data?: Data<T>,
	): Data<T>;

	public getComponent<T extends ComponentDefinition>(
		componentResolvable: ComponentResolvable,
		entity: Entity<[Data<T>]>,
	): Data<T> | undefined;

	public getEntitiesWith<T extends ComponentDefinition>(
		componentResolvable: ComponentResolvable,
	): Array<Entity<[Data<T>]>>;

	public setComponent<T extends ComponentDefinition>(
		componentResolvable: ComponentResolvable,
		entity: Instance | Entity<[Data<T>]>,
		data: Data<T>,
	): Data<T>;

	public updateComponent<T extends ComponentDefinition>(
		componentResolvable: ComponentResolvable,
		entity: Instance | Entity<[Data<T>]>,
		data: Data<T>,
	): Data<T>;

	public removeComponent<T extends ComponentDefinition>(
		componentResolvable: ComponentResolvable,
		entity: Instance | Entity<[Data<T>]>,
	): void;
}
