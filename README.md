# tty

[![Tags](https://img.shields.io/github/release/denosaurs/tty)](https://github.com/denosaurs/tty/releases)
[![CI Status](https://img.shields.io/github/workflow/status/denosaurs/tty/check)](https://github.com/denosaurs/tty/actions)
[![License](https://img.shields.io/github/license/denosaurs/tty)](https://github.com/denosaurs/tty/blob/master/LICENSE)

```typescript
import * as tty from "https://deno.land/x/tty/mod.ts";

await tty.hideCursor();

setInterval(() => {
  tty.clearScreenSync();
  tty.goHomeSync();
  console.log("HELLO WORLD");
}, 200);

await tty.showCursor();
```

## other

### contribution

Pull request, issues and feedback are very welcome. Code style is formatted with deno fmt and commit messages are done following Conventional Commits spec.

### licence

Copyright 2020-present, the denosaurs team. All rights reserved. MIT license.
