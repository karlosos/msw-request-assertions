# MSW 1.x to 2.x Migration Example with Request Assertion

This project serves as a practical example and guide for migrating an existing application using Mock Service Worker (MSW) from version 1.x to 2.x. It specifically highlights how to handle request payload assertions using `waitForRequest` in MSW 2.x, a common requirement for testing with `jest`.

## Project Setup

This is a standard React application bootstrapped with Vite, configured to use Jest for testing. It demonstrates a typical frontend development setup where API calls are mocked for development and testing purposes.

- **Framework**: React
- **Build Tool**: Vite
- **Testing Framework**: Jest
- **Mocking Library**: Mock Service Worker (MSW) 2.x

## Key Focus: `waitForRequest` and Request Payload Assertion

One of the significant changes in MSW 2.x is how requests are intercepted and asserted, especially when you need to verify the payload sent by your application. This example provides a clear demonstration of using `waitForRequest` to:

- Capture outgoing requests.
- Assert on the request body, headers, or other properties.
- Ensure your application sends the correct data to the mocked API endpoints.

## Comparing with the `master` Branch (MSW 1.x)

The branch (`msw-2.x-migration-example`) represents the migrated state, showcasing the MSW 2.x implementation. If you were to compare this with a hypothetical `master` branch still on MSW 1.x, you would observe the following key differences:

- **MSW Setup**: The `setupWorker` and `setupServer` imports and initialization would differ, reflecting the updated API in MSW 2.x.
- **Handler Definitions**: The syntax for defining request handlers (`rest.get`, `rest.post`, etc.) has evolved. MSW 2.x introduces a more explicit and type-safe way to define handlers.
- **Request Assertion**: The most notable change for testing is the transition from direct request interception patterns (common in MSW 1.x) to the more structured `waitForRequest` utility in MSW 2.x for asserting on request payloads. This branch demonstrates the recommended `waitForRequest` pattern.
- **Test Utilities**: Any custom test utilities or helpers built around MSW 1.x's API would need to be updated to align with MSW 2.x's new features and patterns.

By examining the changes in this branch, developers can gain insights into the necessary adjustments for a smooth migration from MSW 1.x to 2.x, particularly concerning request assertion in tests.