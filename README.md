# collate-json-cli

CLI to collate the contents of several JSON files and write an array to a single file.

## Usage

```shell
$ npx collate-json cli data/*.json result.json
```

For each source file, if the root is an object, that's added to the result array. If the root is itself an array, its items are added to the result array.

## Example

Sources:

```json
{
  "name": "Tom"
}
```

```json
[
  {
    "name": "Dick"
  },
  {
    "name": "Harry"
  }
]
```

Result:

```json
[
  {
    "name": "Tom"
  },
  {
    "name": "Dick"
  },
  {
    "name": "Harry"
  }
]
```
