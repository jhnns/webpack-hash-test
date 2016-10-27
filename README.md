# webpack-hash-test

This repository can be used to check if and under what circumstances webpack may produce different hashes.
See https://github.com/webpack/webpack/issues/1479

## Disclaimer

Hashes may change between different npm installations. This is because npm's installation is [non-deterministic](https://docs.npmjs.com/how-npm-works/npm3-nondet).
In order to expect the same hashes, you need to ensure that all loaders and plugins stay unchanged. This is because loaders and plugins generate code.
If they change the generated code, the hashes *must also* change.
 
## Findings

### 1. Hashes DO change if a filename changes

![Screenshot of terminal](https://cloud.githubusercontent.com/assets/781746/19767251/2ed0f3d6-9c52-11e6-9554-bf405f2071b2.jpg)

This is surprising since the final bundle does not contain any information about filenames (no `output.filename`). (If you enabled `output-filename`, this is another cause for changing hashes).

### 2. Hashes DO NOT change if the path outside webpack's `context` change

![Screenshot of terminal](https://cloud.githubusercontent.com/assets/781746/19767333/9caeea70-9c52-11e6-991c-cececdfe243c.jpg)

### 3. Hashes are different on a different OS

![Screenshot of terminal](https://cloud.githubusercontent.com/assets/781746/19767252/2ed2d138-9c52-11e6-9da5-9c515056a466.jpg)

As you can see, the hash on the Windows machine is different than the hash on MacOS. This is a logical consequence of 1) since Windows uses backslashes as path separator.
It's probably also due to the fact that Windows uses `CRLF` for new lines.
