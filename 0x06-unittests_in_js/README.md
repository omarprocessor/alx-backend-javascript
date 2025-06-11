# JavaScript Unit Tests and API Integration Tests

This repository contains various JavaScript testing examples and API integration tests demonstrating different testing approaches and frameworks.

## Project Structure

```
.
├── 0-calcul.js - Basic calculation implementation
├── 1-calcul.js - Calculation implementation with Mocha
├── 2-calcul_chai.js - Calculation implementation with Chai assertions
├── 3-payment.js - Payment system implementation
├── 4-payment.js - Payment system with Mocha tests
├── 5-payment.js - Payment system with Mocha and Chai
├── 6-payment_token.js - Payment token system
├── 7-skip.test.js - Example of skipped tests
├── 8-api/ - Express API server with basic routes
├── 9-api/ - Express API server with cart functionality
└── 10-api/ - Express API server with authentication and payment methods
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Available scripts:
```bash
# Run all tests
npm test

# Run ESLint
npm run lint

# Start API servers
npm start # Starts all API servers
```

## Testing Frameworks Used

- Mocha: Test runner
- Chai: Assertion library
- Sinon: Mocking and stubbing
- Jest: Testing framework for API tests
- Supertest: API testing

## API Servers

Three API servers are available:

1. **8-api**: Basic Express server
   - Root route: GET /
   - Error handling middleware

2. **9-api**: Cart functionality
   - Root route: GET /
   - Cart route with validation: GET /cart/:id
   - 404 and error handlers

3. **10-api**: Payment system
   - Root route: GET /
   - Cart route with validation: GET /cart/:id
   - Available payments: GET /available_payments
   - Login endpoint: POST /login
   - Error handling middleware

## Code Style

The project follows ESLint rules with:
- 2-space indentation
- Single quotes
- Trailing commas in multiline objects/arrays
- No unused variables
- Proper error handling

## Running Tests

All tests are located in `.test.js` files and can be run using:
```bash
npm test
```

## API Testing

API integration tests are located in the respective API directories and use:
- Supertest for Express app testing
- Jest for test assertions
- Proper error handling verification

## Error Handling

All API servers implement:
- 404 handler for non-existent routes
- Error handler for exceptions
- Input validation
- Proper HTTP status codes

## Contributing

1. Run ESLint before committing:
```bash
npm run lint
```

2. Ensure all tests pass:
```bash
npm test
```

3. Follow the existing code style and conventions
