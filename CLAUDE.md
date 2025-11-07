# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

<!-- nx configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# General Guidelines for working with Nx

- When running tasks (for example build, lint, test, e2e, etc.), always prefer running the task through `nx` (i.e. `nx run`, `nx run-many`, `nx affected`) instead of using the underlying tooling directly
- You have access to the Nx MCP server and its tools, use them to help the user
- When answering questions about the repository, use the `nx_workspace` tool first to gain an understanding of the workspace architecture where applicable.
- When working in individual projects, use the `nx_project_details` mcp tool to analyze and understand the specific project structure and dependencies
- For questions around nx configuration, best practices or if you're unsure, use the `nx_docs` tool to get relevant, up-to-date docs. Always use this instead of assuming things about nx configuration
- If the user needs help with an Nx configuration or project graph error, use the `nx_workspace` tool to get any errors


<!-- nx configuration end-->

## Workspace Structure

This is an Nx-powered TypeScript monorepo configured with workspaces. Packages live in the `packages/*` directory.

**Workspace Name:** `@xp/source`

## Common Commands

### Package Management

Generate a new publishable library:
```sh
npx nx g @nx/js:lib packages/<pkg-name> --publishable --importPath=@my-org/<pkg-name>
```

### Building

Build a specific package:
```sh
npx nx build <package-name>
```

Build all packages:
```sh
npx nx run-many -t build
```

Build only affected packages (after changes):
```sh
npx nx affected -t build
```

### Type Checking

Run type checking on a package:
```sh
npx nx typecheck <package-name>
```

### Project Graph & Visualization

Visualize the project graph:
```sh
npx nx graph
```

### TypeScript Project References

Nx automatically syncs TypeScript project references during build/typecheck tasks. To manually sync:
```sh
npx nx sync
```

Check if references are in sync (useful for CI):
```sh
npx nx sync:check
```

### Versioning & Release

Version and release packages:
```sh
npx nx release
```

Dry-run to preview changes:
```sh
npx nx release --dry-run
```

## TypeScript Configuration

- **Strict mode enabled** with comprehensive type checking
- Uses `nodenext` module resolution
- Target: ES2022
- Custom condition: `@xp/source`
- Composite projects with declaration maps enabled
- The root `tsconfig.json` maintains project references automatically managed by Nx

## Code Style

- **Prettier** configured with single quotes
- Format code before committing

## Architecture Notes

- This workspace uses Nx's automatic task inference via the `@nx/js/typescript` plugin
- Tasks like `build`, `typecheck`, `build-deps`, and `watch-deps` are inferred from TypeScript configurations
- Default base branch for affected commands is `master` (configured in nx.json)
