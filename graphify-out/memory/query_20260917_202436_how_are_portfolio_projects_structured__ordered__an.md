---
type: "query"
date: "2026-09-17T20:24:36.978152+00:00"
question: "How are portfolio projects structured, ordered, and rendered, including their media assets?"
contributor: "graphify"
source_nodes: ["myProjects", "Projects.jsx", "DemoComputer.jsx"]
---

# Q: How are portfolio projects structured, ordered, and rendered, including their media assets?

## Answer

Projects are ordered by their array position in myProjects in src/constant/index.js and rendered by Projects.jsx. The selected entry supplies text, logo treatment, spotlight, tags, optional availability, screenshots, and the video texture passed into DemoComputer.jsx.

## Source Nodes

- myProjects
- Projects.jsx
- DemoComputer.jsx