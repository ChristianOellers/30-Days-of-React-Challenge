![30 Days of React Challenge](teaser.png)

# Own adaption

- [About](#about)
- [Features](#features)
- [How to use](#how-to-use)
- [Concepts](#concepts)
- [Todo](#todo)

<br>

---

<br><br>

## About

Own adaption of the [30 Days of React Challenge](https://github.com/Asabeneh/30-Days-Of-React).

Thank you, Asabeneh Yetayeh, for creating this course!

<br><br>

## Features

Deviating from the challenge (as of now ;)

- Custom architecture: Separate UI components from layout and shareable helpers
- TypeScript integration
- SCSS integration
- Advanced linting – ESlint, Flow, Stylint, HTMLhint

<br><br>

## How to use

I recommend focusing on the source code, not the running app.
For a general introduction to React I suggest checking the mentioned challenge.

### Setup

- [node.js](https://nodejs.org)

### Run

1. Install node + modules
2. Run `npm start`

<br><br>

## Concepts

### Intro

The code here focuses mostly on React, TypeScript and node module features.

My personal focus is on architecture and communication design for production-grade web application setups.
I apply different approaches within each component – Please be aware of highly inconsistent code.
To simplify the code and speed up development, I deliberately ignore most of linting or advanced type checking.

The frontend is minimal to non-existent, as it's not relevant to me here.
It will run, but be warned that it's rather unpleasant to see :)

#### Reasoning

Why I chose this approach:

- Focus on backend architecture, not frontend (SCSS, proper markup)
- Have different problem-solving solutions as reference for future applications
- It's not a real application (without actual requirements, there is no best way to go)
- It's about possibilities, not best-practices

### Architecture

| Structure              | Details                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| `/components/content/` | Reusable content blocks of any complexity. Could be further grouped into sub-categories. |
| `/components/layout/`  | Structural layout sections (pages/screens). Pass data to content-components.             |
| `/components/ui/`      | Interactive UI elements (e.g. forms, tooltips, popups).                                  |
| `/helpers/`            | Render text without markup. Functional without side effects. No React/JSX.               |
| `/modules/`            | Application-wide features (e.g. routing, caching, APIs, access control). No React/JSX.   |

<br><br>

## Todo

- Integrate `Storybook` and `Styleguidist` in component design workflow
- Implement actual 404 (React default redirects to home, which is status code 200)
  - Use case: `fetch` API use needs to properly detect wrong URLs
