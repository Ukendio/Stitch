import { Data, Entity } from ".";
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
			? [Data<F>, ...Iterate<B>]
			: never
		: never
	: never;

export class EntityQuery<a extends Array<ComponentDefinition>> {
	public all<q extends Array<ComponentDefinition>>(...components: q | Array<string>): EntityQuery<q>;

	public except<e extends Array<a[number]>>(...components: e | Array<string>): EntityQuery<FilterOut<a, e[number]>>;

	public get(): Array<Entity<a>>;

	public forEach<compiled extends Iterate<a>>(
		callback: (...parameters: [entity: Entity<compiled>, ...components: compiled]) => void,
	): void;
}
