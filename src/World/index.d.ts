import { Component, ComponentDefinition, ComponentResolvable } from "./ComponentDefinition";
import { SystemDefinition, SystemResolvable } from "./SystemDefinition";
import { EntityQuery } from "./EntityQuery";

//the generic is important to infer associated components
export type Entity<T extends Component | Array<Component>> = (Instance & T) | defined;

export class World {
	public constructor(namespace: string);

	public destroy(): void;

	public registerComponent(componentDefinition: ComponentDefinition<Component>): void;

	public unregisterComponent(componentResolvable: ComponentResolvable): void;

	public createQuery(): EntityQuery<never>;

	public addSystem(systemDefinition: SystemDefinition): void;

	public removeSystem(systemResolvable: SystemResolvable): void;

	public addComponent<T extends Component>(
		componentResolvable: ComponentResolvable,
		entity: Instance | Entity<never>,
		data?: T,
	): T;

	public getComponent<T extends Component>(componentResolvable: ComponentResolvable, entity: Entity<T>): T;

	public getEntitiesWith<T extends ComponentResolvable>(componentResolvable: T): Array<Entity<T>>;

	public setComponent<T extends Component>(
		componentResolvable: ComponentResolvable,
		entity: Instance | Entity<[T]>,
		data: T,
	): T;

	public updateComponent<T extends ComponentResolvable>(
		componentResolvable: T,
		entity: Instance | Entity<[T]>,
		data: T,
	): T;

	public removeComponent<T extends ComponentResolvable>(componentResolvable: T, entity: Instance | Entity<[T]>): void;
}
