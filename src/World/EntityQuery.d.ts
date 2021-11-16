import { Entity, World } from ".";
import { Component } from "./ComponentDefinition";

type ExcludeInArr<Arr extends Array<unknown>[number], T> = Arr extends []
	? Arr
	: Arr extends [infer First, ...infer Back]
	? First extends T
		? ExcludeInArr<Back, T>
		: [First, ...ExcludeInArr<Back, T>]
	: never;

export class EntityQuery<a extends Array<Component> = []> {
	public constructor(world: World);

	public all<q extends Array<Component>>(...components: q | Array<string>): EntityQuery<q>;

	public except<e extends Array<a[number]>>(
		...components: e | Array<string>
	): EntityQuery<ExcludeInArr<a, e[number]>>;

	public get(): Array<Entity<a>>;

	public forEach(callback: (...parameters: [entity: Entity<a>, ...components: a]) => void): void;
}
