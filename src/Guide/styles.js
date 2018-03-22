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

export default css`
  .guide {
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s;
    z-index: 1000000;
  }
`
