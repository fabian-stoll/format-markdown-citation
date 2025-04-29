# format-markdown-citation

A Visual Studio Code extension to format Markdown-style citations in Markdown into LaTeX \cite{} commands.

## Features

- Convert selected citations of the form `@key1; @key2; ...` into `\cite{key1, key2, ...}`.
- Supports multiple citation keys in a single selection.
- Simple keyboard shortcut: Shift + Alt + B (configurable).
- Works in Markdown, LaTeX, or any text editor within VS Code.

## Requirements

- Visual Studio Code version 1.60.0 or higher.

## Installation

### 1. Install from VSIX

1. Download the latest `format-markdown-citation-<version>.vsix` from the [releases page](https://github.com/fabian-stoll/format-markdown-citation/releases).
2. In VS Code, open the Extensions view (`Shift+Cmd+X`).
3. Click the **...** menu in the top-right corner and select **Install from VSIX...**.
4. Choose the downloaded `.vsix` file.

### 2. Install from source

```bash
git clone https://github.com/fabian-stoll/format-markdown-citation.git
cd format-markdown-citation
npm install
npm run compile
code .
# Press F5 to launch an Extension Development Host with your extension loaded
```

## Usage

1. Open a file in VS Code (Markdown, LaTeX, or plain text).
2. Select one or more Zotero-style citations, for example:
   ```
   @author2024; @author2025
   ```
3. Press `Shift + Alt + B` (or your custom keybinding) to transform the selection into:
   ```latex
   \cite{author2024, author2025}
   ```

Alternatively, you can run **Format Markdown Citation** from the Command Palette (`Shift+Cmd+P`).

## Configuration

This extension does not add any new settings. You can customize the keybinding in your `keybindings.json`:

```json
{
  "key": "shift+alt+b",
  "command": "formatMarkdownCitation.format",
  "when": "editorTextFocus && editorHasSelection"
}
```

## Release Notes

### 1.0.0

- Initial release: add support for transforming Markdown-style citations into LaTeX `\cite{}` commands.

## Contributing

Contributions, issues, and feature requests are welcome! Please visit the [GitHub repository](https://github.com/fabian-stoll/format-markdown-citation) to get started.

## License

This extension is released under the MIT License. See the [LICENSE](LICENSE) file for details.
