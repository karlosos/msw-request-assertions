import "@testing-library/jest-dom";

import { server } from "./src/api/mocks/server.ts";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
