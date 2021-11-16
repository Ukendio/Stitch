import { Entity } from ".";
import { ComponentDefinition } from "./ComponentDefinition";

type ExcludeInArr<Arr extends Array<unknown>[number], T> = Arr extends []
	? Arr
	: Arr extends [infer First, ...infer Back]
	? First extends T
		? ExcludeInArr<Back, T>
		: [First, ...ExcludeInArr<Back, T>]
	: never;

type Iterate<A extends Array<ComponentDefinition>> = A extends []
	? A
	: A extends [infer F, ...infer B]
	? F extends ComponentDefinition
		? B extends Array<ComponentDefinition>
			? [F["defaults"], ...Iterate<B>]
			: never
		: never
	: never;

export class EntityQuery<a extends Array<ComponentDefinition>> {
	public all<q extends Array<ComponentDefinition>>(...components: q | Array<string>): EntityQuery<Iterate<q>>;

	public except<e extends Array<a[number]>>(
		...components: e | Array<string>
	): EntityQuery<ExcludeInArr<a, e[number]>>;

	public get(): Array<Entity<a>>;

	public forEach(callback: (...parameters: [entity: Entity<a>, ...components: a]) => void): void;
}
