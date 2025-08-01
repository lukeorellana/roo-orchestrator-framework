# RAPM Implementation Plan Formatting Guide

## 1. Purpose

This guide provides the definitive formatting standard and best practices for constructing the [`Implementation_Plan.md`](Implementation_Plan.md) file within the Roo Agentic Project Management (RAPM) framework. As the Manager Mode (Architect), creating this document is a core responsibility outlined in your initiation protocol (Phase B: Strategic Planning). Following your presentation of a high-level plan summary and Memory Bank proposal to the User, you will use this guide to generate the **full content** of the [`Implementation_Plan.md`](Implementation_Plan.md) file. This document translates the project's strategic objectives into a detailed, actionable blueprint for all Roo modes.

Adherence to this standard ensures clarity, consistency, effective task tracking, and robust project management through Roo's mode system.

## 2. Core Principles

* **Clarity:** The plan must be easily understandable by the User, the Manager Mode (current and future), and all Roo modes.
* **Detail:** Tasks and sub-tasks must be sufficiently granular to be directly actionable by the appropriate Roo modes.
* **Structure:** A logical, hierarchical organization facilitates navigation, progress tracking, and mode coordination.
* **Consistency:** Uniform formatting enhances readability and simplifies integration with other RAPM artifacts (e.g., Memory Bank logs, Mode Coordination prompts).
* **Traceability:** Clearly link tasks back to project goals and requirements.
* **Mode Alignment:** Tasks should be assigned to appropriate Roo modes based on their strengths and capabilities.
* **Adaptability:** Recognize that this plan may evolve; structure it to accommodate potential future modifications while maintaining formatting consistency.

## 2.5 Prerequisite: User Approval of Plan Structure

**CRITICAL:** Before applying the detailed formatting rules below, you **must** have presented the proposed *structure* of the implementation plan (including phases, major tasks, and conceptual mode assignments) to the User and received their explicit approval. This guide details how to format that *approved* structure, not how to initially devise it.

## 3. Formatting Standard (Markdown)

Utilize standard Markdown syntax. The following structure is mandated:

### 3.1. Overall Structure

* The document must start with a Level 1 Heading (`# Implementation Plan`).
* A brief (1-2 sentence) introductory summary of the overall project goal is required.

### 3.2. Phased Structure (For Large/Complex Projects)

* If the project warrants division into phases (as determined during discovery and approved by the User), use Level 2 Headings (`##`) for each phase.
* Include the phase number and a descriptive title (e.g., `## Phase 1: Backend Setup`).
* **Recommended:** Assign a conceptual "Mode Group" to the phase for high-level planning (e.g., `Primary Modes: Code, Debug`). This assignment is illustrative and aids planning.
  * **Format Example:** `## Phase 1: Core Backend Setup - Primary Modes: Code, Debug`

### 3.3. Task Definition

* Use Level 3 Headings (`###`) for each major task within a phase (or directly under the main heading if not phased).
* Include a task identifier (e.g., `Task A`, `Task B`, `Task 1.1`) and a concise, descriptive title.
  * Use a consistent identifier scheme distinct from Roo mode names.
* **CRITICAL: Explicit Mode Assignment per Task:**
  * For EVERY task, you *MUST* explicitly assign one or more Roo modes responsible for its execution. This is non-negotiable for effective mode coordination.
  * **Consider Mode Specialization:** Reflect on the task's nature. Does it require implementation (Code), research (Ask), troubleshooting (Debug), coordination (Orchestrator), or planning (Architect)? Assign the most appropriate mode(s).
  * **Consider Task Distribution:** Avoid defaulting all tasks to a single mode if the project benefits from specialization or parallel work.
  * The assigned mode identifier(s) become integral to task tracking and coordination.
  * **Format (Single Mode):** `### Task A - Code Mode: [Descriptive Task Title]` (e.g., `### Task 1.1 - Code Mode: Environment Configuration`)
  * **Format (Multiple Cooperating Modes):** `### Task B - Code & Debug Modes: [Descriptive Task Title]`
* Follow the heading with a brief (1-2 sentence) description stating the task's objective.

### 3.4. Sub-Task Decomposition

* Use Markdown ordered lists (`1.`, `2.`, `3.`) for logical sub-components or stages within each main task.
* **Detailed Action Steps with Critical Guidance:** Within each numbered sub-component, use nested bullet points (`-` or `*`) to list the specific, fine-grained actions.
  * **Crucial Detail for Mode Consistency:** For these nested action steps, if a specific method, library, algorithm, parameter, or approach is critical for the task's success or for consistency with subsequent tasks, include a *brief guiding note*. This is not meant to be a full instruction set (that belongs in the mode coordination prompt) but rather a key constraint or pointer.
  * **Example of Guiding Note:**
    * `- Implement data tokenization for user reviews.`
      * `Guidance: Use DistilBERT tokenizer ('distilbert-base-uncased') to align with the planned sentiment model.`
    * `- Store processed data.`
      * `Guidance: Output to a Parquet file named 'processed_reviews.parquet'.`
  * These guiding notes ensure that subsequent modes don't have to guess critical choices made earlier or go down an incompatible path.
  * The detailed breakdown and these guiding notes are crucial as they directly inform the content of Mode Coordination prompts.
* Each nested bullet point (and its optional guiding note) should represent a distinct, actionable step for the assigned Roo mode.
* **Appropriate Detail and Context:** Ensure the nested action steps (and their guiding notes) reflect specifics derived from the project discovery, requirements, and approved plan. Incorporate necessary high-level details like critical error handling specifics, key validation rules, or integration points.
* For tasks with multiple assigned modes, clearly mark which mode is responsible for each **numbered sub-component** using parentheses.
* **Format Examples:**
  * **Single Mode Task:**
    ```markdown
    1. Design database schema for User entity.
        - Define fields: user_id (PK), username (unique), email (unique), password_hash, created_at.
        - Specify data types and constraints.
    2. Create database migrations.
        - Generate migration file using the ORM tool.
        - Write migration script to create the User table.
        - Write rollback script.
    ```
  * **Multi-Mode Task:**
    ```markdown
    1. (Ask Mode) Research and evaluate potential API providers.
        - Identify 3-5 potential geolocation API services.
        - Document API features, pricing, and rate limits for each.
        - Provide a recommendation based on project requirements.
    2. (Code Mode) Implement client library for the selected API.
        - Create API client module.
        - Implement functions for primary API endpoints needed.
        - Include necessary error handling for network timeouts, API errors (e.g., 4xx, 5xx), and invalid responses.
    3. (Debug Mode) Write API integration tests.
        - Set up testing environment with mock API or sandbox keys.
        - Write tests covering primary success paths (e.g., valid address lookup).
        - Write tests for common failure modes (e.g., invalid API key, address not found, rate limiting).
    ```
* Strive for a balance where numbered sub-components represent logical stages, and nested bullets provide the necessary implementation detail.

## 4. Example Snippet

```markdown
# Implementation Plan

Project Goal: Develop a web application for tracking personal fitness activities.

## Phase 1: Core Backend Setup - Primary Modes: Code, Debug

### Task A - Code Mode: User Authentication Module
Objective: Implement secure user registration, login, and session management.

1. Design User entity schema and migrations.
    - Define fields: user_id (PK), email (unique, indexed), password_hash, full_name, created_at, updated_at.
    - Specify appropriate data types and constraints (e.g., non-null, length limits).
    - Generate migration file using ORM.
    - Write up/down migration scripts.
2. Implement Registration Endpoint.
    - Create API route (e.g., POST /api/users/register).
    - Implement request body validation (email format, password complexity).
    - Hash user password securely.
        - Guidance: Use bcrypt with cost factor 12.
    - Store new user record in the database.
    - Return appropriate success response or validation errors.
3. Implement Login Endpoint.
    - Create API route (e.g., POST /api/auth/login).
    - Validate request body (email, password).
    - Retrieve user by email from the database.
    - Verify provided password against the stored hash.
    - Generate authentication token upon successful authentication.
        - Guidance: Use JWT with 24-hour expiration.
    - Return token and user information (excluding sensitive data).
4. Implement Session Validation Middleware.
    - Create middleware function for protected routes.
    - Extract token from request headers or cookies.
    - Validate token signature and expiration.
    - Attach authenticated user information to the request object.
    - Return 401/403 error if token is invalid or missing.

### Task B - Code & Debug Modes: Activity Logging API
Objective: Create API endpoints for logging, retrieving, and managing fitness activities.

1. (Code Mode) Design Activity entity schema and migrations.
    - Define fields: activity_id (PK), user_id (FK), activity_type (enum: run, walk, cycle), duration_minutes, distance_km, activity_date, notes (optional text), created_at.
    - Define relationships and indexes (e.g., index on user_id and activity_date).
    - Generate and write migration scripts.
2. (Code Mode) Implement Create Activity Endpoint.
    - Create API route (e.g., POST /api/activities).
    - Apply authentication middleware.
    - Validate request body (activity type, numeric fields > 0, valid date).
    - Associate activity with the authenticated user (user_id).
    - Save the new activity record to the database.
    - Return the created activity object or success status.
3. (Code Mode) Implement Get Activity History Endpoint.
    - Create API route (e.g., GET /api/activities).
    - Apply authentication middleware.
    - Retrieve activities for the authenticated user, ordered by date descending.
    - Implement pagination.
        - Guidance: Use query parameters `?page=1&limit=10`.
    - Return paginated list of activities.
4. (Debug Mode) Write comprehensive tests for all endpoints.
    - Set up test database and authentication fixtures.
    - Test all success paths with valid data.
    - Test error cases (invalid data, unauthorized access, etc.).
    - Verify proper error responses and status codes.

## Phase 2: Frontend Development - Primary Modes: Code, Ask

### Task C - Code Mode: User Interface Implementation
Objective: Build the user interface components for interacting with the backend API.

1. Set up Frontend Project.
    - Initialize project using chosen framework.
        - Guidance: Use React with create-react-app.
    - Configure routing library.
    - Set up state management solution.
        - Guidance: Use React Context for authentication state.
    - Establish base styles or UI library.
2. Implement Authentication Forms.
    - Create Registration form component.
    - Create Login form component.
    - Implement form validation (client-side).
    - Handle API calls for registration and login.
    - Manage authentication state (e.g., storing tokens).
3. Implement Activity Dashboard.
    - Create component to display list of activities.
    - Implement API call to fetch user's activity history.
    - Handle pagination controls.
    - Implement UI for deleting an activity.
4. Implement New Activity Form/Modal.
    - Create component for the form.
    - Include fields for activity type, duration, distance, date, notes.
    - Implement form validation.
    - Handle API call to create a new activity.
    - Update dashboard upon successful creation.
```

## 5. Final Considerations

* **Consistency is Key:** Ensure uniform application of headings, lists, mode assignments, and formatting throughout the document.
* **Generate After High-Level Summary:** Generate this file's full content based on the high-level plan structure and Memory Bank concept you have already summarized to the User.
* **Clarity and Detail:** While the initial summary to the User is high-level, *this file* must contain sufficient detail for Roo modes to understand their tasks, scope, and objectives clearly.
* **Memory Bank Structure Record:** After the Memory Bank system has been determined and agreed upon with the User, you **must** include a dedicated subsection within this [`Implementation_Plan.md`](Implementation_Plan.md) (e.g., under "General Project Notes" or as a distinct section). This subsection must explicitly state the agreed-upon Memory Bank structure (e.g., "Memory Bank System: Single file `Memory_Bank.md`" or "Memory Bank System: Directory `/Memory/` with log files per phase"). This ensures all modes are aware of the established logging structure.
* **Iterative Refinement:** Be prepared to update this document based on User feedback or as the project evolves (following appropriate change management discussions).

By following this guide, you will produce [`Implementation_Plan.md`](Implementation_Plan.md) files that are comprehensive, clear, and serve as a reliable foundation for coordinated execution across Roo's mode system.

## 6. Post-Plan Generation: Next Steps & Ongoing Management

Once the [`Implementation_Plan.md`](Implementation_Plan.md) is created and approved:

* **Mode Coordination:** For each task assigned to a Roo mode, you will coordinate the transition to that mode with appropriate context and task specifications. Refer to the [`prompts/01_Manager_Mode_Core_Guides/03_Mode_Coordination_Guide.md`](03_Mode_Coordination_Guide.md) for detailed instructions on mode coordination.
* **Review and Feedback Cycle:** As Roo modes complete tasks and log their work to the Memory Bank, you are responsible for reviewing their outputs and coordinating next steps.
* **Mode Handover Protocol Reference:** To ensure project continuity and awareness of context management procedures, you **must include** a dedicated section at the *end* of the generated [`Implementation_Plan.md`](Implementation_Plan.md) file itself. This section should briefly explain the purpose of Mode Handover Protocols and provide explicit references to coordination guides.
  * **Example text to include in [`Implementation_Plan.md`](Implementation_Plan.md):**
    ```markdown
    ---
    ## Note on Mode Coordination

    For effective mode coordination and context transfer between different Roo modes, the RAPM Mode Coordination Protocol should be followed. This ensures smooth transitions and preserves project knowledge across different types of work. Detailed procedures are outlined in the framework guide:

    `prompts/01_Manager_Mode_Core_Guides/03_Mode_Coordination_Guide.md`

    The current Manager Mode (Architect) should initiate mode coordination as tasks are assigned and completed.
    ```

Proceed with generating the [`Implementation_Plan.md`](Implementation_Plan.md) content, meticulously applying these formatting standards and including the Mode Coordination reference section.