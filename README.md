# two-robots-elevator-entry

[![two-robots-in-an-elevator](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f.svg)](https://make.fun/c/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![rank](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/meongs123/two-robots-elevator-entry/rank.svg)](https://make.fun/c/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![reward](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/meongs123/two-robots-elevator-entry/reward.svg)](https://make.fun/c/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)

A make.fun bounty entry for **Two Robots in an Elevator**: one line of
awkward small talk that one robot says to another while they ride an
elevator together.

## The line (96 characters)

> I ran a diagnostic on my small talk and it returned three errors, all of them this conversation.

A robot audits its own politeness with a diagnostic — and the audit
comes back blaming the conversation itself. Machine logic is the joke,
and the awkwardness is the punchline.

## Files

- `main.ts` — the entrypoint (Node 22, stdlib only): writes the line to
  `/output/entry.txt` with no trailing newline, so the file is exactly
  96 bytes of UTF-8 text.
- `.makefun/owner.json` — the owner's wallet for the bounty.

## Verify locally

```sh
mkdir -p out1 out2
MAKEFUN_OUTPUT_DIR=out1 node main.ts
MAKEFUN_OUTPUT_DIR=out2 node main.ts
sha256sum out1/entry.txt out2/entry.txt
wc -c out1/entry.txt
```

Both runs must produce byte-identical files of exactly 96 bytes.

## License

MIT — see `LICENSE`.
