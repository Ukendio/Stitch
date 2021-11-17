<h1 align="center">`@rbxts/stitch`</h1>

<p align="center">
A roblox-ts package for @sayhisam's [Stitch](https://github.com/sayhisam1/Stitch). All credits to the author.
</p>

```ts
import { World } from "World";
import { ComponentDefinition } from "World/ComponentDefinition";

interface FooComponent extends ComponentDefinition {
	defaults: { foo: string };
}

interface BarComponent extends ComponentDefinition {
	defaults: { bar: string };
}

interface BazComponent extends ComponentDefinition {
	defaults: { baz: string };
}

const world = new World("test");

const foo: FooComponent = { defaults: { foo: "a" } };
const bar: BarComponent = { defaults: { bar: "b" } };
const baz: BazComponent = { defaults: { baz: "c" } };

const first_instance = new Instance("Part");
world.addComponent("foo", first_instance, foo);
world.addComponent("bar", first_instance, bar);
world.addComponent("baz", first_instance, baz);

const second_instance = new Instance("Part");
world.addComponent("foo", second_instance, foo);
world.addComponent("baz", second_instance, baz);

world
	.createQuery()
	.all<[FooComponent, BarComponent, BazComponent]>("foo", "bar", "baz")
	.except<[BarComponent]>("bar")
	.forEach((entity, c1, c2) => {
		print(entity); // second_instance - first_instance has a filtered out component thus wont be included
		print(c1); // { foo: string }
		print(c2); // { baz: string } baz took bar's place because it was filtered out
	});
```

## Installation

Via npm

```
npm install @rbxts/rbxts-pattern
```

# Documentation

- [API Reference](#api-reference)
  - [`world`](#world)
	- [`new](#new)
	- [`.addComponent`](#.addComponent)
	- [`.createQuery`](#.createQuery)
	- [`.destroy`](#.destroy)
	- [`.getComponent`](#.getComponent)
	- [`.getEntitiesWith`](#.getEntitiesWith)
	- [`.registerComponent`](#.registerComponent)
	- [`.removeComponent`](#.removeComponent)
	- [`.removeSystem`](#.removeSystem)
	- [`setComponent`](#setComponent)
	- [`unregisterComponent`](#unregisterComponent)
  - [`Queries`](#Queries)

## API Reference 

### `world`

The World class is a collection of entities, components, and systems. It is the central class that ties all other parts of an ECS together. A game could have many worlds, but normally there is only one world per game.

### `new`

```ts
class World(namespace: string)
```

### `.addComponent`

```ts
function addComponent<T extends ComponentDefinition>(
	componentResolvable: ComponentResolvable,
	entity: Instance | Entity<Array<unknown>>
	data?: Data<T>
): Data<T>
```
### `.createQuery`

```ts
function createQuery(): EntityQuery<never>;
```

### `.destroy`

```ts
function destroy(): void
```

### `.getComponent`

```ts
function getComponent<T extends ComponentDefinition>(
	componentResolvable: ComponentResolvable,
	entity: Entity<[Data<T>]>,
): Data<T> | undefined;
```

### `.getEntitiesWith`

```ts
function getEntitiesWith<T extends ComponentDefinition>(
	componentResolvable: ComponentResolvable,
): Array<Entity<[Data<T>]>>;
```

### `.registerComponent`

```ts
function registerComponent(componentDefinition: ComponentDefinition): void
```

### `.removeComponent`

```ts
function registerComponent(componentDefinition: ComponentDefinition): void;
```

### `.removeSystem`

```ts
function removeSystem(systemResolvable: SystemResolvable): void;
```

### `.setComponent`

```ts
function setComponent<T extends ComponentDefinition>(
	componentResolvable: ComponentResolvable,
	entity: Instance | Entity<[Data<T>]>,
	data: Data<T>,
): Data<T>;
```
### `.unregisterComponent`

```ts
function unregisterComponent(componentResolvable: ComponentResolvable): void;
```

### `.updateComponent`

```ts
function updateComponent<T extends ComponentDefinition>(
	componentResolvable: ComponentResolvable,
	entity: Instance | Entity<[Data<T>]>,
	data: Data<T>,
): Data<T>;
```

## Open Sourced Example

I wrote an example game that uses Stitch in TS to show you how to use it!

https://github.com/Ukendio/fighting-game