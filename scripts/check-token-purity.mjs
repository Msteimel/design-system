// Fails the build if component source contains hardcoded visual values.
// Contract (PLAN.md): every visual value flows through tokens.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const ROOTS = ['src/web', 'src/native']
// hex colors, and numeric px in style-ish positions
const PATTERNS = [
  { re: /#[0-9a-fA-F]{3,8}\b/, why: 'hex color' },
  { re: /\b\d+px\b/, why: 'raw px value' },
]

const failures = []
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) { walk(p); continue }
    if (!/\.(ts|tsx)$/.test(name) || /\.(test|stories)\./.test(name)) continue
    const lines = readFileSync(p, 'utf8').split('\n')
    lines.forEach((line, i) => {
      if (line.includes('token-purity-ignore')) return
      for (const { re, why } of PATTERNS) {
        if (re.test(line)) failures.push(`${p}:${i + 1} — ${why}: ${line.trim()}`)
      }
    })
  }
}
for (const root of ROOTS) if (existsSync(root)) walk(root)

if (failures.length) {
  console.error('Token-purity check failed:\n' + failures.join('\n'))
  process.exit(1)
}
console.log('Token purity: clean')
