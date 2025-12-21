type Emitter = {
	/**
	Register an event handler that listens to a specified event.

	@param event - The name of the event to listen to.
	@param listener - The function to execute when the event is emitted.
	@returns The Emitter instance for method chaining.
	*/
	on(event: string, listener: (...arguments_: any[]) => void): Emitter;

	/**
	Register a one-time event handler for a specified event.

	@param event - The name of the event to listen to.
	@param listener - The function to execute once when the event is emitted.
	@returns The Emitter instance for method chaining.
	*/
	once(event: string, listener: (...arguments_: any[]) => void): Emitter;

	/**
	Remove a specific event handler for a specified event.

	@param event - The name of the event.
	@param listener - The specific handler function to remove.
	@returns The Emitter instance for method chaining.
	*/
	off(event: string, listener: (...arguments_: any[]) => void): Emitter; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	Remove all event handlers for a specified event.

	@param event - The name of the event for which to remove all handlers.
	@returns The Emitter instance for method chaining.
	*/
	off(event: string): Emitter; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	Remove all event handlers for all events.

	@returns The Emitter instance for method chaining.
	*/
	off(): Emitter;

	/**
	Emit an event, invoking all handlers registered for it.

	@param event - The name of the event to emit.
	@param arguments_ - Arguments to pass to the event handlers.
	@returns The Emitter instance for method chaining.
	*/
	emit(event: string, ...arguments_: any[]): Emitter;

	/**
	Retrieve the event handlers registered for a specific event.

	@param event - The name of the event.
	@returns An array of functions registered as handlers for the event.
	*/
	listeners(event: string): Array<(...arguments_: any[]) => void>;

	/**
	Get the count of listeners for a specific event.

	@param event - The name of the event.
	@returns The number of listeners for the event.
	*/
	listenerCount(event: string): number; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	Get the count of all event handlers in total.

	@returns The total number of event handlers.
	*/
	listenerCount(): number;

	/**
	Check if there are any handlers registered for a specific event.

	@param event - The name of the event.
	@returns `true` if there are one or more handlers, `false` otherwise.
	*/
	hasListeners(event: string): boolean; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	Check if there are any handlers registered for any event.

	@returns `true` if there are one or more handlers for any event, `false` otherwise.
	*/
	hasListeners(): boolean;
};

type EmitterConstructor = {
	prototype: Emitter;
	new (object?: object): Emitter; // eslint-disable-line @typescript-eslint/ban-types
	<T extends object>(object: T): T & Emitter; // eslint-disable-line @typescript-eslint/ban-types
};

/**
As an `Emitter` instance:

```
import Emitter from 'component-emitter';

const emitter = new Emitter();

emitter.emit('🦄');
```

As a mixin:

```
import Emitter from 'component-emitter';

const user = {name: 'tobi'};
Emitter(user);

user.emit('I am a user');
```

As a prototype mixin:

```
import Emitter from 'component-emitter';

Emitter(User.prototype);
```
*/
declare const emitter: EmitterConstructor;

export = emitter;
