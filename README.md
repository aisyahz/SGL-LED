# SGL Lumina — Premium Digital LED Displays Portal
### Architectural Project Document & System Schematic (AI-to-AI Integration Spec)

This document maps the complete file structure, business logic, visual specifications, and mathematical matrices of the **SGL Lumina** React application. It is designed so that other developers or downstream AI models (such as GPT-4, Claude, or Gemini) can instantly comprehend the app structure, visual design rules, and core calculations.

---

## 1. Visual Paradigm: The "Editorial Aesthetic"
This application is styled with a custom, high-contrast **Editorial & Swiss-Modern Tech theme** built over **Tailwind CSS**. It rejects generic "AI slop" widgets in favor of rigorous typography, generous negative space, and architectural honesty.

### Key Design Pillars:
*   **Palette**: Main background is absolute pure deep slate (`#05070a`). Contrast offsets use borders of subtle white opacity (`border-white/10` or `border-white/5`), backed by deep pitch black cards.
*   **Color Accents**: Core active indicators utilize bright cyan (`#22d3ee` / `text-cyan-400`) and royal-cobalt blue (`#2563eb`) to simulate realistic LED light emissions.
*   **Typography Pairing**:
    *   **Display & Headings**: *Outfit* / *Inter* set to high-weight tracking bounds (`font-black tracking-tighter uppercase leading-none`).
    *   **Metadata & Indicators**: *JetBrains Mono* for engineering diagnostic numbers, resolution prefixes, and system parameters (e.g., `//` or custom tags).
*   **Physical Simplicity**: Zero rounded buttons; instead, clean `rounded-none` borders with elegant micro-hover transitions (`transition-all duration-300`).
*   **Ambient Light Simulation**: Gentle background radial gradients representing light emissions:
    *   Top right ambient blue: `bg-blue-600/5 blur-[120px]`
    *   Bottom left ambient purple: `bg-purple-900/5 blur-[100px]`

---

## 2. Directory Map & File Anatomy

The codebase is organized in a highly modular pattern to prevent unified context bloat. Here is the physical tree:

```text
/src
├── assets/
│   └── images/
│         ├── logo.png                          # AI-generated sleek SGL vector master-brand logo on flat solid black background
│         ├── hero_indoor_led_...jpg            # UHD resolution mock installations
│         ├── hero_mall_led_...jpg              # Vivid retail signage mock image
│         └── hero_outdoor_billboard_...jpg     # Mega high-nits billboard display
├── components/
│         ├── Navbar.tsx                        # Global premium header displaying SGL PRO badge and enterprise-grade indicators
│         ├── HeroSlider.tsx                    # Top immersive interactive presentation covering three custom projects with responsive timers
│         ├── ProductCatalog.tsx                # Hardware showcase presenting premium series (Corporate, Retail, Outdoor)
│         ├── ProductCalculator.tsx             # Interactive physical simulator scale grid and pixel pitch dynamics
│         ├── CasePortfolio.tsx                 # Detailed engineering case study walkthrough with localized Malaysian projects
│         ├── TechUSPSection.tsx                # Core specifications on Common Cathode, COB Protection, and 7680Hz drivers
│         ├── CertificationSection.tsx          # Real standards alignment (ISO 9001:2015, CE safety, RoHS components)
│         ├── LeadCaptureBanner.tsx             # High-conversion terminal banner for senior structural layout bids
│         ├── Footer.tsx                        # Legal metadata, Petronas Towers KLCC address registry, and technical indexes
│         └── ConsultationDialog.tsx            # Full interactive custom modal calculating live estimate pricing models
├── App.tsx                                     # Primary component staging sections, modal states, and navigation routes
├── types.ts                                    # Central TypeScript schema definitions for strong static engineering typing
├── index.css                                   # Main entry importing Tailwind with bespoke classes (e.g. .editorial-button-primary)
├── vite-env.d.ts                               # Standard client bundle type reference mappings
└── main.tsx                                    # DOM mounter entrypoint (Standard React 18 / Vite wrapper)
```

---

## 3. Mathematical Models & Diagnostic Business Logic

### A. The SGL Core Estimation Formula
Inside `ConsultationDialog.tsx` and `ProductCalculator.tsx`, custom commercial valuation equations represent physical Malaysian hardware rates (typically exceeding RM100,000 threshold values).

*   **Variables**:
    *   $\text{Width } (W)$ in meters
    *   $\text{Height } (H)$ in meters
    *   $\text{Base Project Parameter } (C_M)$ of Selected Application Mode Series:
        *   `Corporate`: Base cost coefficient of **RM 12,500** per sqm.
        *   `Retail`: Base cost coefficient of **RM 9,800** per sqm.
        *   `Outdoor`: Base cost coefficient of **RM 14,000** per sqm.
    *   $\text{Pitch Multiplier } (P_M)$ based on Pixel Pitch (Narrower pitch increases semiconductor count drastically):
        *   `P0.9` or similar narrow pitch: multiplier $\times 2.8$
        *   `P1.2` / `P1.5` / `P1.8`: multiplier $\times 1.8$ to $2.2$
        *   `P2.5`: multiplier $\times 1.4$
        *   `P4.0` / `P10.0` (Outdoor): multiplier $\times 1.0$

$$\text{Estimated Project Cost (RM)} = (W \times H) \times C_M \times P_M$$

### B. Display Diagnostics Mapping
*   **Pixel Count Formula**:
    $$\text{Horizontal Pixels} = \frac{W \times 1000}{Pitch}, \quad \text{Vertical Pixels} = \frac{H \times 1000}{Pitch}$$
    $$\text{Total Pixels (Millions)} = \frac{\text{Horizontal Pixels} \times \text{Vertical Pixels}}{1,000,000}$$
*   **Static Solid Weight**:
    $$\text{Total Kg} = W \times H \times 28 \text{ Kg/sqm} \quad (\text{For standard magnesium alloy frame panels})$$
*   **Electricity Consumption**:
    $$\text{Peak Draw (kW)} = W \times H \times 0.85 \text{ kW/sqm}$$
    $$\text{Average Load (kW)} = \text{Peak Draw} \times 0.40$$

### C. Viewing Distance Sweet-Spots
*   **Minimum Fusing Clearance**:
    $$\text{Minimum Distance (meters)} = Pitch \times 1.5$$
*   **Dynamic Architectural Sweet Spot bounds**:
    $$\text{Min Sweet Spot} = Pitch \times 2.0, \quad \text{Max Sweet Spot} = Pitch \times 6.0$$

---

## 4. Key Component Interfaces & State Handlers

| Component | State & Interaction Handlers | Structural Layout Pattern |
| :--- | :--- | :--- |
| **`Navbar`** | Track scroll-threshold state (`scrolled`), Toggle hamburger panel on mobile layouts (`mobileMenuOpen`). | Desktop flex layout with custom dual-row inline metadata taglines. |
| **`HeroSlider`** | Carousel slide index tracking (`index`), custom CSS linear animation bar representing time remaining ($7000$ms ticks). | Large absolute grid block showing double full-button primary editorial layouts. |
| **`ProductCalculator`** | Numerical slider parameters for width/height scale bounds; state synchronization on active pitch array buttons. | Dual column side-by-side: Parameter control dashboard on the left; physical human 1.8m silhouette vector scale coordinate on the right. |
| **`CasePortfolio`** | Multi-case select state handler (`selectedCaseId`), rendering customized structural challenges for Malaysian enterprises. | Tabbed modular lists with responsive layout matrices indicating specific client solutions. |
| **`ConsultationDialog`** | State-controlled inputs (`name`, `email`, `company`, `phone`, `width`, `height`, `message`). Integrated state `isSubmitted`. | Overlay backdrop using `motion.div` transitions, with custom auto-calculation metrics mapped inline. |

---

## 5. System Deployment & Environmental Constraints
*   **Port & Frame Handling**: Serves exclusively behind standard Nginx routing on local context host `0.0.0.0` inside containerized cloud instances.
*   **Bundler Directives**: Styled natively inside Vite with Tailwind. Custom CSS extensions (such as premium custom scrollbars and custom webfont assets) are located directly inside `src/index.css` under global layers.
*   **Reflective Accents**: Interactive component cards use `.led-reflection-glow` CSS configurations to dynamically bounce accent tints depending on selection choices.

---

Use this design blueprint as a target specification mapping! It contains all mathematical constants, layout variables, typography tokens, and CSS identifiers required to replicate, refactor, or query the **SGL Lumina** engineering dashboard.
