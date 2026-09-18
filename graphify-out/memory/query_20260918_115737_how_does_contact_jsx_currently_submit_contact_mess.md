---
type: "query"
date: "2026-09-18T11:57:37.778567+00:00"
question: "How does Contact.jsx currently submit contact messages, and which files depend on the Resend API endpoint?"
contributor: "graphify"
source_nodes: ["Contact.jsx", "Contact()", "App.jsx"]
---

# Q: How does Contact.jsx currently submit contact messages, and which files depend on the Resend API endpoint?

## Answer

The React contact form now submits directly to Formspree form xzezzzob through @formspree/react. Contact.jsx uses useForm for submission state, ValidationError for field feedback, clears the controlled fields after success, and retains the _gotcha honeypot. The old api/contact.js Resend endpoint and .env.example Resend configuration were removed. package.json and package-lock.json now include @formspree/react, and index.css styles Formspree field errors.

## Source Nodes

- Contact.jsx
- Contact()
- App.jsx