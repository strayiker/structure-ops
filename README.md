# JS Data Structure Operations (Mutable/Immutable)

A lightweight (`~1kb`) set of basic operations defined on a plain js data structures (Object, Array, Map, Set). Provides two sets of operations for your choice: mutable or immutable.

## Installation

`npm install @sadbox/structure-ops`

`yarn add @sadbox/structure-ops`

## How to use

**mutable**

```javascript
import { get } from '@sadbox/structure-ops';

const a = { b: 0 };

get(a, 'b'); // 0
```

**immutable**

```javascript
import { set } from '@sadbox/structure-ops/immutable';

const a = { b: 0 };
const b = set(a, 'b', 1); // { b: 1 }

console.log(a); // { b: 0 }
console.log(a === b); // false
```

## API

### `copy(collection)`

Creates a new copy of the collection.

**Arguments**

- collection (`Object` | `Array` | `Map` | `Set`) - The collection to copy.

**Returns**

- (`Object` | `Array` | `Map` | `Set`) - New copy of the collection.

**Example**

```javascript
const a = { b: 0 };

copy(a); // { b: 0 }
```

---

### `get(collection, key, [defaultValue])`

Gets the value of the collection property.

**Arguments**

- collection (`Object` | `Array` | `Map` | `Set`) - The original collection.
- key (`*`) - Key of the property to get.
- [defaultValue] \(`*`) - The value returned if property does not exists.

**Returns**

- (`*`) - Resolved value.

**Example**

```javascript
const a = { b: 0 };

get(a, 'b'); // 0
get(a, 'c', 'ups'); // ups
```

---

### `getIn(collection, path, [defaultValue])`

Gets the value at the path of the collection.

**Arguments**

- collection (`Object` | `Array` | `Map` | `Set`) - The original collection.
- path (`*` | `Array<*>`) - Path of the property to get.
- [defaultValue] \(`*`) - The value returned if property does not exists.

**Returns**

- (`*`) - Resolved value.

**Example**

```javascript
const a = { b: { c: [0] } };

getIn(a, ['b', 'c', 0]); // 0
getIn(a, 'b.c[0]'); // 0
getIn(a, 'b.c.0'); // 0
```

---

### `has(collection, key)`

Check if key is a direct property of the collection.

**Arguments**

- collection (`Object` | `Array` | `Map` | `Set`) - The original collection.
- key (`*`) - Key of the property to check.

**Returns**

- (`boolean`) - Returns `true` if property exists, else `false`.

**Example**

```javascript
const a = { b: 0 };

has(a, 'b'); // true
has(a, 'c'); // false
```

---

### `hasIn(collection, path)`

Check if path is a direct property of the collection.

**Arguments**

- collection (`Object` | `Array` | `Map` | `Set`) - The original collection.
- path (`*` | `Array<*>`) - Path of the property to check.

**Returns**

- (`boolean`) - Returns `true` if property exists, else `false`.

**Example**

```javascript
const a = { b: { c: [0] } };

hasIn(a, 'b.c[0]'); // true
```

---

### `merge(collection, ...sources)`

Merges the original collection with sources.

**Arguments**

- collection (`Object` | `Array` | `Map` | `Set`) - The original collection.
- sources (`Object` | `Array` | `Map` | `Set`) - One or more collections to merge in.

**Returns**

- (`Object` | `Array` | `Map` | `Set`) - Mutable `merge` mutates and returns the source collection. Immutable `merge` returns a new collection.

**Example**

```javascript
const a = { b: 0, c: 2 };

merge(a, { b: 1 }, { d: 3 }); // { b: 1, c: 2, d: 3 }
```

---

### `mergeIn(collection, path, ...sources)`

Merges the property at path of the original collection with sources.

**Arguments**

- collection (`Object` | `Array` | `Map` | `Set`) - The original collection.
- path (`*`, `Array<*>`) - Path of the property to merge.
- sources (`Object` | `Array` | `Map` | `Set`) - One or more collections to merge in.

**Returns**

- (`Object` | `Array` | `Map` | `Set`) - Mutable `mergeIn` mutates and returns the source collection. Immutable `mergeIn` returns a new collection.

**Example**

```javascript
const a = { b: { d: 0 } };

mergeIn(a, 'b', { c: 1 }); // { b: { d: 0, c: 1 } }
```

---

### `mergeDeep(collection, ...sources)`

Deeply merges the original collection with sources.

**Arguments**

- collection (`Object` | `Array` | `Map` | `Set`) - The original collection.
- sources (`Object` | `Array` | `Map` | `Set`) - One or more collections to merge in.

**Returns**

- (`Object` | `Array` | `Map` | `Set`) - Mutable `mergeIn` mutates and returns the source collection. Immutable `mergeIn` returns a new collection.

**Example**

```javascript
const a = { a: [{ b: 1 }] };
const b = { a: [{ c: 2 }] };

mergeDeep(a, b); // { a: [{ b: 1, c: 2 }] }
```

---

### `remove(collection, key)`

Removes the property from the collection.

**Arguments**

- collection (`Object` | `Array` | `Map`) - The original collection.
- key (`*`) - Key of the property to remove.

**Returns**

- (`Object` | `Array` | `Map`) - Mutable `remove` mutates and returns the source collection. Immutable `remove` returns a new collection.

**Example**

```javascript
const a = { b: 0, c: 1 };

remove(a, 'b'); // { c: 1 }
```

---

### `removeIn(collection, path)`

Removes the property at path from the collection.

**Arguments**

- collection (`Object` | `Array` | `Map`) - The original collection.
- path (`*` | `Array<*>`) - Path of the property to remove.

**Returns**

- (`Object` | `Array` | `Map`) - Mutable `removeIn` mutates and returns the source collection. Immutable `removeIn` returns a new collection.

**Example**

```javascript
const a = { b: { c: 0 } };

removeIn(a, 'b.c'); // { b: {} }
```

---

### `set(collection, key, value)`

Sets the value of property of the collection.

**Arguments**

- collection (`Object` | `Array` | `Map`) - The original collection.
- key (`*`) - Key of the property to set.
- value (`*`) - The value to set.

**Returns**

- (`Object` | `Array` | `Map`) - Mutable `set` mutates and returns the source collection. Immutable `set` returns a new collection.

**Example**

```javascript
const a = {};

set(a, 'b', 0); // { b: 0 }
```

---

### `setIn(collection, path, value)`

Sets the value at path of the collection.

**Arguments**

- collection (`Object` | `Array` | `Map`) - The original collection.
- path (`*`, `Array<*>`) - Path of the property to set.
- value (`*`) - The value to set.

**Returns**

- (`Object` | `Array` | `Map`) - Mutable `setIn` mutates and returns the source collection. Immutable `setIn` returns a new collection.

**Example**

```javascript
const a = {};

setIn(a, 'b.c', 0); // { b: { c: 0 } }
```

---

### `update(collection, key, updater)`

Updates the value of property of the collection.

**Arguments**

- collection (`Object` | `Array` | `Map`) - The original collection.
- key (`*`) - Key of the property to update.
- updater (`Function<(value:*):*>`) - The updater function that receive an old value and returns a new value.

**Returns**

- (`Object` | `Array` | `Map`) - Mutable `update` mutates and returns the source collection. Immutable `update` returns a new collection.

**Example**

```javascript
const a = { b: [1, 2, 3] };
const updater = value => value.map(v => v ** 2);

update(a, 'b', updater); // { b: [1, 4, 9] }
```

---

### `updateIn(collection, path, updater)`

Updates the value of property at path of the collection.

**Arguments**

- collection (`Object` | `Array` | `Map`) - The original collection.
- path (`*` | `Array<*>`) - Path of the property.
- updater (`Function<(value:*):*>`) - The updater function that receive an old value and returns a new value.

**Returns**

- (`Object` | `Array` | `Map`) - Mutable `updateIn` mutates and returns the source collection. Immutable `updateIn` returns a new collection.

**Example**

```javascript
const a = { b: { c: 0 } };
const updater = value => [value];

updateIn(a, 'b.c', updater); // { b: c: [0] }
```
