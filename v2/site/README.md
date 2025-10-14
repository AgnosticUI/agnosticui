# AgnosticUI v2 Docs Site

This is very much a WIP and deploy notes etc are missing. Refer to the v1 notes here: /Users/roblevin/workspace/opensource/agnosticui/site/README.md
until we get this site finalized and docs updated.

## Workflow
Generally, I make a change to the v2/lib and do:

### In lib/
```shell
npm run build && npm pack
```

### In site/
```shell
npm run reinstall:lib # Clears cache. Note the version is hard coded for now!
npm run docs:dev
```
