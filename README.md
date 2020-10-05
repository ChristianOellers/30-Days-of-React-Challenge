![30 Days of React Challenge](teaser.png)

# Own adaption

- [About](#about)
- [How to use](#how-to-use)
- [Todo](#todo)

<br>

---

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ChristianOellers_30-Days-of-React-Challenge&metric=alert_status)](https://sonarcloud.io/dashboard?id=ChristianOellers_30-Days-of-React-Challenge)

<br><br>

## About

Own adaption of the [30 Days of React Challenge](https://github.com/Asabeneh/30-Days-Of-React).
Thank you, Asabeneh Yetayeh, for creating this course!


### Concepts

The code here focuses mostly on React, TypeScript and node module features.

My personal focus is on architecture and communication design for production-grade web application setups.
As I apply different approaches within each component, please be aware of highly inconsistent code.

The frontend is minimal to non-existent, as it's not relevant here.
It will run, but be warned that it's rather unpleasant to see :)

#### Reasoning

Why I chose this approach:

- Apply different problem-solving solutions as reference for future applications
- It's not a real application (without actual requirements, there is no best way to go)
- It's about possibilities, not best-practices (if you don't use TypeScript, some things will be vastly different)

As example, I use many 'any' types, which should not be done, just because it's faster and not the focus to do here ;)


### Features

Deviating from the challenge

- Custom architecture: Separate UI components from layout and shareable helpers
- TypeScript integration
- SCSS integration
- Advanced linting – ESlint, Flow, Stylint, HTMLhint
- Latest ES.next syntax (no respect to browser compatibility)


<br><br>

## How to use

I recommend focusing on the source code, not the running app.

### Setup

- [node.js](https://nodejs.org)

### Run

1. Install node + modules
2. Run `npm start`

<br><br>

## Todo

- Implement actual 404 (React default redirects to home, which is status code 200)
  - Use case: `fetch` API use needs to properly detect wrong URLs

