// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';



// setUpFliesAfterEnv gives Jest a path(s) for setup to run immediately after the test 
// framework has been installed in the environment. By default, Jest doesn't know anything
// about the assertion tomatchImageSnapshot that jest-image-snapshot gives us. So we'll need to extend
// Jest in setup file to understand how to use this new assertion

// Ref LogRocket frontend Monitoring

import { toMatchImageSnapshot } from "jest-image-snapshot";
expect.extend({ toMatchImageSnapshot });
   