# Tesseract Deno

Deno wrapper for Tesseract OCR Engine CLI.

## Usage

You can import from either:
- Main: https://raw.githubusercontent.com/DjDeveloperr/Tesseract-Deno/main/mod.ts
- Stable: https://deno.land/x/tesseract/mod.ts

You can configure default path for Tesseract using `setPath` function or `TESSERACT_PATH` env var.

## Docs

Documentation is available [here](https://doc.deno.land/https/deno.land/x/tesseract/mod.ts).

## Example

```ts
import { recognize } from "https://deno.land/x/tesseract/mod.ts";

const output = await recognize("path/to/image.png");
console.log("Output:", output);
```

## Contributing

You're always welcome to contribute!

- We use `deno fmt` to format out files.

## License

Check [LICENSE](LICENSE) for more info.

Copyright 2021 @ DjDeveloperr