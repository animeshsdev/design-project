// Allow importing the project's gradient script without TS errors
// Matches imports like '../../../gradient.js' or other paths that end with 'gradient.js'
declare module '*gradient.js' {
  export function initGradient(selector?: string): any;
  const _default: any;
  export default _default;
}
