# 🚀 Playwright API Automation Framework (Showcase)

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

- ✅ Layered Architecture (Core → Services → Scenarios → Tests)
- ✅ Centralized API Client
- ✅ Retry mechanism for 5XX server errors
- ✅ Configurable retry count & delay
- ✅ Environment-driven configuration
- ✅ Clean dependency injection
- ✅ CI-ready structure (GitHub Actions)
- ✅ HTML reports (Playwright default)

---

## 🔁 Retry Strategy

Retry logic is implemented within the `ApiClient`, centralizing resiliency handling at the infrastructure layer.

- Retries only for 5XX server errors
- Configurable retry count
- Configurable retry delay
- Prevents test flakiness caused by transient server failures

This ensures consistent and reusable resiliency behavior across all services.

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
- npx playwright install

---

## ▶️ Run Tests

- Run all tests: `npx playwright test`

- Run specific test file: `npx playwright test tests/[fileName]`

- View HTML report: `npx playwright show-report`

---

## 🚀 CI/CD

The framework is designed to integrate with GitHub Actions.

Typical CI flow:

    1. Checkout code
    2. Setup Node
    3. Install dependencies
    4. Install Playwright browsers
    5. Execute test suite

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
