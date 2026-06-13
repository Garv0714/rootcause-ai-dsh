# 🏗 System Architecture

## High-Level Architecture

```text
┌─────────────────────────┐
│      User Interface     │
│      (Next.js UI)       │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Investigation Engine    │
│ Hypothesis Submission   │
│ Evidence Analysis       │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Evaluation Layer        │
│                         │
│ Gemini AI Evaluation    │
│ +                       │
│ Custom Scoring Engine   │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Root Cause Engine       │
│                         │
│ Confidence Score        │
│ Root Cause Detection    │
│ Reasoning Assessment    │
│ Timeline Generation     │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│ Visualization Layer     │
│                         │
│ Root Cause Chain        │
│ Investigation Timeline  │
│ AI Feedback Dashboard   │
│ Investigation Reports   │
└─────────────────────────┘
```

---

## Frontend Layer

The frontend is built using **Next.js 16**, **React 19**, and **TypeScript**.

Responsibilities:

* Investigation case selection
* Evidence presentation
* Hypothesis submission
* Score visualization
* Timeline rendering
* Root cause visualization
* Investigation reporting

Technologies:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Lucide Icons

---

## Investigation Engine

The Investigation Engine acts as the educational simulation layer.

Responsibilities:

* Load investigation cases
* Present evidence
* Manage user reasoning workflow
* Trigger evaluation process

Current domains:

* Electronics
* Physics
* Chemistry
* Robotics

---

## AI Evaluation Layer

RootCause AI uses a hybrid evaluation model.

### Primary Evaluation

Google Gemini API evaluates:

* Logical reasoning quality
* Engineering thinking
* Evidence usage
* Hypothesis structure

### Fallback Evaluation

Custom scoring engine evaluates:

* Evidence keywords
* Cause-effect relationships
* Reasoning depth
* Investigation completeness

This ensures the platform remains functional even when external AI services are unavailable.

---

## Root Cause Analysis Engine

The Root Cause Engine transforms raw reasoning into structured analysis.

Capabilities:

* Root cause identification
* Confidence estimation
* Failure chain reconstruction
* Investigation scoring
* Strength/weakness detection

Example:

Battery Overheating
↓
Voltage Instability
↓
Motor Failure
↓
Drone Crash

---

## Visualization Layer

The visualization system converts investigation results into interactive educational insights.

Components:

### Root Cause Chain

Displays relationships between failure events.

### Investigation Timeline

Shows chronological reconstruction of events.

### AI Feedback Panel

Provides:

* Strengths
* Weaknesses
* Confidence score
* Reasoning assessment

### Investigation Report

Summarizes findings and recommendations.

---

## Data Flow

```text
User
  │
  ▼
Evidence Review
  │
  ▼
Hypothesis Creation
  │
  ▼
AI Evaluation
  │
  ▼
Scoring Engine
  │
  ▼
Root Cause Detection
  │
  ▼
Timeline Generation
  │
  ▼
Visualization Dashboard
```

---

## Scalability Roadmap

Future architecture extensions:

* Multi-user investigations
* Team collaboration
* Real-time AI tutoring
* Case recommendation system
* User progress tracking
* Database-backed analytics
* PDF report generation
* Instructor dashboard

---

## Security Considerations

* Environment variables protected using `.env.local`
* API keys excluded from version control
* Server-side evaluation endpoints
* Client-side data validation
* Controlled AI response parsing

---

## Design Philosophy

RootCause AI is designed around a single principle:

> “Students should learn how engineers think, not just what engineers know.”

The platform promotes evidence-driven reasoning, critical thinking, and structured problem-solving through realistic investigation scenarios.
