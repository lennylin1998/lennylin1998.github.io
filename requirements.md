# Astro Portfolio – Core Feature Implementation Brief

## Overall Technical Direction (Must-Read)

This project must remain **Astro-first** in both architecture and mindset.

### Guiding Principles
- **Content-driven development**
  - All experience data lives in Astro `content/` collections
  - Behavior emerges from structured content, not hardcoded logic
- **Minimal JavaScript**
  - Use Astro Islands only when interactivity is required
  - Prefer build-time solutions over runtime logic
- **Community-proven tools only**
  - Favor libraries that are:
    - Well-maintained
    - Widely used in Astro projects
    - Lightweight and composable
- **Progressive enhancement**
  - Site must remain usable without JavaScript
  - JavaScript enhances UX, not core functionality

This document defines **only the features below**.  
Anything not listed is explicitly out of scope.

---

## 1. Blog Schema Update (Experience Unification)

### Goal
Extend the existing blog schema so it can represent:
- Work experience
- Projects  
without splitting into multiple collections.

### Updated Frontmatter Schema

```ts
{
  title: string
  description: string
  pubDate: Date

  // New fields
  type: 'work' | 'project'
  role?: string

  startDate: Date
  endDate?: Date

  githubRepo?: string
  liveUrl?: string

  heroImage?: string
  tags?: string[]
}

Field Semantics
	•	type
	•	Used to separate work and projects on the index page
	•	role
	•	Required for work
	•	Optional or omitted for project
	•	startDate / endDate
	•	Displayed as a date range
	•	endDate omitted = “Present”
	•	pubDate
	•	Continues to control sorting order in Astro
	•	githubRepo / liveUrl
	•	Optional links rendered conditionally

Acceptance Criteria
	•	All existing blog entries migrate cleanly
	•	No changes required to Astro’s sorting logic
	•	Schema validation enforced via content collections

⸻

2. Navigation Bar

Goal

Provide clear, recruiter-oriented navigation while keeping all content on the index page.

Navigation Structure

Label	Destination	Behavior
Home	/	Scrolls to hero section
Search	/	Scrolls to search bar section
Work Experience	/	Scrolls to work section
Projects	/	Scrolls to project section
Resume	External	Opens Google Drive CV
Connect	/	Scrolls to footer

Technical Requirements
	•	Implemented as a reusable <NavBar /> Astro component
	•	Included via a shared layout
	•	Uses anchor links for internal navigation
	•	External resume link opens in a new tab
	•	Keyboard accessible

Non-Goals
	•	No client-side routing
	•	No scroll spy or complex animations

⸻

3. Search Bar (Blog Content Filtering)

Goal

Allow recruiters to quickly find relevant experience based on keywords.

Search Scope

Search operates over:
	•	Blog title
	•	Description
	•	Role
	•	Tags
	•	Content body (optional, if feasible)

Behavior
	•	Text-based search
	•	Case-insensitive
	•	Filters results in real time
	•	Works across both work and project entries

Technical Approach
	•	Astro Island with minimal client-side JavaScript
	•	Preload blog content at build time
	•	Perform filtering on the client

UX Requirements
	•	Single input field
	•	Placeholder text explains usage (e.g. “Search by skill, role, or keyword”)
	•	Empty input shows all entries

Acceptance Criteria
	•	No page reloads
	•	Search feels instant
	•	Logic is isolated to a single component

⸻

4. Suggested Tools & Libraries (Astro-Compatible)

Core
	•	Astro Content Collections
	•	Schema validation
	•	Type safety
	•	TypeScript
	•	Strong typing for content and components

Search & Filtering
	•	Vanilla JS
	•	Preferred for simplicity
	•	Fuse.js (optional)
	•	Lightweight fuzzy search
	•	Well-known and commonly used

Styling

Choose one:
	•	Tailwind CSS
	•	Vanilla CSS + CSS Variables

Dates
	•	date-fns
	•	Formatting date ranges
	•	Small and tree-shakeable

⸻

5. Explicit Non-Goals
	•	No database
	•	No React or heavy frameworks
	•	No analytics or tracking
	•	No pagination (for now)

⸻

6. Definition of Done

This feature set is complete when:
	•	Blog schema supports work and projects cleanly
	•	Navigation reliably scrolls to correct sections
	•	Search finds relevant entries in under one second
	•	Adding new experience requires editing only a markdown file
	•	The site remains fast, static, and Astro-native

⸻