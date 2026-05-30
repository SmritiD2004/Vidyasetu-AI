# Vidyasetu

**Bridging the gap between teachers and students in low-connectivity environments.**

Vidyasetu is an AI-powered, offline-first educational platform designed to help teachers create, distribute, collect, and evaluate assignments even in areas with limited or unreliable internet access. The platform leverages WhatsApp, lightweight mobile technology, and AI-assisted assessment to ensure continuous learning without requiring students to install additional applications.

---

## Problem Statement

Many schools, especially in rural and semi-urban regions, face challenges such as:

* Limited or unstable internet connectivity
* Low digital literacy among students and parents
* Lack of dedicated learning management systems
* High teacher workload for assignment evaluation
* Dependence on physical worksheets and manual tracking

These challenges reduce learning continuity and increase administrative burden on teachers.

---

## Solution

Vidyasetu provides a simple workflow that integrates with tools already familiar to teachers and students.

### Teacher Workflow

1. Create an assignment.
2. Generate a unique assignment code.
3. Share the assignment through WhatsApp.
4. Receive student submissions automatically.
5. AI evaluates responses and generates feedback.
6. Review analytics and student performance reports.

### Student Workflow

1. Receive assignment via WhatsApp.
2. Complete work on paper.
3. Capture and upload a photo of the completed assignment.
4. Receive feedback and scores.

---

## Key Features

### Offline-First Architecture

* Works in low-bandwidth environments.
* Supports delayed synchronization when internet becomes available.
* Reduces dependency on continuous connectivity.

### WhatsApp-Based Submission

* No additional app installation required.
* Uses familiar communication channels.
* Increases accessibility and adoption.

### AI-Powered Evaluation

* Automated answer assessment.
* Instant feedback generation.
* Reduces teacher correction workload.

### Teacher Dashboard

* Assignment management.
* Submission tracking.
* Student performance analytics.
* Progress monitoring.

### Student Performance Insights

* Learning trends.
* Skill gap identification.
* Individual performance reports.

### Secure Assignment Tracking

* Unique assignment identifiers.
* Submission verification.
* Organized record management.

---

## System Architecture

```text
Teacher Dashboard
        │
        ▼
 Assignment Creation
        │
        ▼
 Assignment Code Generation
        │
        ▼
    WhatsApp Sharing
        │
        ▼
 Student Submission
 (Image Upload)
        │
        ▼
 OCR Processing
        │
        ▼
 AI Evaluation Engine
        │
        ▼
 Feedback & Scoring
        │
        ▼
 Teacher Analytics Dashboard
```

---

## Technology Stack

### Frontend

* React.js
* Tailwind CSS
* HTML5
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### AI & Processing

* OCR Engine
* Natural Language Processing
* Automated Assessment Models

### Communication

* WhatsApp Integration
* REST APIs

### Cloud Services

* Cloud Storage
* Authentication Services

---

## Project Objectives

* Improve assignment accessibility in underserved regions.
* Reduce teacher workload through automation.
* Enable continuous learning despite connectivity challenges.
* Provide actionable learning analytics.
* Increase educational inclusivity using existing communication platforms.

---

## Target Users

### Primary Users

* School Teachers
* Students

### Secondary Users

* School Administrators
* Educational Organizations
* NGOs working in education

---

## Benefits

### For Teachers

* Faster assignment evaluation
* Reduced paperwork
* Better student tracking
* Data-driven insights

### For Students

* Easy assignment submission
* Quick feedback
* No need for specialized software
* Accessible learning experience

### For Schools

* Improved learning outcomes
* Centralized academic records
* Increased digital adoption

---

## Future Enhancements

* Regional language support
* Voice-based assignment interaction
* AI-generated personalized worksheets
* Parent engagement dashboard
* Predictive student performance analytics
* Multi-channel submission support (SMS, Telegram, etc.)

---

## Impact

Vidyasetu aims to democratize access to educational technology by creating an inclusive, affordable, and scalable assignment management ecosystem that works effectively even in connectivity-constrained environments.

---

## Team

**Project Name:** Vidyasetu

**Vision:**
*"Every student deserves uninterrupted learning, regardless of connectivity constraints."*

---

## License

This project is developed for educational and innovation purposes. Licensing terms may be updated based on future deployment and commercialization plans.

---

**Vidyasetu — Connecting Education Beyond Connectivity.**
