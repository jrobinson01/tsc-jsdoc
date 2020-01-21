# Experiments using the tyescript compiler with jsdoc annotated javascript
VSCode uses tsc under the hood to give feedback about the types used in your code.

example 1 - Let tsc infer types without providing jsdoc comments.

example 2 - Use JSDoc comments to help tsc determine types.

example 3 - Use JSDoc and a tsconfig.json file

example 4 - JSDoc, tsconfig.json and npm scripts
- here's where it breaks. up until example-3, using one tsconfig at the root of the project, vscode is able to make sense of everything.
adding "typecheck":"tsc" script to each package, and then running "lerna run typecheck" in the root however will fail BOTH packages because of the error in package-b. To try to get around that, add a tsconfig.json to each package that extends the root config. Once this is done however, the typecheck scripts all pass, and vscode stops picking up type info from package-a in package-b.

TODO: example 5 - JSDoc, tsconfig, npm scripts and .d.ts files



