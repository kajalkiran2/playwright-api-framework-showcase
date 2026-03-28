# 🚀 Playwright API Automation Framework (Showcase)

![CI](https://github.com/kajalkiran2/playwright-api-framework-showcase/actions/workflows/playwright.yml/badge.svg)

## 📌 Overview
A clean and scalable API automation framework built with Playwright and TypeScript.

This showcase project demonstrates a layered SDET-style architecture with:

    - Centralized HTTP abstraction
    - Config-driven retry strategy
    - Service & scenario-based test design
    - Clean separation of infrastructure and business logic
    - CI-ready structure

This project emphasizes clean architectural design, maintainability, and scalable API test automation practices.

---

## 🏗 Architecture Overview
The framework follows a clean layered architecture:

Core → Services → Scenarios → Tests

🔹 Core Layer
    Handles HTTP communication and retry strategy.
    Infrastructure concerns are centralized here.

🔹 Service Layer
    Encapsulates API endpoints and abstracts raw HTTP calls.

🔹 Scenario Layer
    Represents business workflows and test flows.

🔹 Test Layer
    Validates business behavior using clean, scenario-based execution.

This separation ensures:

    - Maintainability
    - Scalability
    - Reusability
    - Clear responsibility boundaries   

---     

## ✨ Key Features

- Layered Architecture (Core → Services → Scenarios → Tests)
- Centralized API Client
- Retry mechanism for 5XX server errors
- Configurable retry count & delay
- Environment-driven configuration
- Clean dependency injection
- CI-ready structure (GitHub Actions)
- HTML reports (Playwright default)

---

## 🚀 CI/CD

This project uses **GitHub Actions** to automatically execute the Playwright API test suite.

The pipeline performs:

- Install dependencies
- Execute API tests
- Upload Playwright HTML reports as artifacts

Tests run automatically on:
- Push to the main branch
- Pull requests
- Scheduled nightly execution

---

## 🔁 Retry Strategy

Retry logic is implemented within the `ApiClient`, centralizing resiliency handling at the infrastructure layer.

- Retries only for 5XX server errors
- Configurable retry count
- Configurable retry delay
- Prevents test flakiness caused by transient server failures

This ensures consistent and reusable resiliency behavior across all services.

---

## 📐 Contract Validation (Design Consideration)

In a full-scale implementation, this framework can be extended to support contract validation, including:

- Request payload validation
- Response schema validation
- Path and query parameter validation

This ensures API contract compliance and helps detect data inconsistencies early.

The showcase version intentionally keeps this implementation minimal while focusing on architectural clarity.

---

## 🛠 Tech Stack

- **Playwright (API testing)**
- **TypeScript (Type safety & scalable structure)**
- **Node.js**
- **GitHub Actions (CI/CD)**
- **Git (SSH based setup)**

---

## 🏗 Project Structure

```
playwright-api-framework-showcase/
│
├── src/
│   ├── config/        # Environment & endpoint configuration
│   ├── core/          # ApiClient with retry strategy
│   ├── services/      # API service abstraction
│   ├── scenarios/     # Business workflow layer
│   └── utils/         # Test data generator
│
├── tests/
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

---

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js (v16+ recommended)
- npm
- Git

Verify:
    - node -v
    - npm -v
    - git --version

---

## 📦 Installation

- git clone <your-repo-url>
- cd playwright-api-framework-showcase
- npm install
- npx playwright install (only required if using UI testing)

---

## ⚙️ Environment Configuration

This framework uses environment variables for configuration.

Create a `.env` file in the root directory:

---

## ▶️ Run Tests

- Run all tests: `npx playwright test`

- Run specific test file: `npx playwright test tests/[fileName]`

- View HTML report: `npx playwright show-report`

---

## 🎯 Design Rationale

This framework prioritizes:

- Clear separation of concerns
- Infrastructure abstraction
- Business workflow encapsulation
- Scalability for growing API suites

The showcase version intentionally keeps implementation minimal while preserving architectural integrity.

---

## 👩‍💻 Author

**Kajal Kiran Panigrahi**
