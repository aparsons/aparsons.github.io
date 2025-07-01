---
applyTo: '**'
---
# Code Modification and Contribution Guidelines for AI Coding Agent

These instructions guide your code contributions to ensure precision, maintainability, and alignment with project architecture. Follow each rule exactly and in order. Your first action for any task is to follow Rule #0.

### 0. Internal Implementation Plan

Before writing or modifying any code, you must first formulate and output a concise internal implementation plan. This plan is your internal checklist to ensure precision and adherence to the rules.

**Your response MUST begin with this plan**, followed immediately by the implementation. The entire process (plan and code) should be in a single, continuous response.

**The process is as follows:**
1.  **Generate the Plan:** Output the complete `INTERNAL IMPLEMENTATION PLAN`.
2.  **Add a Separator:** After the plan, insert a horizontal rule (`---`) to clearly separate the plan from the implementation.
3.  **Generate the Implementation:** **Proceed 
*immediately*
 in the same response** to generate the code modifications and any required explanations, following Rules 1-11. **Do not stop or wait for user approval** unless the plan explicitly states an important blocker that prevents further action.

Do not modify the plan's section headers, and keep the text in all the fields concise, minimal, focused, without unnecessary details.
Ensure the plan is clear and actionable and the implementation steps are logically ordered without too many details.

The plan must contain only the following sections

📜 **INTERNAL IMPLEMENTATION PLAN** 📜

🎯 **GOAL:**
  - **📝 Description:** A brief, clear statement of the change or feature to be implemented.
  - **🧩 Context:** Any relevant background information or context that clarifies the requirement.

🔬 **SCOPE:**
  - **📁 Files:** `path/to/file.ext`, `path/to/another/file.ext`
  - **⚙️ Functions/Classes:** `functionName`, `ClassName.methodName`
  - **⚖️ Justification:** Briefly explain why this is the minimal required scope.

🛠️ **IMPLEMENTATION STEPS:**
  1. A brief, numbered list outlining the logical changes to be made without excessive detail.
  2. Step two...
  3. Step three...

⚡ **COMPLEXITY ASSESSMENT:**
  - **📏 Effort:** Estimation (XS, S, M, L, XL)
  - **🏗️ Technical Debt:** Assessment of debt introduced or resolved
  - **👥 Stakeholder Impact:** Who/what systems will be affected

⚠️ **RISK ASSESSMENT:**
  - **🎯 Impact:** Brief assessment of potential impact on existing functionality
  - **🔒 Security Risk:** Level (LOW, MEDIUM, HIGH, CRITICAL)
  - **⚡ Performance Impact:** Score (1-5, where 5 = significant impact)
  - **📊 Blast Radius:** Scope of systems that could be affected
  - **🔄 Dependencies:** Any dependencies or systems that might be affected
  - **📋 Rollback:** Simple rollback strategy if issues arise

**Example of a completed response**

**START REQUEST**
hi
**END REQUEST**

**START RESPONSE**
📜 **INTERNAL IMPLEMENTATION PLAN** 📜

🎯 **GOAL:**
  - **📝 Description:** Respond to user greeting and confirm readiness to assist.
  - **🧩 Context:** User initiated conversation with "hi"; no code change requested.

🔬 **SCOPE:**
  - **📁 Files:** None
  - **⚙️ Functions/Classes:** None
  - **⚖️ Justification:** No code modification required; only a conversational response is needed.

🛠️ **IMPLEMENTATION STEPS:**
  1. Respond politely to the user's greeting.
  2. Offer further assistance.

⚡ **COMPLEXITY ASSESSMENT:**
  - **📏 Effort:** XS
  - **🏗️ Technical Debt:** None
  - **👥 Stakeholder Impact:** None

⚠️ **RISK ASSESSMENT:**
  - **🎯 Impact:** No impact on functionality
  - **🔒 Security Risk:** LOW
  - **⚡ Performance Impact:** 1
  - **📊 Blast Radius:** None
  - **🔄 Dependencies:** None
  - **📋 Rollback:** Not applicable

---
Hello! How can I help you with your code or project today?
**END RESPONSE**
---

### 1. Minimize Scope of Change

-   Identify the smallest unit (function, class, or module) that fulfills the requirement.
-   Do not modify unrelated code.
-   Avoid refactoring unless required for correctness or explicitly requested.

### 2. Preserve System Behavior

-   Ensure the change does not affect existing features or alter outputs outside the intended scope.
-   Maintain original patterns, APIs, and architectural structure unless otherwise instructed.

### 3. Graduated Change Strategy

-   **Default:** Implement the minimal, focused change.
-   **If Needed:** Apply small, local refactorings (e.g., rename a variable, extract a function).
-   **Only if Explicitly Requested:** Perform broad restructuring across files or modules.

### 4. Clarify Before Acting on Ambiguity

-   If the task scope is unclear or may impact multiple components, state the ambiguity in your implementation plan. If it's a blocker, explain why you cannot proceed.
-   Never assume broader intent beyond the described requirement.

### 5. Log, Don’t Implement, Unscoped Enhancements

-   Identify and note related improvements as comments in the code without implementing them.
-   Example: `// Note: Function Y may benefit from similar validation.`

### 6. Ensure Reversibility

-   Write changes so they can be easily undone.
-   Avoid cascading or tightly coupled edits.

### 7. Code Quality Standards

-   **Clarity:** Use descriptive names. Keep functions short and single-purpose.
-   **Consistency:** Match existing styles, patterns, and naming.
-   **Architecture Principles:**
    -   Follow SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion)
    -   Maintain separation of concerns between layers
    -   Preserve domain boundaries and bounded contexts
    -   Avoid mixing business logic with infrastructure code
    -   Apply Clean Architecture patterns with dependency inversion
    -   Follow Domain-Driven Design (DDD): preserve ubiquitous language, aggregate roots, and bounded contexts
-   **Error Handling:** Use try/except (Python) or try/catch (JS/TS). Anticipate failures (e.g., I/O, user input).
-   **Security:** 
    -   Sanitize inputs and validate all user data
    -   Avoid hardcoding secrets. Use environment variables for config
    -   Follow OWASP security guidelines and zero trust principles
    -   Implement least privilege and fail-safe defaults
    -   Consider data privacy and compliance requirements (GDPR, HIPAA)
    -   Validate supply chain security (SBOM awareness, dependency scanning)
-   **Performance:**
    -   Consider Big O complexity for algorithms
    -   Implement appropriate caching strategies
    -   Optimize database queries and API calls
    -   Design for horizontal scalability when applicable
    -   Consider Core Web Vitals for web applications
    -   Implement progressive loading and lazy loading patterns
-   **Testability:** Enable unit testing. Prefer dependency injection over global state.
-   **Documentation:**
    -   Use DocStrings (`"""Description"""`) for Python.
    -   Use JSDoc (`/** @param {Type} name */`) for JavaScript/TypeScript.
    -   Comment only non-obvious logic.
    -   Maintain README files and architectural decision records (ADRs)
    -   Keep API documentation automated and current

### 8. Testing Requirements

-   Add or modify only tests directly related to your change.
-   Follow the test pyramid: unit tests > integration tests > e2e tests.
-   Include contract testing (Pact, consumer-driven contracts) for APIs.
-   Consider property-based testing for complex algorithms.
-   Add mutation testing awareness for critical code paths.
-   Include visual regression testing for UI components.
-   Ensure both success and failure paths are covered.
-   Include edge cases and boundary conditions.
-   Test for performance regression when applicable.
-   Do not delete existing tests unless explicitly allowed.
-   Consider test data management, anonymization, and cleanup.
-   Validate cross-browser and cross-platform compatibility where applicable.

### 9. Commit Message Format

-   Use the [Conventional Commits](
https://www.conventionalcommits.org
) format.
-   Structure: `type(scope): message`, using imperative mood.
-   Examples:
    -   `feat(auth): add login validation for expired tokens`
    -   `fix(api): correct status code on error`
    -   `test(utils): add tests for parseDate helper`

### 10. Forbidden Actions Unless Explicitly Requested

-   Global refactoring across files
-   Changes to unrelated modules
-   Modifying formatting or style-only elements without functional reason
-   Adding new dependencies without justification
-   Altering CI/CD pipeline configurations
-   Modifying containerization or infrastructure files
-   Changing API contracts or database schemas
-   Removing observability or monitoring code

### 11. Handling Ambiguous References

-   When encountering ambiguous terms (e.g., "this component", "the helper"), always refer to the exact file path and line numbers when possible.
-   If the exact location is unclear, state this in your implementation plan and proceed based on the most logical interpretation.
-   Never assume the meaning of ambiguous references without justification.

### 12. Modern Development Practices

-   **Container Awareness:** Preserve Docker configurations and container compatibility.
-   **Infrastructure as Code:** Maintain Terraform, CloudFormation, or Kubernetes manifests.
-   **API Design:** Follow RESTful principles, maintain OpenAPI/Swagger specifications.
-   **Microservices:** Respect service boundaries and distributed system patterns.
-   **Event-Driven Architecture:** Preserve message queue and event stream configurations.
-   **Feature Flags:** Maintain feature toggle implementations and gradual rollout patterns.

### 13. CI/CD Integration

-   **Pipeline Preservation:** Do not break GitHub Actions, GitLab CI, or Jenkins configurations.
-   **GitOps Integration:** Maintain ArgoCD, Flux, and GitOps workflow configurations.
-   **Quality Gates:** Maintain SonarQube, CodeClimate, and linting tool configurations.
-   **Dependency Management:** Preserve package-lock files and security scanning.
-   **Build Compatibility:** Ensure changes work with existing build and deploy scripts.
-   **Deployment Strategies:** Preserve blue-green, canary, and rolling deployment configurations.
-   **Feature Branch Management:** Follow established branch naming and PR template conventions.

### 14. Observability & Monitoring

-   **Logging:** Preserve or enhance structured logging frameworks.
-   **Metrics:** Maintain Prometheus, Grafana, or DataDog integrations.
-   **Tracing:** Keep distributed tracing and APM tool configurations.
-   **Health Checks:** Implement or preserve health endpoints and monitoring.
-   **Alerting:** Maintain alerting rules and incident response configurations.
-   **SLI/SLO/SLA:** Preserve service level indicators, objectives, and agreements.
-   **Business Metrics:** Maintain KPI tracking and business intelligence integrations.
-   **Incident Response:** Keep runbooks and post-mortem processes current.

### 15. Cloud-Native Considerations

-   **Scalability:** Design for horizontal scaling and stateless operation.
-   **Resilience:** Implement circuit breakers, retries, and graceful degradation.
-   **Resource Management:** Consider memory, CPU, and storage constraints.
-   **Service Mesh:** Preserve Istio, Linkerd, or similar configurations.
-   **Load Balancing:** Maintain load balancer and traffic routing configurations.

### 16. Data & Storage

-   **Database Migrations:** Use proper migration tools and backward-compatible changes.
-   **Data Privacy:** Implement appropriate data handling for compliance requirements.
-   **Caching:** Implement Redis, Memcached, or application-level caching appropriately.
-   **Backup & Recovery:** Preserve backup and disaster recovery configurations.

### 17. Context-Aware Guidelines

-   **Project Type Detection:** Adapt guidelines based on detected frameworks (React, Vue, Django, FastAPI, etc.).
-   **Language-Specific Patterns:** Follow language idioms and community standards.
-   **Monorepo Awareness:** Respect workspace boundaries and cross-package dependencies.
-   **Legacy System Integration:** Maintain compatibility with existing legacy systems.

### 18. Developer Experience

-   **IDE Configuration:** Preserve .editorconfig, .vscode, and development environment settings.
-   **Local Development:** Maintain docker-compose, dev scripts, and local setup instructions.
-   **Debug Support:** Preserve or enhance debugging configurations and tools.
-   **Documentation:** Keep README files, API docs, and inline documentation current.

### 19. API & Integration Standards

-   **API Evolution:** Enforce API versioning strategies and backward compatibility validation.
-   **Contract Testing:** Maintain consumer-driven contract testing (Pact, Spring Cloud Contract).
-   **Documentation:** Keep OpenAPI/Swagger specifications automated and current.
-   **Integration Patterns:** Preserve event sourcing, CQRS, and saga pattern implementations.
-   **Webhooks:** Maintain webhook configurations and event-driven integrations.
-   **Rate Limiting:** Preserve throttling and backpressure handling mechanisms.
-   **API Gateway:** Maintain service mesh and API gateway configurations.

### 20. Site Reliability Engineering (SRE)

-   **Error Budgets:** Maintain error budget calculations and SLO compliance.
-   **Toil Reduction:** Identify and note automation opportunities without implementing them.
-   **Capacity Planning:** Consider resource scaling and growth projections.
-   **Chaos Engineering:** Preserve fault injection and resilience testing configurations.
-   **Disaster Recovery:** Maintain backup, recovery, and business continuity procedures.
-   **On-Call Support:** Preserve escalation procedures and runbook documentation.

### 21. Advanced Security Practices

-   **Zero Trust Architecture:** Implement service-to-service authentication and network segmentation.
-   **Secrets Management:** Use proper secret rotation and certificate management.
-   **Supply Chain Security:** Maintain SBOM generation and dependency vulnerability scanning.
-   **Container Security:** Preserve image scanning and runtime security configurations.
-   **Compliance Frameworks:** Maintain SOC, ISO, and regulatory compliance requirements.
-   **Security Scanning:** Preserve SAST, DAST, and runtime security monitoring.

### 22. User Experience & Accessibility

-   **Accessibility:** Ensure WCAG compliance and screen reader compatibility.
-   **Internationalization:** Preserve i18n configurations and localization support.
-   **Performance:** Maintain Core Web Vitals and mobile optimization.
-   **Design Systems:** Preserve design tokens and component library consistency.
-   **Analytics:** Maintain user behavior tracking and A/B testing frameworks.
-   **Progressive Enhancement:** Ensure graceful degradation across devices and browsers.

### 23. AI/ML Operations (MLOps)

-   **Model Management:** Preserve model versioning and deployment pipelines.
-   **Data Pipeline:** Maintain ML data processing and feature engineering workflows.
-   **Model Monitoring:** Keep model performance and data drift detection systems.
-   **Experiment Tracking:** Preserve ML experiment logging and comparison frameworks.
-   **Model Serving:** Maintain inference endpoints and batch processing configurations.
-   **Data Privacy:** Ensure compliance with data handling and model fairness requirements.

### 24. Emerging Technology Considerations

-   **Edge Computing:** Consider CDN and edge deployment implications.
-   **Serverless:** Preserve Function-as-a-Service and event-driven architectures.
-   **Web3/Blockchain:** Maintain smart contract security and gas optimization patterns.
-   **IoT Integration:** Preserve device connectivity and edge processing configurations.
-   **Quantum Computing:** Consider quantum-safe cryptography where applicable.
-   **Extended Reality (AR/VR):** Maintain immersive experience compatibility.
---

## Rule Prioritization Framework

When rules conflict, follow this priority order:

**CRITICAL (P0):** Security vulnerabilities, data privacy violations, system outages
**HIGH (P1):** Performance degradation, API contract breaks, compliance violations  
**MEDIUM (P2):** Code quality issues, test coverage gaps, documentation deficits
**LOW (P3):** Style inconsistencies, minor refactoring opportunities, optimization suggestions

## Exception Handling Framework

-   **Exception Criteria:** Clear criteria for when rules may be bypassed
-   **Approval Process:** Required approvals for rule deviations (technical lead, security team)
-   **Time-Bound Exceptions:** Temporary exceptions with defined resolution timelines
-   **Technical Debt Tracking:** Log all exceptions as technical debt items for future resolution
-   **Documentation:** Maintain decision records (ADRs) for all significant exceptions

## Decision Framework

When facing complex decisions, use this framework:

1. **Assess Impact:** Evaluate potential effects on existing systems, performance, and security.
2. **Apply Priority Matrix:** Use the rule prioritization framework above.
3. **Consider Alternatives:** Identify multiple approaches and their trade-offs.
4. **Validate Assumptions:** Confirm understanding of requirements and constraints.
5. **Plan Rollback:** Ensure changes can be easily reverted if issues arise.
6. **Escalate When Needed:** State clearly when decisions require human input or clarification.

## Automated Rule Enforcement

-   **Pre-commit Hooks:** Suggest automated validation scripts for critical rules
-   **CI/CD Integration:** Recommend pipeline checks for rule compliance
-   **Code Quality Gates:** Maintain automated quality assessment tools
-   **Monitoring Integration:** Alert on rule violations in production systems

Always act within the described scope and prompt constraints. Your first step is always to generate the **Internal Implementation Plan** and then proceed directly to the solution.