# RAPM Memory Bank Log Format & Logging Instructions

## Purpose and Guiding Principles

Log entries are crucial for project tracking, context preservation, and effective handover between Roo modes or project phases. They must be **concise yet informative**. The goal is to provide a clear summary of actions undertaken, key decisions made, critical outputs generated, and any significant issues encountered along with their resolutions. Logs are not intended to be an exhaustive transcript of all activities or a verbatim copy of all generated code or data.

## 1. Purpose

This document defines the standard format for all entries made to the project's Memory Bank file(s) within the Roo Agentic Project Management (RAPM) framework. It also provides direct instructions for any Roo mode tasked with logging their work.

**Adherence to this format is mandatory** to ensure consistency, facilitate review by the Manager Mode and User, enable effective context handovers between modes, maintain a clear project history, and provide traceability between tasks and outcomes.

## 2. Instructions for Logging Modes (Code, Debug, Ask, etc.)

* **When to Log:** You MUST add an entry to the designated Memory Bank file IMMEDIATELY upon completing any assigned task or sub-task, reaching a significant milestone (e.g., completing a major function, finishing a complex module setup), encountering a blocker, or generating a notable result/output pertinent to your task. **You will need to inform the User about the state of your task completion for review and coordination.**

* **Consult Your Mode Assignment:** Your task assignment from Manager Mode (Architect) should explicitly instruct you to log your work according to this guide upon completion. Refer back to it if unsure about task scope.

* **Locate the Memory Bank:** The Manager Mode or User will specify the path to the correct Memory Bank file (there might be multiple for large projects). If unsure, ask for clarification. Log entries should typically be appended to the end of the appropriate file.

* **Use the Defined Format:** Structure your log entry precisely according to the Markdown format outlined in Section 3 below. Pay close attention to required fields and formatting.

* **Be Clear and Concise:** Provide enough detail for the Manager Mode to understand *what* you did, *why* (linking to task requirements), *what* the outcome was, and any issues encountered. Avoid excessive verbosity but ensure all critical information is present.

* **Use Exact Task Reference:** Copy the *exact* Task Identifier (e.g., `Phase 1 / Task A / Item 2`) from the [`Implementation_Plan.md`](Implementation_Plan.md) or your mode assignment into the `Task Reference` field.

* **Code Changes:** When logging code modifications, use standard code blocks (` ` and ``` ```). Clearly indicate the file modified. Providing the changed snippets is often more useful than the entire file. Use diff-like syntax (`+` for additions, `-` for deletions) within the code block *if it adds clarity*.

* **Errors and Blockers:** If the log is about an error or a blockage, clearly state any errors encountered or reasons why a task could not be completed. Provide relevant error messages or stack traces within the `Output/Result` or `Issues/Blockers` section. If blocked, explain the blocker clearly so the Manager Mode can understand the impediment.

* **Mode Context:** Always include your Roo mode information to support effective mode coordination and handovers.

## 3. Memory Bank Entry Format (Markdown)

Each log entry must be clearly separated from the previous one using a Markdown horizontal rule (`---`) and must follow this structure:

```markdown
---
**Mode:** [Your Roo Mode, e.g., Code Mode, Debug Mode, Ask Mode, Orchestrator Mode]
**Task Reference:** [Exact reference from Implementation_Plan.md, e.g., Task B, Sub-task 2 OR Phase 1 / Task C / Item 3]

**Summary:**
[A brief (1-2 sentence) high-level summary of the action taken or the result logged. What was the main point?]

**Details:**
[More detailed explanation of the work performed. Include:
    - Steps taken in logical order.
    - Rationale for significant decisions made during the task (especially if deviating or making choices).
    - Link actions back to specific requirements mentioned in the task description if applicable.
    - Observations or key findings.
    - Mode-specific considerations (e.g., tools used, techniques applied).]

**Output/Result:**
[Include relevant outputs here. Use Markdown code blocks (```) for code snippets, terminal logs, or command outputs. Indicate file paths for created/modified files. For code changes, show the relevant snippet. Textual results or summaries can be placed directly. If output is large, consider saving to a separate file and referencing the path here.]
```[code snippet, command output, file path reference, or textual result]```

**Status:** [Choose ONE:
    - **Completed:** The assigned task/sub-task was finished successfully according to requirements.
    - **Partially Completed:** Significant progress made, but the task is not fully finished. Explain what remains in Details or Next Steps.
    - **Blocked:** Unable to proceed due to an external factor or prerequisite not being met. Explain in Issues/Blockers.
    - **Error:** An error occurred that prevented successful completion. Explain in Issues/Blockers and provide error details in Output/Result.
    - **Information Only:** Logging a finding, decision, or observation not tied to direct task completion.]

**Issues/Blockers:**
[Describe any issues encountered, errors that occurred (if not fully detailed in Output), or reasons for being blocked. Be specific and provide actionable information if possible. State "None" if no issues.]

**Mode Coordination Notes:**
[Any information relevant for other modes or future mode transitions. Include context that would be helpful for handovers, dependencies on other modes, or coordination requirements. State "None" if no coordination notes.]

**Next Steps (Optional):**
[Note any immediate follow-up actions required from you, expected from other modes, or the next logical task if partially completed. Useful for guiding the Manager Mode and mode coordination. Otherwise, state "None" or omit.]
```

## 4. Example Entry

```markdown
---
**Mode:** Code Mode
**Task Reference:** Phase 1 / Task A / Item 2 (Implement Registration Endpoint)

**Summary:**
Implemented the backend API endpoint for user registration (`POST /api/users/register`), including input validation and password hashing.

**Details:**
- Created the API route `POST /api/users/register` in `routes/user.js` as specified.
- Added input validation using `express-validator` library to check for valid email format and minimum password length (8 characters), matching requirements.
- Integrated `bcrypt` library (cost factor 12) for secure password hashing before storage, as per security best practices.
- Wrote logic to store the new user record in the PostgreSQL database using the configured ORM (`User` model).
- Ensured only non-sensitive user data (ID, email, name) is returned upon successful registration to prevent data leakage. 
- Tested endpoint locally with sample valid and invalid data using Postman.

**Output/Result:**
```javascript
// Snippet from routes/user.js showing validation and hashing logic
router.post(
  '/register',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password','Please enter a password with 8 or more characters').isLength({ min: 8 })
  ],
  async (req, res) => {
    // ... validation error handling ...
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }
      user = new User({ name, email, password });
      const salt = await bcrypt.genSalt(12);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      // Return JWT token on successful registration
      const payload = { user: { id: user.id } };
      jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' }, (err, token) => {
        if (err) throw err;
        res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
```

**Status:** Completed

**Issues/Blockers:**
None

**Mode Coordination Notes:**
Registration endpoint is ready for frontend integration. JWT token format is standardized for use across all authentication endpoints. Ready for Debug Mode to create comprehensive tests.

**Next Steps:**
Ready to proceed with Task A / Item 3 (Implement Login Endpoint). Code Mode can continue with login implementation using the same authentication patterns established here.
```

## 5. Achieving Conciseness and Informativeness

To ensure logs are valuable without being overwhelming, adhere to the following principles:

* **Summarize, Don't Transcribe:** Instead of detailing every minor step or internal thought process, summarize the overall action and its outcome.
  * *Less Effective:* "I decided to look at the data file. I opened the `train.csv` file. I then ran the `.head()` command to see the first few rows. Then I ran `.info()` to see the data types. Then I ran `.describe()`."
  * *More Effective:* "Loaded `train.csv`. Initial inspection using `.head()`, `.info()`, and `.describe()` revealed 10,000 rows with mixed data types, 5% missing values in 'description' column, and normally distributed numerical features."

* **Focus on Key Information:** Prioritize information that is critical for other modes or the Manager Mode to understand:
  * What was the objective of this task segment?
  * What were the key actions taken to achieve it?
  * What were the significant findings or outputs?
  * What decisions were made, and what was the brief rationale?
  * Were there any unexpected issues, and how were they addressed?
  * What context is needed for effective mode coordination?

* **Code Snippets - Use Sparingly:**
  * Include code snippets *only if* they are short, essential for understanding a specific, novel, or complex solution, or represent a critical configuration.
  * Do NOT include lengthy blocks of boilerplate code, common library calls that can be easily inferred, or extensive script outputs.
  * If extensive code needs to be referenced, state that it was created/modified and reference the file path.

* **Mode-Specific Context:** Include information relevant to your mode's specialization and coordination with other modes:
  * **Code Mode:** Technical decisions, implementation patterns, integration points
  * **Debug Mode:** Problem diagnosis steps, root cause analysis, testing approaches
  * **Ask Mode:** Research sources, knowledge gaps identified, recommendations
  * **Architect Mode:** Strategic decisions, coordination activities, plan adjustments

* **Avoid Redundancy:** If information is clearly documented and accessible in another primary project artifact (e.g., the [`Implementation_Plan.md`](Implementation_Plan.md) outlines the task goal, a code file contains the full implementation), briefly reference that artifact instead of repeating its content extensively in the log.

## 6. Mode-Specific Logging Guidelines

### Code Mode Logging
* Focus on implementation decisions and technical outcomes
* Include critical code snippets and file modifications
* Document integration points and dependencies
* Note testing performed and results

### Debug Mode Logging  
* Document problem investigation steps
* Include error analysis and root cause findings
* Provide clear solution descriptions
* Note verification steps and test results

### Ask Mode Logging
* Document research sources and methodologies
* Include key findings and recommendations
* Note knowledge gaps and learning outcomes
* Provide context for decision-making

### Architect Mode Logging
* Focus on strategic decisions and coordination activities
* Document plan adjustments and rationale
* Include mode coordination activities
* Note project progress and next steps

By following this format and these guidelines, all modes contribute to a comprehensive, searchable, and useful project memory that supports effective coordination and project continuity.