# jihoo-vending-machine

A simple vending machine program written in Node.js

## Environment

- Node.js v23.3.0

## Features

- Menu-driven interface
- Cash and card payment options
- Multiple beverage choices
- Balance tracking for cash payments
- Simulated card payment failures (10% chance)

## Flow Diagram

Written in [mermaid](https://github.com/mermaid-js/mermaid) syntax.

```mermaid
graph TD
    A[Start] --> B[Display Vending Machine Menu]
    B --> C{User Selection}
    C -->|1| D{Choose Payment Method}
    C -->|2-4| E[Select Beverage]
    C -->|5| F[Exit Program]
    
    D -->|Cash| G[Insert Cash]
    D -->|Card| H[Process Card Payment]
    
    G --> I{Valid Amount?}
    I -->|Yes| J[Update Balance]
    I -->|No| K[Invalid Amount Message]
    J --> B
    K --> G
    
    H --> L[Select Beverage]
    L --> M{Random 10% Chance}
    M -->|90%| N[Successful Card Purchase]
    M -->|10%| O[Insufficient Card Balance]
    N --> B
    O --> B
    
    E --> P{Sufficient Balance?}
    P -->|Yes| Q[Purchase Beverage]
    P -->|No| R[Insufficient Balance Message]
    Q --> B
    R --> B
    
    F --> S[Return Change]
    S --> T[End]
```

## How to Run
```bash
cd <PROJECT_DIR>
node main.js
```
