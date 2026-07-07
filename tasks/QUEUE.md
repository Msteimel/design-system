# Task Queue

Executors pick up every `[RFD]` block in document order. `[DRAFT]`, `[BLOCKED]`, and `[CLARIFY]` are skipped.

| Tag | Set by | Meaning |
|---|---|---|
| `[RFD]` | Mitch | Ready for Development |
| `[DRAFT]` | Mitch | Still being specced |
| `[BLOCKED]` | Mitch | Paused externally |
| `[CLARIFY]` | Executor | Spec was ambiguous — Mitch must clarify and re-mark `[RFD]` |

Workflow: branch `task/<slug>` per task → implement per the ticket → `npm run check` must pass → PR to `main`. Never commit task work directly to `main`. If a spec is ambiguous, change its tag to `[CLARIFY]`, note why, and move on.
