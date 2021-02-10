interface Event {
    type: string;
}

export enum EventTypes {
    increment = 'Counter Incremented Event',
    decrement = 'Counter Decremented Event'
}

export interface CounterIncrementedEvent extends Event {
    type: EventTypes.increment
}

export interface CounterDecrementedEvent extends Event {
    type: EventTypes.decrement
}

export const createCounterIncrementedEvent = (): CounterIncrementedEvent => ({
    type: EventTypes.increment
});

export const createCounterDecrementedEvent = (): CounterDecrementedEvent => ({
    type: EventTypes.decrement
});
