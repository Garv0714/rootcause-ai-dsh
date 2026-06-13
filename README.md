# 🔍 RootCause AI

<div align="center">

### AI-Powered STEM Investigation & Root Cause Analysis Platform

Transforming STEM education through evidence-based reasoning, engineering investigation, and AI-assisted failure analysis.

🌐 **Live Demo:** https://rootcause-ai-dsh.vercel.app/

🚀 **Hackathon Project | Next.js + Gemini AI + TypeScript**

</div>

---

# 📖 Overview

RootCause AI is an interactive STEM investigation platform designed to teach students how engineers, scientists, and investigators analyze failures.

Instead of memorizing concepts, users examine evidence, construct hypotheses, identify root causes, and receive AI-powered feedback on their reasoning process.

The platform simulates real-world engineering investigations and helps learners develop critical thinking, systems thinking, and evidence-based decision-making skills.

---

# 🎯 Problem Statement

Traditional STEM education often emphasizes solving predefined problems rather than understanding why systems fail.

Students rarely practice:

* Root Cause Analysis
* Failure Investigation
* Evidence-Based Reasoning
* Engineering Decision Making
* Hypothesis Construction
* Systems Thinking

As a result, many learners struggle to apply theoretical knowledge to real-world engineering challenges.

---

# 💡 Our Solution

RootCause AI transforms STEM learning into an interactive investigation experience.

Users:

1. Review evidence from a failure scenario
2. Analyze technical observations
3. Construct an investigation hypothesis
4. Submit reasoning for evaluation
5. Receive AI-generated feedback
6. Visualize the failure chain
7. Explore investigation timelines
8. Understand the root cause

This creates a hands-on environment where learners practice thinking like engineers and investigators.

---

# ✨ Core Features

## 🧠 AI Investigation Evaluator

Evaluates:

* Logical reasoning
* Evidence utilization
* Cause-effect relationships
* Engineering thinking
* Root cause identification

---

## 🔗 Root Cause Chain Visualization

Visual representation of failure progression.

Example:

Battery Overheating
↓
Voltage Instability
↓
Motor Failure
↓
Drone Crash

---

## 📅 Investigation Timeline

Chronological reconstruction of events leading to system failure.

---

## 📊 Reasoning Assessment

Generates:

* Investigation Score
* Confidence Level
* Strength Analysis
* Weakness Analysis
* Root Cause Prediction

---

## 🧪 Multi-Domain STEM Cases

Current domains:

* Electronics
* Physics
* Chemistry
* Robotics

---

# 🏗 System Architecture

```text
┌────────────────────────────────────────────┐
│                Frontend UI                 │
│     Next.js + React + Tailwind CSS         │
└───────────────────┬────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────────┐
│         Investigation Management           │
│       Evidence + Hypothesis Engine         │
└───────────────────┬────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────────┐
│          AI Evaluation Layer               │
│                                            │
│  Google Gemini API                         │
│  +                                         │
│  Custom Scoring Engine                     │
└───────────────────┬────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────────┐
│         Root Cause Analysis Engine         │
│                                            │
│  • Reasoning Evaluation                    │
│  • Confidence Scoring                      │
│  • Failure Classification                  │
│  • Timeline Reconstruction                 │
└───────────────────┬────────────────────────┘
                    │
                    ▼
┌────────────────────────────────────────────┐
│          Visualization Layer               │
│                                            │
│  • Root Cause Chain                        │
│  • Investigation Timeline                  │
│  • AI Feedback Dashboard                   │
│  • Reports & Analytics                     │
└────────────────────────────────────────────┘
```

---

# ⚙️ Technology Stack

## Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* Lucide React

## AI Layer

* Google Gemini API
* Prompt Engineering
* Custom Evaluation Engine

## Backend

* Next.js API Routes
* Server-side Evaluation Logic

## Development Tools

* Git
* GitHub
* Vercel

---

# 🔄 Investigation Workflow

```text
User
  │
  ▼
Select Investigation Case
  │
  ▼
Review Evidence
  │
  ▼
Create Hypothesis
  │
  ▼
Submit Investigation
  │
  ▼
AI Evaluation
  │
  ▼
Root Cause Analysis
  │
  ▼
Timeline Generation
  │
  ▼
Feedback & Insights
```

---

# 📸 Example Investigation

## Drone Failure Investigation

### Evidence

* Battery temperature reached 92°C
* Voltage fluctuations detected
* Motor 3 stopped responding
* Drone lost altitude

### AI Result

**Root Cause**

Thermal + Electrical Cascade Failure

**Confidence**

95%

**Investigation Score**

100/100

---

# 🎓 Educational Impact

RootCause AI helps learners:

✅ Develop critical thinking

✅ Learn structured problem solving

✅ Practice engineering reasoning

✅ Analyze technical evidence

✅ Build investigative skills

✅ Understand system failures

---

# 🚀 Future Roadmap

* User Accounts
* Leaderboards
* Case Authoring System
* Team Investigations
* PDF Report Export
* Instructor Dashboard
* Progress Tracking
* Advanced AI Feedback

---

# 🛠 Local Setup

```bash
git clone https://github.com/Garv0714/rootcause-ai-dsh.git

cd rootcause-ai-dsh

npm install

npm run dev
```

---

# 🔑 Environment Variables

Create a `.env.local` file:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

# 🌐 Live Demo

https://rootcause-ai-dsh.vercel.app/

---

# 👨‍💻 Author

**Garv Sharma**

B.Tech – Electronics & Advanced Communication Technology

Maharaja Agrasen Institute of Technology (MAIT)

---

<div align="center">

### Built for DSH Hacks 2026 🚀

Empowering students to think like engineers, not just memorize like students.

</div>
