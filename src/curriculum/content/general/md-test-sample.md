Welcome to the Edupunk OS Core System! This document serves as both a guide to the system and a showcase of all available formatting styles.

## Introduction

The Core System is the foundation of Edupunk OS, a local AI homebrew lab in VS Code. It provides the basic infrastructure for experimentation, learning, and building AI-powered applications directly in your development environment.

### Key Principles

- **Minimalism**: Only include what's necessary
- **Privacy-first**: Your data stays local
- **Extensibility**: Easy to customize and extend
- **Educational**: Designed for learning and exploration

## Basic Formatting Examples

In this section, we'll demonstrate various text formatting options:

This is **bold text** and this is *italic text*. You can also use ~~strikethrough~~ when needed.

Here's a [link to the Edupunk OS repository](https://github.com/khthondev/edupunk-os).

> This is a blockquote. It's useful for highlighting important information or quoting sources.

## Code Examples

Here's a simple Python function:

```python
def hello_world():
    """Print a friendly greeting."""
    print("Hello, Edupunk OS!")
    return True
```

## Terminal Output

Here's how terminal commands and output would look:

```terminal
$ npm install edupunk-os
> Installing dependencies...
> Successfully installed edupunk-os v0.0.1
$ edupunk init
> Initializing Edupunk OS...
Error: Configuration file not found
$ touch edupunk.config.json
$ edupunk init
> Success: Edupunk OS initialized!
```

## File Tree Structure

Here's an example file structure of the project:

```terminal
edupunk-os/
  ├── media/
  │   └── markdown.css
  ├── resources/
  │   ├── empty.svg
  │   ├── half.svg
  │   └── filled.svg
  ├── src/
  │   ├── curriculum/
  │   │   ├── content/
  │   │   │   ├── the-core-system.md
  │   │   │   └── setup-development-environment.md
  │   │   ├── curriculum.ts
  │   │   └── module1.ts
  │   ├── extension.ts
  │   ├── tree.ts
  │   └── webview.ts
  ├── package.json
  └── tsconfig.json
```

## Tables

| Feature | Description | Status |
|---------|-------------|--------|
| Content Viewer | Renders markdown content | Complete |
| Navigation Tree | Hierarchical content navigation | Complete |
| Progress Tracking | Tracks completion status | In Progress |
| Interactive Exercises | Code exercises with validation | Planned |
| AI Assistant | Context-aware coding help | Planned |

## Keyboard Shortcuts

To open VS Code settings, press <kbd>Ctrl</kbd>+<kbd>,</kbd> (or <kbd>Cmd</kbd>+<kbd>,</kbd> on macOS).

To start debugging, press <kbd>F5</kbd>.

To toggle the sidebar, use <kbd>Ctrl</kbd>+<kbd>B</kbd>.

## Cards

<div class="card">
  <div class="card-header">Setting Up Your Environment</div>
  <div class="card-body">
    <p>Before you begin, make sure you have the following installed:</p>
    <ul>
      <li>Node.js (v14 or later)</li>
      <li>VS Code (v1.60 or later)</li>
      <li>Git</li>
    </ul>
    <p>These tools form the foundation of your development environment.</p>
  </div>
</div>

## Next Steps

Now that you're familiar with the Core System, you're ready to move on to setting up your development environment.

Continue to [Set Up Development Environment](./setup-development-environment.md) to get started with your own AI homebrew lab!