# RAPM Data Flow and Task Management Guide

## Data Flow Through Tasks in RAPM

### How Data Passes Between Tasks and Modes

**RAPM uses a structured data flow system** that ensures information continuity across mode transitions and task executions:

## 1. Data Flow Mechanisms

### Primary Data Flow: Memory Bank System
```
Task A (Code Mode) → Memory Bank → Task B (Debug Mode) → Memory Bank → Task C (Code Mode)
```

**How it works:**
1. **Each mode logs outputs** to designated Memory Bank files
2. **Next mode reads relevant logs** before starting work
3. **Context is preserved** through structured logging format
4. **Dependencies are tracked** in Implementation Plan

### Example Data Flow Scenario
```markdown
## User Authentication Implementation Flow

Task A.1 (Code Mode): Database Schema
↓ (outputs to Memory Bank)
- User table structure
- Migration scripts
- Field definitions and constraints

Task A.2 (Code Mode): Registration Endpoint  
↓ (reads Task A.1 outputs + adds own)
- API endpoint implementation
- Uses schema from A.1
- Validation logic
- Password hashing approach

Task A.3 (Debug Mode): Testing & Validation
↓ (reads A.1 + A.2 outputs)
- Test cases using schema and endpoints
- Bug reports and fixes
- Performance metrics

Task A.4 (Ask Mode): Documentation
↓ (reads all previous outputs)
- API documentation
- Implementation guide
- Security considerations
```

## 2. Data Passing Mechanisms

### Method 1: Memory Bank Logs (Primary)
```markdown
---
**Mode:** Code Mode
**Task Reference:** Task A.1 - Database Schema Design

**Output/Result:**
```sql
-- User table schema
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
```

**Data for Next Tasks:**
- Table name: `users`
- Primary key: `id` (SERIAL)
- Email validation: UNIQUE constraint
- Password storage: `password_hash` field (use bcrypt)
```

### Method 2: File References
```markdown
**Output/Result:**
Created files:
- `migrations/001_create_users_table.sql`
- `models/User.js` (Sequelize model)
- `schemas/user-validation.json`

**Usage Notes for Next Tasks:**
- Import User model: `const User = require('./models/User')`
- Validation schema: Use for request validation
- Migration: Run before starting API endpoints
```

### Method 3: Implementation Plan Updates
```markdown
## Task A.1 - COMPLETED ✅
**Deliverables Ready for Next Tasks:**
- [x] User table schema defined
- [x] Migration scripts created
- [x] Model file generated

**Key Data for Task A.2:**
- Table name: `users`
- Model import: `require('./models/User')`
- Validation: Use email format validation
```

## 3. When Tasks Are Split Up

### Task Splitting Triggers

#### Complexity-Based Splitting
```markdown
## Original Task: "Implement Complete User System"

Too complex → Split into:

Task A.1: Database Schema & Models
- User table design
- Relationships definition
- Model creation

Task A.2: Authentication Endpoints  
- Registration endpoint
- Login endpoint
- Password handling

Task A.3: Session Management
- JWT implementation
- Middleware creation
- Token validation

Task A.4: Security & Validation
- Input validation
- Rate limiting
- Security headers
```

#### Mode Specialization Splitting
```markdown
## Original Task: "Fix Performance Issues"

Split by mode specialization:

Task B.1 (Debug Mode): Problem Investigation
- Performance profiling
- Bottleneck identification
- Root cause analysis

Task B.2 (Ask Mode): Solution Research
- Best practices research
- Technology alternatives
- Implementation strategies

Task B.3 (Code Mode): Implementation
- Apply optimizations
- Refactor code
- Add caching

Task B.4 (Debug Mode): Validation
- Performance testing
- Regression testing
- Monitoring setup
```

#### Dependency-Based Splitting
```markdown
## Original Task: "Deploy Application"

Split by dependencies:

Task C.1: Pre-deployment Preparation
- Code review completion
- Test suite passing
- Documentation updates

Task C.2: Infrastructure Setup
- Server configuration
- Database migrations
- Environment variables

Task C.3: Application Deployment
- Code deployment
- Service restart
- Health checks

Task C.4: Post-deployment Validation
- Smoke testing
- Monitoring verification
- Rollback plan validation
```

## 4. Task Splitting Decision Matrix

| Factor | Single Task | Split Tasks |
|--------|-------------|-------------|
| **Complexity** | < 4 hours work | > 4 hours work |
| **Mode Changes** | Single mode | Multiple modes needed |
| **Dependencies** | No blockers | External dependencies |
| **Testability** | Easy to verify | Complex validation needed |
| **Risk Level** | Low risk | High risk/critical path |

### Splitting Guidelines

#### When to Split:
✅ **Different Mode Requirements**
```markdown
Task needs both research (Ask Mode) AND implementation (Code Mode)
→ Split into research task + implementation task
```

✅ **Natural Breakpoints**
```markdown
Task: "Build User Dashboard"
→ Split: "Design Dashboard API" + "Create Frontend Components" + "Integrate with Backend"
```

✅ **Dependency Chains**
```markdown
Task B depends on Task A completion
→ Ensure Task A is complete before Task B starts
```

✅ **Complexity Threshold**
```markdown
Task estimated > 1 day of work
→ Split into smaller, manageable chunks
```

#### When NOT to Split:
❌ **Tightly Coupled Operations**
```markdown
Database schema + migration script creation
→ Keep together (atomic operation)
```

❌ **Simple, Linear Work**
```markdown
Update documentation for single feature
→ Single task in Ask Mode
```

❌ **Same Mode, Similar Work**
```markdown
Fix 3 related CSS styling issues
→ Single Code Mode task
```

## 5. Practical Data Flow Examples

### Example 1: E-commerce Feature Development

```markdown
## Phase 1: Product Catalog
Task 1.1 (Ask Mode): Research product data requirements
Output → Product schema requirements, competitor analysis

Task 1.2 (Code Mode): Implement product model and API
Input ← Task 1.1 outputs
Output → Product CRUD endpoints, database schema

Task 1.3 (Debug Mode): Test product functionality  
Input ← Task 1.2 outputs
Output → Test results, bug reports, fixes

## Phase 2: Shopping Cart (Depends on Phase 1)
Task 2.1 (Code Mode): Implement cart functionality
Input ← Product model from Task 1.2
Output → Cart API, cart-product relationships

Task 2.2 (Debug Mode): Integration testing
Input ← Both product and cart implementations
Output → Integration test results, performance metrics
```

### Example 2: Bug Fix Workflow

```markdown
## Bug: "Application crashes under load"

Task A (Debug Mode): Problem Investigation
Output → Error logs, crash dumps, performance profiles
Data → Specific bottleneck: database connection pool

Task B (Ask Mode): Solution Research  
Input ← Bottleneck information from Task A
Output → Connection pool best practices, configuration options

Task C (Code Mode): Implement Fix
Input ← Solution approach from Task B + original problem from Task A
Output → Updated configuration, code changes

Task D (Debug Mode): Validation
Input ← Fix implementation from Task C
Output → Load test results, stability verification
```

## 6. Data Flow Best Practices

### Ensure Complete Context Transfer
```markdown
## Good Data Passing Example
**Previous Task Output:**
- API endpoint: POST /api/users/register
- Expected payload: {email, password, fullName}
- Validation rules: email format, password 8+ chars
- Success response: {user: {id, email, fullName}, token: "jwt_token"}
- Error codes: 400 (validation), 409 (user exists)

**Next Task Context:**
With this information, the next task can properly implement the frontend form
```

### Avoid Data Loss
```markdown
## Memory Bank Log Checklist
- [ ] All outputs clearly documented
- [ ] File paths and names specified
- [ ] Key decisions and rationale recorded
- [ ] Dependencies for next tasks identified
- [ ] Integration points documented
```

### Handle Data Dependencies
```markdown
## Dependency Management
Task B needs output from Task A:
1. Task A logs completion with specific outputs
2. Architect Mode verifies Task A completion
3. Task B assignment includes reference to Task A outputs
4. Task B begins with reading Task A Memory Bank entries
```

This data flow system ensures that each task builds upon previous work while maintaining clear boundaries and specialized focus for each Roo mode.