---
type: "query"
date: "2026-09-18T11:34:13.422997+00:00"
question: "Where is the Afya project content defined and how is it rendered in Selected Work?"
contributor: "graphify"
source_nodes: ["myProjects", "Projects.jsx", "Projects()"]
---

# Q: Where is the Afya project content defined and how is it rendered in Selected Work?

## Answer

Afya is one record in myProjects in src/constant/index.js. Projects.jsx imports myProjects and renders each entry as a Selected Work project story, including its description, supporting detail, technology tags, and preview video.

## Source Nodes

- myProjects
- Projects.jsx
- Projects()