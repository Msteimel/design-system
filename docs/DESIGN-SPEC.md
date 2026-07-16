# Design Spec — Figma Design Phase

**Status:** active · started 2026-07-16
**Owner:** Mitch (hand-designed in Figma — that's the point)
**Tracker:** Todoist project "Design System — Figma"

This is the inventory the Figma design pass works against: token tiers, typography decisions, and the component list. Tasty Tomes is the first lens — every entry cites the real usage it generalizes — but **nothing here is named after the domain**. The system must serve personal-compass and future apps unchanged.

**Source of truth:** Figma. The token seed already in `src/tokens/` and the Button/Text/Card components (phases 1–3) were a code-first bootstrap; once Figma values land, the package gets reconciled to Figma — not the other way around. Known seed divergences to reconcile are flagged inline below.

## Principles

- **Generic names only.** The DS never learns domain words. App-specific components (Tasty Tomes' `RoleBadge`, `RecipeLineage`) stay in the app as thin mappers that consume DS components — `RoleBadge` mapping a role to a `Badge` variant is the model.
- **Tokens first, three tiers.** Components reference semantic tokens; semantic tokens reference primitives. Component-level tokens exist only by exception.
- **Light first, dark ready.** The semantic tier is built so dark mode is purely a value swap. The dark mode column exists in Figma variables from day one; tuning its values is deferred, not skipped.
- **Variants over conditionals.** Every visual state is an explicit variant in the component API, designed as an explicit variant in Figma.

---

## 1. Token architecture

### 1.1 Primitive tier

Raw values with no meaning attached. Components never reference these directly. One Figma variable collection.

| Group | Scope | Notes / evidence from the lens app |
|---|---|---|
| Color ramps | 1 neutral + 1 brand + 4 status hues (green / amber / blue / red), ~10 steps each | Status hues match the shipped 4-slot status families. Brand ramp is a Figma decision — today "brand" is just near-black. |
| Space | 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 (px) | Matches the package seed and Tailwind's steps. Add 2 if micro-gaps show up in design. |
| Radius | ~4 steps + full | **Seed divergence:** package has 6 / 12 / 20 / full; the lens app derives sm–xl from a 10px base (6 / 8 / 10 / 14). Pick one ramp in Figma. |
| Type primitives | families, size scale, weights, line-heights, tracking | Detailed in §2. **Seed divergence:** package `fontSizes` (lg 20, xl 24, 2xl 32, 3xl 48) don't match the web scale in use (lg 18, xl 20, 2xl 24, 3xl 30). |
| Elevation | ~4 shadow steps | App uses ad-hoc `shadow-sm` ×12, `md` ×9, `xl` ×5, `lg` ×2 with **zero tokens**. Proposed: 0 flat · 1 resting card · 2 raised/hover · 3 overlay. |
| Z-index | ~6 named layers | Only raw `z-40` (header) and `z-50` (modal/popover) exist today. Proposed: base · raised · sticky · scrim · modal · popover · toast. |
| Motion | duration set (fast ~120ms, base ~200ms, slow ~300ms) + easing set (standard, enter, exit) | App uses bare `transition-*` utilities with default timing — no tokens anywhere. |
| Container widths | consolidate to ~3: narrow (auth/forms), content, wide | App scatters six values: `max-w-sm/md/2xl/3xl/4xl/6xl`. Proposed: ~28rem / ~56rem / ~72rem. |
| Opacity | small step set: disabled, scrim, subtle | Evidence: `bg-black/50` scrim, `muted-foreground/30` dashed borders, disabled at 50%. |
| Breakpoints | adopt Tailwind's (sm 640 / md 768 / lg 1024 / xl 1280) | Don't invent a scale; both consumer apps are Tailwind-family. |

### 1.2 Semantic tier

The theme-able layer — every slot gets a **light and dark** value (dark untuned for now). Names are **deliberately TBD**: this vocabulary is Mitch's to define in Figma, then the package seed (`surface`/`text.primary`) and the lens app's shadcn names (`background`/`foreground`/`muted`) both map onto it.

**Slots that need names:**

| Group | Slots |
|---|---|
| Surfaces | page · raised (card/panel) · sunken (subtle fill rows) · overlay (popover/dialog) |
| Text | primary · secondary · muted/disabled · inverse · on-action |
| Actions | action rest · action hover · action active · on-action · subtle-action fill · hover-wash |
| Borders | default · strong · input · focus-ring |
| Links | link · link-hover |
| Status ×4 (success / warning / info / danger) | foreground · surface · border · on-surface — keep this proven 4-slot family shape |
| Overlay | scrim |

**Naming-direction examples** (inspiration only — the decision is a tracked task):

| Slot | shadcn-ish (today) | ink & paper | descriptive |
|---|---|---|---|
| page surface | `background` | `paper` | `canvas` |
| raised surface | `card` | `paper-raised` | `surface-raised` |
| primary text | `foreground` | `ink` | `text-primary` |
| default border | `border` | `stroke` | `border-default` |
| action rest | `primary` | `action` | `interactive` |

### 1.3 Component tier

Deliberately thin. A component token exists **only** when a component must diverge from a semantic value (e.g. a component-specific padding that isn't on the space scale — which is itself a smell). Rule of thumb: if you're about to create one, first ask whether the semantic tier is missing a slot. No pre-built list.

---

## 2. Typography

### 2.1 Decisions (tracked as Todoist tasks)

1. **Typeface** — keep Geist Sans/Mono or choose your own pair.
2. **Default body size** — `text-sm` (14px) is the de facto workhorse (95 uses vs 2 for `text-base`). Decide: is body 14 or 16?
3. **Consolidate the dual h2** — sections use both `text-3xl font-bold` (×7) and `text-2xl font-bold` (×11). Pick one Heading size.
4. **Responsive sizing** — fluid (clamp) vs stepped per breakpoint.

### 2.2 Role scale (proposed — codifies de facto usage)

Each role becomes one Figma text style (size + weight + line-height composite).

| Role | De facto today (lens app) | Proposed | Notes |
|---|---|---|---|
| Display | `text-5xl font-bold` (hero, ×1) | 48 / bold / tight | |
| Title | `text-4xl font-bold` (×13, page titles) | 36 / bold / tight | The most consistent pattern in the app |
| Heading | `text-3xl` ×7 **and** `text-2xl` ×11, bold | 24 / semibold / tight | Pending decision #3 |
| Card Title | `text-xl font-semibold` (×8) | 20 / semibold / snug | |
| Subheading | `text-lg font-semibold` (×7) | 18 / semibold / snug | |
| Body | `text-base` (×2 — barely used) | 16 / regular / 1.5 | Pending decision #2 |
| Body Small | `text-sm` (×95 — the real body) | 14 / regular / 1.5 | |
| Caption | `text-xs` (×23) | 12 / regular / 1.4 | Card-footer meta, helper text |
| Overline | `text-sm text-gray-500 uppercase tracking-wide` | 12 / medium / uppercase / wide tracking | The metadata-label treatment (stat grids) |
| Stat | `text-4xl font-bold text-{hue}-600` | 36 / bold / 1 | Big numbers; color comes from status/brand tokens, not baked in |

Weights in use: semibold (38) ≈ bold (35) > medium (21). No light/extrabold — keep the weight set to regular / medium / semibold / bold.

---

## 3. Component inventory

Priority runs top to bottom: primitives unblock composites unblock patterns. **Lens** = the real usage each entry generalizes; also serves as the adoption checklist when the lens app migrates.

### 3.0 Foundations (Figma styles & variables, not components)

| Item | Notes |
|---|---|
| Color variables | Primitive + semantic collections per §1 |
| Text styles | Role scale per §2.2 |
| Effect styles | Elevation ramp per §1.1 |
| Grid / layout | Container widths, card-grid columns, page padding rhythm |
| Iconography | **Decision:** standardize on lucide (already in primitives at 16px). Kill the text glyphs (`←` `⠿` `×` `↑↓`) and emoji-as-icons (🎉 ⏱️ 🍽️ 🌍) — 31 occurrences. Define sizes (16 / 20 / 24) and stroke width. |
| Motion | Duration + easing tokens per §1.1 |

### 3.1 Primitives

| Component | Lens (what it generalizes) | Variants & states to design |
|---|---|---|
| Button | `Button` — but danger buttons hand-roll red on `outline` at ~6 sites; the shipped `destructive` variant is never used | primary / secondary / outline / ghost / destructive · sm / md / lg · rest / hover / active / focus / disabled / loading |
| Icon Button | `size="icon"` trio | same variants · 3 sizes · required-label a11y note |
| Link | Raw `text-blue-600 hover:text-blue-800` (ignores the `--link` token) | inline / standalone · rest / hover / focus / visited(?) |
| Text Input | `Input` | rest / focus / invalid / disabled · optional leading icon |
| Textarea | `Textarea` | same states |
| Select | `Select` trigger | default / sm · open / closed · invalid / disabled |
| Checkbox | **Missing** — raw `<input type="checkbox">` at 3 sites | unchecked / checked / indeterminate / disabled + label row |
| Switch | None yet (settings screens will want it) | off / on / disabled |
| Badge | `Badge` | neutral / info / success / warning / danger / outline |
| Chip | SearchBar's removable filter pill (hand-rolled, distinct from Badge) | static / removable / selected(?) |
| Avatar | **Missing** — inline `<Image rounded-full>` on profile, no fallback | image / initials fallback · sm / md / lg |
| Spinner | **Missing** — loading is label-swap only | sm / md · inline & block |
| Skeleton | **Missing** — no loading placeholders anywhere | text / rect / circle |
| Divider | `border-t` / `divide-y` sprinkled around | horizontal / vertical · optional label |
| Card | **Missing as primitive** — `RecipeCard`/`CookbookCard` + profile page re-implements card markup inline | static / interactive (hover elevation) · slots: media / header / body / meta / footer |
| Label | Inside `FormField` only | default / required-marked / disabled |

### 3.2 Composites

| Component | Lens | Variants & states to design |
|---|---|---|
| Form Field | `FormField` (label + control + description + error) | default / error / required |
| Search Input | `SearchBar` (raw blue button + bordered clear) | with submit · with clear · with results-hint row |
| Combobox | `CountryPicker` / `PersonPicker` (Popover + Command) | sync search / async search (loading, empty, create-new inline) |
| Dialog + Confirm Dialog | **The hand-rolled modal** in `CookbookEditForm` + **9 native `confirm()` sites** | sm / md · header + body + footer · Confirm preset: destructive & neutral |
| Toast | **Missing** — feedback is inline green/red text | info / success / warning / danger · with action · dismiss |
| Tabs / Segmented Control | Version-selector toggle links + scale presets (both hand-rolled, same pattern) | segmented (now) · underline tabs (variant, later) · active / inactive / focus |
| Callout | `ErrorAlert` (only error/success today) + the one info panel using info tokens | info / success / warning / danger · optional title, icon, dismiss |
| Empty State | `EmptyState` — but 3 pages hand-roll their own instead | title / +description / +action |
| Page Header | `h1 text-4xl` + subtitle + action-row markup repeated on ~10 pages | title only · +subtitle · +action slot · +back link |
| Back Link / Breadcrumb | `← Back to …` at 6+ sites, raw blue | single-level back (now) · multi-level breadcrumb (later) |
| Stat | Profile's 3 colored tiles + recipe info grid | tile (on surface) / inline · number + label + optional hue |
| Meta List | `<span>`-built label:value rows (recipe footer, detail pages) | horizontal wrap · label + value pairs |
| List Row | The thumbnail + title + action row card, ~3 near-copies | with thumbnail · with action slot · with per-row error |
| File Upload | Raw `<input type="file">` with `file:` pseudo styling | idle / file-chosen / error · constraint hint |
| Image Preview | Ad-hoc `aspect-square` / `aspect-video` previews | square / video aspect · with remove action |
| Menu / Dropdown | **Missing** — header has no user menu, sign-out is a bare form button | menu items · separator · destructive item |

### 3.3 Patterns / templates

| Pattern | Lens | Notes |
|---|---|---|
| App Header | `Header` (sticky, backdrop-blur) | authed / unauthed · uses Menu for the user menu |
| Footer | `Footer` | simple |
| Destructive Action Panel | The ×3 "danger zone" blocks (border-t + red outline button + caption) | pairs with Confirm Dialog |
| Sortable List | `ManageRecipesForm` (drag handle `⠿`, HTML5 DnD, ↑↓ buttons) | keyboard-accessible reorder is the hard part — design it |
| Card Grid | `grid-cols-1 md:2 lg:3 gap-6` ×7 occurrences | layout pattern, gap from space tokens |
| Page Shell / Auth Shell | `container mx-auto px-4 py-8 max-w-*` ×10 pages; auth's `max-w-sm py-16` ×4 | encode the container widths from §1.1 |
| Form Layout | Field stacking, section grouping, submit+cancel row, danger-zone placement | rhythm spec, not a component |

### 3.4 Parked (list only — design later)

Table · Tooltip · Sheet/Drawer · Accordion · Progress · Pagination · Date Picker · Sidebar (tokens shipped with shadcn, never used) · Charts (`--chart-1..5` reserved).

---

## 4. Figma setup

- **Two variable collections:** `primitive` (no modes) → `semantic` (modes: light, dark — dark column present, values untuned).
- **Text styles** from §2.2; **effect styles** from the elevation ramp.
- **One component page per tier** (Primitives / Composites / Patterns), foundations on a cover page.
- Components reference only semantic variables — a primitive reference inside a component is a review flag, mirroring the package's `check:tokens` purity script.
