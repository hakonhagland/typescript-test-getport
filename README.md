## How this typescript project was initialized

- First run:
```
$ npm init -y
$ npm install --savedev typescript
$ npm install @types/node get-port
```

- Then, add `tsconfig.json`:

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "declaration": true,
    "sourceMap": true,
    "outDir": "out",
    "strict": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}

```

- Then update `package.json` to use: `"type": "module"` instead of
  `"type": "commonjs"`

## Compile to javascript

```
$ tsc
```

## Run script

```
$ node out/main.js
```
