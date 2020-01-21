# Experiments using the tyescript compiler with jsdoc annotated javascript
VSCode uses tsc under the hood to give feedback about the types used in your code. Below are some examples of different ways to set things up.

[example 1](https://github.com/jrobinson01/tsc-jsdoc/tree/example-1) - Let tsc infer types without providing jsdoc comments.

[example 2](https://github.com/jrobinson01/tsc-jsdoc/tree/example-2) - Use JSDoc comments to help tsc determine types.

[example 3](https://github.com/jrobinson01/tsc-jsdoc/tree/example-3) - Use JSDoc and a tsconfig.json file

[example 4](https://github.com/jrobinson01/tsc-jsdoc/tree/example-4) - JSDoc, tsconfig.json and npm scripts
- here's where it breaks. up until example-3, using one tsconfig at the root of the project, vscode is able to make sense of everything.
adding "typecheck":"tsc" script to each package, and then running "lerna run typecheck" in the root however, will fail BOTH packages because of the error in package-b. To try to get around that, add a tsconfig.json to each package that extends the root config. Once this is done however, the typecheck scripts all pass, and vscode stops picking up type info from package-a in package-b.

[example 5](https://github.com/jrobinson01/tsc-jsdoc/tree/example-5) - JSDoc, tsconfig, npm scripts and .d.ts files
- example 5 fixes example 4 by properly configuring the tsconfig files inside the separate packages. In package-a, we want to generate *.d.ts files while we do not need them in package-b. The trick is to make sure that the base config does NOT include `"moduleResolution": "node",` as this appears to break things (better explanation needed...). The `moduleResolution` flag should be included in the extended configs in each project.

TODO: in each example, explain what is going on in the readme
