# Experiments using the tyescript compiler with jsdoc annotated javascript
VSCode uses tsc under the hood to give feedback about the types used in your code.

example 1 - Let tsc infer types without providing jsdoc comments.

example 2 - Use JSDoc comments to help tsc determine types.

example 3 - Use JSDoc and a tsconfig.json file

example 4 - JSDoc, tsconfig.json and npm scripts

example 5 - JSDoc, tsconfig, npm scripts and .d.ts files

notes:
up until example-3, using one tsconfig at the root of the project, vscode is able to make sense of everything.
adding "typecheck":"tsc" script to each package, and then running "lerna run typecheck" in the root however, fails
to find any type errors and says all is good.

