# JS / Node.js / TypeScript Practice

Small, self-contained exercises I wrote while learning JavaScript promises, Node.js core modules and TypeScript. Each file focuses on one concept and can be run on its own.

> These are learning exercises, not production code. For a larger project see my [Core Banking System](https://github.com/Hamed4002/core-banking-system).

## Requirements

- Node.js 18 or newer
- `npm install` (only needed for the TypeScript type-check)

## Contents

| Folder | File | Concept |
| ------ | ---- | ------- |
| `javascript/promises-async` | `promise-chaining.js` | Chaining `.then()` calls |
| | `promise-states.js` | `resolve` / `reject`, `.catch()`, `.finally()` |
| | `async-await-basic.js` | `async/await`, sequential vs `Promise.all` |
| | `async-login.js` | Async flow with delays and `readline` |
| `node-core` | `fs-promises.js` | `fs.promises`: mkdir, write, read, stat, delete |
| | `path-module.js` | `path.basename`, `dirname`, `extname`, `parse` |
| | `events.js` | `EventEmitter`: `on`, `once`, `off`, `removeListener` |
| | `buffer.js` | `Buffer`: from, byteLength, alloc, copy |
| | `streams/index.js` | Readable to Writable copy with manual backpressure |
| | `streams/pipeline.js` | The same copy using `stream.pipeline()` |
| | `http-server/` | HTTP server with the core `http` module (has its own README) |
| `typescript` | `interfaces-and-types.ts` | Interface inheritance, unions, intersections, narrowing |
| | `member-visibility.ts` | `public` / `protected` / `private` |
| | `constructor-overloading.ts` | Constructor overload signatures, default parameters |
| | `method-overriding.ts` | `implements`, overriding, `super` |
| | `getters-setters.ts` | Accessors |
| | `static.ts` | Static members and static blocks |

## How to run

JavaScript and Node examples (from the repository root):

```bash
node javascript/promises-async/promise-states.js
node node-core/events.js
node javascript/promises-async/promise-chaining.js 7   # optional number argument
```

The file-system examples work inside a temporary folder and clean up after themselves. The stream examples write `destination*.txt` next to `source.txt` (ignored by git).

TypeScript examples:

```bash
npm install
npm run typecheck                                  # compile check, no output files
npx tsc -p typescript/tsconfig.json --noEmit false --outDir dist   # emit JS to dist/
node dist/static.js
```

Lines marked `@ts-expect-error` in the TypeScript files are compile errors on purpose, to demonstrate what the compiler rejects.
