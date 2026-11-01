# Prathamesh Chandekar — Developer Portfolio

A responsive, animated portfolio showcasing my experience, backend engineering skills, selected projects, and learning journey.

**Live website:** https://pratham1c1.github.io/Portfolio/

---

## About the website

This portfolio is designed to present my work as a Java Backend Developer, with an emphasis on building APIs, designing services, working with data, and understanding distributed systems.

Rather than presenting skills and projects as a static résumé, the website brings them together through an interactive experience:

- A focused introduction and career timeline.
- A categorized skills showcase covering backend engineering and the wider development stack.
- Project cards that describe the problem space, architecture, and technologies used.
- An animated **Tech Wall** that groups technologies and engineering practices into visual cards.
- Education, certifications, achievements, and contact information.
- A downloadable copy of my latest résumé.

## Website sections

| Section | What you'll find |
|---|---|
| **Home** | Introduction, role focus, and links to explore the portfolio. |
| **Experience** | Career timeline featuring my experience at Oracle and Turtlemint. |
| **Skills** | A categorized overview of languages, backend technologies, databases, messaging, cloud, DevOps, testing, and engineering practices. |
| **Projects** | Selected work, with E-commerce Microservices featured first, followed by GameJam Platform and enterprise projects. |
| **Tech Wall** | An animated, card-based view of the technologies and concepts I have worked with. |
| **Credentials** | Education, certifications, and achievements. |
| **About** | A short introduction to my engineering interests and approach. |

## Tech Wall — skills overview

The Tech Wall groups my skills into focused categories so visitors can quickly understand the areas I work with.

- **Java & JVM:** Java 8 / 11 / 17, Core Java, Streams, Lambdas, Collections, Multithreading, Generics.
- **Backend Engineering:** Spring Boot, Spring MVC, Spring Security, JPA / Hibernate, REST APIs, Design Patterns.
- **Distributed Systems:** Microservices, Apache Kafka, Redis, API Gateway, Eureka, OpenFeign.
- **Databases & Search:** Oracle SQL, Query Optimization, MySQL, PostgreSQL, MongoDB, pgvector.
- **Cloud & DevOps:** Oracle Cloud Infrastructure (OCI), Docker, Kubernetes, Jenkins, GitHub Actions, CI/CD.
- **AI & GenAI:** RAG, LLMs, Spring AI, Ollama, Vector Embeddings, Prompt Engineering.
- **Testing & Quality:** JUnit 5, Mockito, JMeter, Integration Testing, SonarCloud, Postman, Swagger.
- **Frontend & Tools:** JavaScript, React, HTML, CSS, Git, IntelliJ.
- **Engineering Practices:** System Design, SOLID Principles, Agile / Scrum, API Design, Microservices Architecture.

The Tech Wall is intended as a visual overview; individual technologies are not presented as equal levels of expertise.

## Featured projects

### 01 — E-commerce Microservices

A monolith-to-microservices migration that separates core commerce domains into independently deployable services.

**Technologies:** Spring Boot, Eureka, OpenFeign, API Gateway, JWT, Kafka, Spring AI, PostgreSQL / pgvector.

### 02 — GameJam Platform

A community platform for creating, uploading, and discovering games, with a React frontend and Spring Boot backend.

**Technologies:** React, Spring Boot, MongoDB, GridFS, JWT.

### 03 — Template Configuration Automation

A self-service template configuration workflow for financial adjustments, integrating identity validation, data mapping, and asynchronous status updates.

## Technology stack

| Area | Technologies |
|---|---|
| UI | React, JavaScript, HTML, CSS |
| Build tooling | Vite |
| Animation | GSAP, ScrollTrigger, Motion for React |
| Hosting | GitHub Pages |
| Delivery | GitHub Actions |

The website is a static frontend. It does not require a backend service, database, or application secrets to run.

## Run locally

### Prerequisites

- Node.js 20 or later (Node.js 22 recommended)
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/pratham1c1/Portfolio.git

# Enter the project directory
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

## Build and preview

Create an optimized production build:

```bash
npm run build
```

Vite generates the production website in the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## Connect with me

- **Portfolio:** https://pratham1c1.github.io/Portfolio/
- **GitHub:** https://github.com/pratham1c1
- **LinkedIn:** https://www.linkedin.com/in/prathamesh-chandekar/
- **LeetCode:** https://leetcode.com/u/user5591sk/
- **Email:** prathamchandra2001@gmail.com

---

*Designed with curiosity. Built with intention.*
