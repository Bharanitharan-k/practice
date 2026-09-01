// A tiny module so our CI pipeline has real code to lint and test.
// Zero dependencies on purpose — nothing to install, so the demo "just works".

export function add(c, b) {
  return c + b;
}

export function multiply(c, b) {
  return c * b;
}
