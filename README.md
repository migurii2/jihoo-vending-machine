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
    C -->|1-3| D[Select Beverage]
    C -->|4| E{Choose Payment Method}
    C -->|5| F[Exit Program]
    
    D --> G{Sufficient Balance?}
    G -->|Yes| H[Purchase Beverage]
    G -->|No| I[Insufficient Balance Message]
    H --> B
    I --> B
    
    E -->|Cash| J[Insert Cash]
    E -->|Card| K[Process Card Payment]
    
    J --> L{Valid Amount?}
    L -->|Yes| M[Update Balance]
    L -->|No| N[Invalid Amount Message]
    M --> B
    N --> J
    
    K --> O[Select Beverage]
    O --> P{Random 10% Chance}
    P -->|90%| Q[Successful Card Purchase]
    P -->|10%| R[Insufficient Card Balance]
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
