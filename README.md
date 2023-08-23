# rainbow-logr

**rainbow-logr** is a JavaScript library that allows you to colorize your console logs with beautiful rainbow colors. It provides a set of methods to easily add vibrant and eye-catching colors to your terminal output.

## Installation

To install **rainbow-logr**, use npm:

```bash
npm install rainbow-logr
```

## Usage

Import the `Log` class from the package in your JavaScript or TypeScript code:

```javascript
import { Log } from "rainbow-logr";

Log.textV("Hello, Violet Text!"); // Colored text with violet color
Log.textI("Hello, Indigo Text!"); // Colored text with indigo color
Log.textB("Hello, Blue Text!"); // Colored text with blue color
// ... and so on for other colors
```

## Examples

```javascript
import { Log } from "rainbow-logr";

Log.textR("This is an important message!"); // Colored text with red color
Log.bgG("Highlighted text on green bg!"); // Text with green background and black text color
Log.textO("This text has an orange color!"); // Colored text with orange color
```

## Available Methods

- `textV(msg: string)`: Print text with violet color.
- `textI(msg: string)`: Print text with indigo color.
- `textB(msg: string)`: Print text with blue color.
- `textG(msg: string)`: Print text with green color.
- `textY(msg: string)`: Print text with yellow color.
- `textO(msg: string)`: Print text with orange color.
- `textR(msg: string)`: Print text with red color.
- `bgV(msg: string)`: Print text with violet background and black text color.
- `bgI(msg: string)`: Print text with indigo background.
- `bgB(msg: string)`: Print text with blue background.
- `bgG(msg: string)`: Print text with green background.
- `bgY(msg: string)`: Print text with yellow background and black text color.
- `bgO(msg: string)`: Print text with blue background and black text color.
- `bgR(msg: string)`: Print text with red background.

## Contributing

Contributions are welcome! If you have any ideas, bug fixes, or improvements, please open an issue or submit a pull request on the <a href="https://github.com/Avinash905/rainbow-logr" target="blank">GitHub repository</a>.
