import { World } from "World";

export interface TagSystem {
	onUpdate(world: World): void;
}
