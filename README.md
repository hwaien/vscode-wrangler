# vscode-wrangler

Visual Studio Code dev container with a batteries included template for kick starting a TypeScript Cloudflare worker project.

## Getting Started

Here are some steps you may need to take when using this template for the first time:

1. Install [Docker](https://www.docker.com/products/docker-desktop) and [Visual Studio Code](https://code.visualstudio.com/Download).
1. Open the root folder of this repository in Visual Studio Code.
1. Visual Studio Code will pop up a prompt about detecting a Dev Container configuration file in the folder. Click the "Reopen in Container" button.

This template is meant to be used with [Wrangler](https://github.com/cloudflare/wrangler). Documentation can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler/), if you need help to familiarize yourself with the tool and configure it to work with your [Cloudflare account](https://dash.cloudflare.com).

## Useful Operations

Following are some scripts that are useful in day-to-day development.

### `wrangler dev`

Run this script to start the development server.

Open [http://localhost:8787](http://localhost:8787) with your browser to see the result.

[`src/index.ts`](./src/index.ts) calls the request handler in [`src/handler.ts`](./src/handler.ts), and will return the [request method](https://developer.mozilla.org/en-US/docs/Web/API/Request/method) for the given request.

### `npm lint`

Run this script to use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to find problems.

### `npm format`

Run this script to use [Prettier](https://prettier.io/) to format code files.

### `npm test`

Run this script to use [Jest](https://jestjs.io/) to run automated tests.

### `npm build`

Run this script to create a production build.

## Guardrails

As you may have noticed from scripts like `test` and `lint`, this starter kit comes with many guardrails out of the box.

These guardrails are intended to detect and resolve issues early, so that you can stay focused and productive.

### Language Syntax

Your code will not run as intended if it violates TypeScript language specifications.

A list of TypeScript language syntax issues can be found [in the TypeScript repository](https://github.com/microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json). A friendlier list with code examples can be found [here](https://typescript.tv/error-ts/).

These issues are checked by the TypeScript compiler, which is executed by ts-loader, the TypeScript loader for webpack. You can invoke webpack via the `npm build` script.

### Code Quality

Certain problematic coding patterns can lead to defective code in the future. These problematic patterns can be identified by the static code analysis tool [ESLint](https://eslint.org/).

ESLint can be run manually via the `npm lint` script.

The [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) integrates ESLint into Visual Studio Code to visually indicate issues in the editor.

This workspace also configures ESLint to automatically fix problematic coding patterns to the best of its abilities when you save a file. This setting can be changed in the `.vscode/settings.json` file.

### Documentation

Code written without proper documentation can lead to defects in the future if developers need to change the code but misunderstand its intentions.

Proper JavaScript documentation is defined by [JSDoc](https://jsdoc.app/) and enforced by ESLint through [plugin](https://github.com/gajus/eslint-plugin-jsdoc).

Similarly, proper TypeScript documentation is defined by [TSDoc](https://tsdoc.org/) and enforced by ESLint through [plugin](https://tsdoc.org/pages/packages/eslint-plugin-tsdoc/).

Since enforcement is done by ESLint, see above for expected behaviors.

### Testing

Proper documentation helps to make code intentions clear, but does not check whether the code's actual behaviors match the intentions. For this, a testing framework is needed.

The testing framework of this workspace is [Jest](https://jestjs.io/). Add and maintain tests in the `test` folder.

To run the tests manually, use the `npm test` script.

To debug tests, open Visual Studio Code's [built-in debugger](https://code.visualstudio.com/Docs/editor/debugging), and launch the "Debug Tests" configuration.

The `service-worker-mock` used by the tests is not a perfect representation of the Cloudflare Workers runtime. It is a general approximation. We recommend that you test end to end with `wrangler dev` in addition to a [staging environment](https://developers.cloudflare.com/workers/tooling/wrangler/configuration/environments/) to test things before deploying.

### Formatting

Much productivity is lost when developers debate about styling and formatting issues. Therefore it is prudent to set clear guardrails upfront, to prevent distractions later.

ESLint includes some formatting checks. Since they are not comprehensive, these checks are disabled in favor of dedicated formatters.

Basic formatting is defined using [EditorConfig](https://editorconfig.org/). Formatting unsupported by EditorConfig is defined using [Prettier](https://prettier.io/).

Enforcement is done by Prettier, which enforces both EditorConfig properties and Prettier configurations. You can manually run Prettier checks via the `npm lint` script.

The [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension integrates Prettier into Visual Studio Code to visually indicate formatting inconsistencies in the editor.

This workspace also configures Prettier to automatically format files on save. This setting can be changed in the `.vscode/settings.json` file.

### Spelling

Misspellings create confusion and slow down development.

This workspace uses the [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) extension to check spelling. Misspellings are indicated in the editor.

## Previewing and Publishing

For information on how to preview and publish your worker, please see the [Wrangler docs](https://developers.cloudflare.com/workers/tooling/wrangler/commands/#publish).
