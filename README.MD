Highlights an issue with `5.0.0-beta.29` relating to using output options:

```
output: {
  ...etc,
  module: true,
  libraryTarget: "module",
  libraryExport: "default",
}
```

with experiments:

```
experiments: {
  mjs: true,
  outputModule: true,
},
```

```sh
npm ci
npm start
```

This will run webpack and attempt to import the default export from the generated bundle.
