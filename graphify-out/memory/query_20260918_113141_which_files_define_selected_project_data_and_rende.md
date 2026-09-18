---
type: "query"
date: "2026-09-18T11:31:41.463111+00:00"
question: "Which files define selected project data and render the selected work collection?"
contributor: "graphify"
source_nodes: ["myProjects", "Projects.jsx", "Projects()", "App.jsx"]
---

# Q: Which files define selected project data and render the selected work collection?

## Answer

The selected-project records live in src/constant/index.js as myProjects, and src/sections/Projects.jsx imports and renders that collection. App.jsx includes Projects in the portfolio page.

## Source Nodes

- myProjects
- Projects.jsx
- Projects()
- App.jsx