import { createStateStore } from "@zenstack/zen-store";
import eventBus from "./event-bus";
import {EventTypes} from "./events";

export const counterStateStore = createStateStore(0);

const handleIncrementEvent = () => counterStateStore.setState(
    counterStateStore.getState() + 1
);

const handleDecrementEvent = () => counterStateStore.setState(
    counterStateStore.getState() - 1
);

eventBus.subscribe(EventTypes.increment, handleIncrementEvent);
eventBus.subscribe(EventTypes.decrement, handleDecrementEvent);

