# TODO: Iran Open Economy Dashboard Development

This document tracks the development process based on the `DESIGN.md`.

## Phase 1: MVP (Minimum Viable Product)

-   [x] Implement the React project structure.
-   [x] Create the basic data JSON file (budget 1403).
-   [x] Design a simple page with interactive bar/pie charts (without complex animations).
-   [x] Simple calculator: "If the rent is removed, how much will my subsidy be?"

## Phase 2: Advanced Visualization

-   [x] Add Three.js/D3.js library.
-   [x] Implement the "Money Cycle" animation model.
-   [x] Add historical data (10-year time series).

## Phase 3: Automation and Participation

-   [x] Complete the documentation for contributors (Data Contribution Guide).
-   [x] Write Python scripts (Scrapers) to automatically fetch some open-source global data.
-   [x] English version for international audiences.

## Other important tasks derived from DESIGN.md

### System Architecture
-   [x] Setup Core with React.js.
-   [x] Integrate D3.js for data flows.
-   [x] Integrate Three.js or React-Spring for animations.
-   [x] Setup static JSON/CSV data management.
-   [x] Configure GitHub Pages for hosting.
-   [x] Configure GitHub Actions for automatic builds.

### Data Strategy
-   [x] Establish data extraction process from Iranian sources (Statistics Center, Central Bank, etc.).
-   [x] Establish data validation process using international sources (World Bank, IMF, OPEC).
-   [x] Finalize the data schema in `/data/economics.json`.
-   [x] Document the contribution workflow (Issue -> PR -> Merge -> Deploy).

### UI/UX Design
-   [x] Design the main dashboard view (refinery/mechanical system metaphor).
-   [x] Design the control panel with interactive sliders.
-   [x] Design the drill-down details section.

### Team Roles & Legal
-   [x] Define and fill team roles (Data Analyst, Frontend Dev, UI/UX Designer, Maintainer).
-   [x] Ensure MIT license is included for the code.
-   [x] Ensure Creative Commons license is applied to data.
