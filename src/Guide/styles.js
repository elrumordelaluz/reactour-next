import css from 'styled-jsx/css'

export const basic = css`
  .guide {
    background-color: #fff;
    padding: 24px 30px;
    box-shadow: 0 0.5em 3em rgba(0, 0, 0, 0.3);
    color: inherit;
    max-width: 331px;
    min-width: 150px;
    outline: 0;
    padding-right: 40px;
  }
`

export const badge = css`
  .badge {
    position: absolute;
    font-family: monospace;
    background-color: var(--reactour-accent, #5cb7b7);
    height: 1.875em;
    line-height: 2;
    padding-left: 0.8125em;
    padding-right: 0.8125em;
    font-size: 1em;
    border-radius: 1.625em;
    color: white;
    text-align: center;
    box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.3);
    top: -0.8125em;
    left: -0.8125em;
  }
`

export const dots = css`
  .dots {
    counter-reset: dot;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dot {
    position: relative;
    counter-increment: dot;
    width: 8px;
    height: 8px;
    border: 1px solid;
    border-radius: 100%;
    padding: 0;
    display: block;
    margin: 4px;
    outline: 0;
    transition: opacity 0.3s, transform 0.3s;
    cursor: pointer;
    color: #caccce;
    background-color: transparent;
  }
  .dot:before {
    content: counter(dot);
    position: absolute;
    bottom: calc(100% + 0.25em);
    left: 50%;
    opacity: 0;
    transform: translate(-50%, 1em);
    transition: 0.3s;
    display: block;
  }
  .dot:hover {
    background-color: currentColor;
  }
  .dot:hover:before {
    opacity: 0.5;
    transform: translate(-50%, -2px);
  }
  .current {
    cursor: default;
    color: var(--reactour-accent, #5cb7b7);
    background-color: currentColor;
  }
  .disabled {
    pointer-events: none;
    opacity: 0.2;
  }
`

export default css`
  .guide {
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s;
    z-index: 1000000;
  }
`
