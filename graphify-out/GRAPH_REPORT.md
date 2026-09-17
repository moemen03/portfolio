# Graph Report - src  (2026-09-17)

## Corpus Check
- 75 files · ~248,269 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 93 nodes · 104 edges · 19 communities (18 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Navigation and Projects|Navigation and Projects]]
- [[_COMMUNITY_Motion and Contact|Motion and Contact]]
- [[_COMMUNITY_App Structure|App Structure]]
- [[_COMMUNITY_Experience and Skills|Experience and Skills]]

## God Nodes (most connected - your core abstractions)
1. `styles` - 4 edges
2. `textVariant()` - 3 edges
3. `slideIn()` - 3 edges
4. `staggerContainer()` - 3 edges
5. `Experience()` - 2 edges
6. `Contact()` - 2 edges
7. `StarWrapper()` - 2 edges
8. `navLinks` - 2 edges
9. `myProjects` - 2 edges
10. `technologies` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Experience()` --calls--> `textVariant()`  [EXTRACTED]
  src/sections/Experience.jsx → src/utils/motion.js
- `Contact()` --calls--> `slideIn()`  [EXTRACTED]
  src/sections/Contact.jsx → src/utils/motion.js
- `StarWrapper()` --calls--> `staggerContainer()`  [EXTRACTED]
  src/hoc/SectionWrapper.jsx → src/utils/motion.js

## Communities (19 total, 1 thin omitted)

### Community 0 - "Navigation and Projects"
Cohesion: 0.13
Nodes (5): clientReviews, myProjects, navLinks, testimonials, workExperiences

### Community 2 - "Motion and Contact"
Cohesion: 0.31
Nodes (5): styles, StarWrapper(), Contact(), slideIn(), staggerContainer()

### Community 4 - "Experience and Skills"
Cohesion: 0.25
Nodes (4): experiences, technologies, Experience(), textVariant()

## Knowledge Gaps
- **5 isolated node(s):** `socials`, `roles`, `clientReviews`, `workExperiences`, `testimonials`
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `styles` connect `Motion and Contact` to `Navigation and Projects`, `Experience and Skills`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `textVariant()` connect `Experience and Skills` to `Motion and Contact`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `socials`, `roles`, `clientReviews` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Navigation and Projects` be split into smaller, more focused modules?**
  _Cohesion score 0.1323529411764706 - nodes in this community are weakly interconnected._