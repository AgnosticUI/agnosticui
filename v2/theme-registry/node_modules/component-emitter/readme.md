# component-emitter

> Simple event emitter

## Install

```sh
npm install component-emitter
```

## Usage

As an `Emitter` instance:

```js
import Emitter from 'component-emitter';

const emitter = new Emitter();

emitter.emit('🦄');
```

As a mixin:

```js
import Emitter from 'component-emitter';

const user = {name: 'tobi'};
Emitter(user);

user.emit('I am a user');
```

As a prototype mixin:

```js
import Emitter from 'component-emitter';

Emitter(User.prototype);
```

## API

### new Emitter()

Create a new emitter.

### Emitter(object)

Use it as a mixin. For example a plain object may become an emitter, or you may extend an existing prototype.

### Emitter#on(event, listener)

Register an event handler that listens to a specified event.

### Emitter#once(event, listener)

Register a one-time event handler for a specified event.

### Emitter#off(event, listener)

Remove a specific event handler for a specified event.

### Emitter#off(event)

Remove all event handlers for a specified event.

### Emitter#off()

Remove all event handlers for all events.

### Emitter#emit(event, ...arguments)

Emit an event, invoking all handlers registered for it.

### Emitter#listeners(event)

Retrieve the event handlers registered for a specific event.

### Emitter#listenerCount(event)

Get the count of listeners for a specific event.

### Emitter#listenerCount()

Get the count of all event handlers in total.

### Emitter#hasListeners(event)

Check if there are any handlers registered for a specific event.

### Emitter#hasListeners()

Check if there are any handlers registered for any event.

## FAQ

### How does it differ from the Node.js EventEmitter?

It's simpler and more lightweight, and it works in any JavaScript environment, not just Node.js. It also provides mixin functionality to add event handling to existing objects without needing inheritance.
