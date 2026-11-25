# Official course content

Source: <https://agentfactory.piaic.org>
Imported: 2026-11-24T22:23:24.150Z
Build: sha256:2cd6f7990b973aac2ccc6b57c326777d36e2c68032baeb1bfa1cbf50cd487c4a
Documents: 460
Exact full-source SHA-256: 523e965d0c57f7577dbda52cbd1227a0eb3be10e0204bce111baec8ed5c8e735
Verbatim document block SHA-256: 572ab375ca94f78f0a8d3c0302b08c111440bba03048e90628b205ca34554f7c
Mapped images: 437/437

Every file in `docs/` is the verbatim Markdown block from the official
`/llms-full.txt` bundle, including front matter, relative links, footnotes,
tables and code fences. No lesson text was rewritten or translated.

If the site is unavailable, download `/llms.txt` and `/llms-full.txt` from
the official source and rerun:

```bash
npm run import:course -- --llms-file /path/to/llms.txt --full-file /path/to/llms-full.txt --no-assets
```

With `--no-assets`, image references remain in the Markdown and the reader
attributes them to the official source instead of loading remote images.
