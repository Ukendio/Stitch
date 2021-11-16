import { Entity } from ".";
import { ComponentDefinition } from "./ComponentDefinition";

type FilterOut<T extends Array<unknown>, F> = T extends [infer L, ...infer R]
	? [L] extends [F]
		? [...FilterOut<R, F>]
		: [L, ...FilterOut<R, F>]
	: [];

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

	public except<e extends Array<ComponentDefinition>>(
		...components: e | Array<string>
	): EntityQuery<FilterOut<a, e[number]>>;

	public get(): Array<Entity<a>>;

	public forEach(callback: (...parameters: [entity: Entity<a>, ...components: a]) => void): void;
}
