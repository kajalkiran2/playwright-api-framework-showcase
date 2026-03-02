# 🚀 Playwright API Automation Framework

## 📌 Overview
A modular and scalable API automation framework built using **Playwright + JavaScript + TypeScript**.  
The framework follows a layered architecture with service abstraction, schema validation, retry mechanism, logging, and CI integration.

This project demonstrates a real-world API test automation design suitable for enterprise-level testing.

---

## ✨ Key Features

- ✅ Layered Architecture (Core → Services → Scenarios → Tests)
- ✅ Retry mechanism for 5XX server errors
- ✅ Schema validation for request & response
- ✅ Centralized API client
- ✅ Logging utility
- ✅ Environment configuration support
- ✅ Clean Git workflow
- ✅ CI/CD integration using GitHub Actions
- ✅ HTML reports (Playwright default reporter)

---

## 🛠 Tech Stack

- **Playwright**
- **JavaScript**
- **TypeScript**
- **Node.js**
- **GitHub Actions (CI/CD)**
- **Git (SSH based setup)**

---

## 🏗 Project Structure
<img width="404" height="308" alt="image" src="https://github.com/user-attachments/assets/f0c23e16-d525-491e-83bc-df2a5fd20806" />

---

## 📋 Prerequisites

Before running this project, ensure you have:

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)
- Git (SSH configured)
- Internet connection (for demo API execution)

Verify installations:
    - node -v
    - npm -v
    - git --version

---

## 📦 Installation

- Clone the repository: <git clone git@github.com 

- Navigate into project folder: <cd playwright-api-automation-framework

- Install dependencies: <npm install

- Install Playwright browsers: <npx playwright install

---

## ▶️ How to Run Tests

- Run all tests: <npx playwright test

- Run specific test file: <npx playwright test tests/[fileName]>

- View HTML report: <npx playwright show-report

## 🔁 Retry Strategy

The framework implements a retry mechanism inside the `ApiClient`:

- Retries only for 5XX server errors
- Configurable retry count
- Configurable retry delay
- Logs retry attempts to detect endpoint flakiness

---

## 📊 Reporting

Playwright default HTML reporter is used.

- Reports are generated in: <playwright-report/

---

## 🚀 CI/CD

GitHub Actions workflow executes API regression suite on every push to `main` branch.

Pipeline Steps:

1. Checkout code
2. Setup Node
3. Install dependencies
4. Install Playwright
5. Execute tests

---

## 👩‍💻 Author

**Kajal Kiran Panigrahi**
