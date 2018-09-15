import React from 'react'
import styled from 'styled-components'
import { Shake } from 'reshake'

const Logo = styled.div`
  font-size: ${props => (props.size ? props.size : '70vw')};
  width: 1em;
  display: inline-block;
  max-width: 430px;
  margin-top: 2rem;
  line-height: 0;
  @media (min-width: 40em) {
    width: 0.614em;
  }
`

export default ({ iso = true, ...props }) => (
  <Logo {...props}>
    <svg viewBox="0 0 364 419.2">
      <g data-tut="reactour__logo">
        <circle fill="#5CB7B7" cx="182" cy="182" r="182" />
        <circle fill="#1C8F9E" cx="182" cy="182" r="158.2" />
        <Shake elem="g" dur={10000} int={4} h={0} v={5} r={3} max={70} fixed>
          <path
            opacity=".2"
            fill="#FFF"
            d="M276.2 157.1c-1.3-10.8-2.2-37.8-24-44.7-21.8-6.9-40.3-10-70.1-10-29.8 0-48.3 3.1-70.1 10-21.8 6.9-22.7 33.9-24 44.7-1.3 10.8 9.8 10.4 9.8 10.4h168.8c-.1 0 11 .4 9.6-10.4z"
          />
          <path
            fill="#FFF"
            d="M291.1 155v9.7l-2.9 1.9s-6.2-38-12-48.8c-5.8-10.8-39.5-27.9-94.2-27.9s-88.4 17-94.2 27.9c-5.8 10.8-12 48.8-12 48.8l-2.9-1.9V155c0-6.7-13.7-7.3-13.7.4v13.4c0 8.7 13.7 6.9 13.7 1.9l1.8 1.9s.4 1.3 0 5.2c-.4 3.9 5.8 5.3 5.8 5.3h203s6.1-1.4 5.8-5.3c-.4-3.9 0-5.2 0-5.2l1.8-1.9c0 5 13.7 6.8 13.7-1.9v-13.4c0-7.6-13.7-7.1-13.7-.4zm-21 16.3h-176s-11.6.5-10.2-11.6c1.4-12.1 2.3-42.2 25-49.9 22.7-7.7 42.1-11.1 73.2-11.1s50.4 3.5 73.2 11.1 23.7 37.8 25 49.9c1.4 12-10.2 11.6-10.2 11.6z"
          />
          <g fill="#FFF">
            <path d="M199.3 226c-.6-.2-1.1-.4-1.7-.5l.3-1.2c1.3-6.3.4-11.3-2.4-13-2.8-1.6-7.3.1-11.8 4-.4.4-.9.8-1.3 1.2-.3-.3-.6-.5-.9-.8-4.8-4.2-9.6-6-12.4-4.4-2.8 1.6-3.6 6.3-2.4 12.3.1.6.2 1.2.4 1.8-.7.2-1.3.4-2 .6-5.6 2-9.2 5-9.2 8.2 0 3.3 3.8 6.6 9.7 8.6.5.2 1 .3 1.4.4-.2.6-.3 1.3-.4 1.9-1.1 5.8-.2 10.5 2.5 12 2.8 1.6 7.6 0 12.3-4.1.4-.3.7-.7 1.1-1 .5.4.9.9 1.4 1.3 4.5 3.9 8.9 5.4 11.7 3.8 2.8-1.6 3.8-6.6 2.6-12.7-.1-.5-.2-.9-.3-1.4.3-.1.7-.2 1-.3 6.1-2 10-5.3 10-8.6-.2-3-3.8-6.1-9.6-8.1zm-14.2-8.9c3.9-3.4 7.6-4.7 9.2-3.8 1.8 1 2.5 5.1 1.3 10.6-.1.4-.2.7-.2 1.1-2.2-.5-4.6-.9-7.1-1.1-1.5-2.1-3-4-4.5-5.6.5-.5.9-.9 1.3-1.2zM171.4 237l1.5 2.7c.5.9 1.1 1.8 1.7 2.7-1.7-.2-3.4-.5-4.9-.8.5-1.5 1.1-3 1.7-4.6zm0-5.4c-.7-1.6-1.2-3.1-1.7-4.6 1.5-.3 3.1-.6 4.8-.8-.6.9-1.1 1.8-1.6 2.7l-1.5 2.7zm1.2 2.7c.7-1.5 1.4-2.9 2.3-4.3.8-1.4 1.7-2.8 2.6-4.1 1.6-.1 3.2-.2 4.8-.2 1.6 0 3.3.1 4.8.2.9 1.3 1.7 2.7 2.6 4.1.8 1.4 1.6 2.8 2.3 4.2-.7 1.5-1.5 2.9-2.3 4.3-.8 1.4-1.6 2.8-2.5 4.1-1.6.1-3.2.2-4.8.2-1.6 0-3.2-.1-4.8-.2-.9-1.3-1.8-2.7-2.6-4.1-.9-1.3-1.7-2.8-2.4-4.2zm19 5.4c.5-.9 1-1.9 1.5-2.8.7 1.6 1.3 3.2 1.8 4.7-1.5.4-3.2.6-4.9.8.6-.9 1.1-1.8 1.6-2.7zm1.5-8.1c-.5-.9-1-1.8-1.5-2.8-.5-.9-1.1-1.8-1.6-2.6 1.7.2 3.3.5 4.8.8-.4 1.5-1 3.1-1.7 4.6zm-10.8-11.8c1 1.1 2.1 2.4 3.1 3.8-2.1-.1-4.2-.1-6.3 0 1.1-1.4 2.1-2.6 3.2-3.8zm-12.2-6.4c1.8-1 5.7.4 9.8 4.1.3.2.5.5.8.7-1.5 1.7-3.1 3.5-4.5 5.6-2.5.2-4.9.6-7.1 1.1-.1-.5-.3-1.1-.4-1.6-.9-5.1-.3-9 1.4-9.9zm-2.6 27.7c-.4-.1-.9-.3-1.3-.4-2.6-.9-4.7-2-6.2-3.3-1.3-1.1-2-2.2-2-3.1 0-1.9 2.9-4.4 7.7-6.1l1.8-.6c.7 2.2 1.5 4.4 2.6 6.7-1 2.3-1.9 4.6-2.6 6.8zm12.3 10.3c-2.1 1.8-4.1 3.1-5.9 3.7-1.6.6-2.9.6-3.7.1-1.7-1-2.4-4.7-1.4-9.7.1-.6.2-1.2.4-1.8 2.2.5 4.6.8 7.1 1 1.5 2.1 3 4 4.5 5.6-.3.5-.7.8-1 1.1zm2.6-2.6c-1.1-1.2-2.1-2.4-3.2-3.8 1 0 2 .1 3.1.1s2.1 0 3.2-.1c-1.1 1.4-2.1 2.7-3.1 3.8zm13.7 3.2c-.3 1.7-.9 2.8-1.7 3.3-1.7 1-5.2-.3-9.1-3.6-.4-.4-.9-.8-1.3-1.2 1.5-1.6 3-3.5 4.4-5.6 2.6-.2 5-.6 7.2-1.1.1.4.2.9.3 1.3.5 2.6.6 5 .2 6.9zm1.9-11.3l-.9.3c-.7-2.1-1.6-4.4-2.7-6.7 1.1-2.3 1.9-4.5 2.6-6.6.5.2 1.1.3 1.6.5 4.9 1.7 7.9 4.2 7.9 6.1 0 2-3.2 4.6-8.5 6.4z" />
            <circle cx="182.3" cy="234.2" r="4.7" />
          </g>
          <circle
            fill="#FFF"
            fillOpacity=".2"
            stroke="#FFF"
            strokeWidth="2"
            strokeMiterlimit="10"
            cx="105.4"
            cy="235.6"
            r="16.7"
          />
          <path
            fill="#FFF"
            d="M113.4 207H99.9c-2.2 0-4.1-1.8-4.1-4.1v-6c0-2.2 1.8-4.1 4.1-4.1h13.6V207zm136.9 0h13.6c2.2 0 4.1-1.8 4.1-4.1v-6c0-2.2-1.8-4.1-4.1-4.1h-13.6V207z"
          />
          <path
            d="M107.7 326.9H84.4c-2.7 0-4.8-2.1-4.8-4.8v-25.7c0-2.7 2.1-4.8 4.8-4.8h23.3c2.7 0 4.8 2.1 4.8 4.8v25.7c0 2.6-2.1 4.8-4.8 4.8zm171.7 0H256c-2.7 0-4.8-2.1-4.8-4.8v-25.7c0-2.7 2.1-4.8 4.8-4.8h23.3c2.7 0 4.8 2.1 4.8 4.8v25.7c.1 2.6-2.1 4.8-4.7 4.8z"
            fill="#2D2323"
          />
          <path
            fill="#FFF"
            d="M293.5 295.8H70.3c-2.1 0-3.9-1.7-3.9-3.9v-10c0-2.1 1.7-3.9 3.9-3.9h223.1c2.1 0 3.9 1.7 3.9 3.9v10c0 2.2-1.7 3.9-3.8 3.9z"
          />
          <circle
            fill="#FFF"
            fillOpacity=".2"
            stroke="#FFF"
            strokeWidth="2"
            strokeMiterlimit="10"
            cx="258.1"
            cy="235.6"
            r="16.7"
          />
        </Shake>
      </g>
      {iso && (
        <g data-tut="reactour__iso">
          <path
            fill="#5CB7B7"
            d="M98.5 391.2h7c5.5 0 8.3 2.7 8.3 8.2 0 2.1-.4 3.8-1.2 5-.8 1.2-2 2.2-3.6 2.8l2.9 6c.7 1.2 1.4 1.9 2.1 1.9h.6c.3 0 .6.1.8.3.2.2.3.4.3.6v2c0 .1-.1.3-.3.5-.2.2-.4.3-.8.3h-.8c-1.2 0-2.1-.3-2.9-1-.8-.6-1.6-1.7-2.5-3.3l-3.1-6.7h-2.8v9.9c0 .3-.1.6-.3.8-.2.2-.4.3-.6.3h-2.2c-.1 0-.3-.1-.5-.3s-.3-.4-.3-.8v-26.5zm3.8 3.8v9.2h3.1c1.6 0 2.7-.4 3.4-1.2.7-.8 1-2 1-3.6 0-1.7-.4-2.9-1.1-3.5-.7-.6-1.8-1-3.3-1h-3.1zm18.4-3.8h14c.3 0 .6.1.8.3.2.2.3.4.3.6v1.9s0 .1-.1.3c0 .1-.1.2-.2.3l-.3.3c-.1.1-.3.1-.5.1h-10.2v8.1h7.5c.3 0 .6.1.8.3.2.2.3.4.3.6v1.9s0 .1-.1.3c0 .1-.1.2-.2.3l-.3.3c-.1.1-.3.1-.5.1h-7.6v8.3h10.1c.3 0 .6.1.8.3.2.2.3.4.3.6v1.9s0 .1-.1.3c0 .1-.1.2-.2.3l-.3.3c-.1.1-.3.1-.5.1h-14v-27.8zm28.4 0h3.3c.6 0 1 .3 1.2 1l7.1 25.5c.1.2.1.3.1.4 0 .3-.1.5-.3.6-.2.1-.4.2-.5.3h-2.1c-.5 0-.9-.3-1.1-1l-1.9-7.6h-8.3l-2 7.6c-.2.6-.5 1-1.1 1h-1.9c-.7 0-1-.3-1-.9 0-.1 0-.2.1-.4l7.2-25.5c.1-.3.2-.5.4-.7s.4-.3.5-.3h.3zm1.7 3.8l-3.2 11.6h6.3l-3.1-11.6zm22.4-4c2.4 0 4.3.6 5.6 1.9 1.3 1.2 2.1 2.9 2.4 4.9v.2c0 .6-.3.9-.8 1.1l-1.4.4h-.4c-.3 0-.6-.1-.8-.3s-.4-.4-.4-.7c-.1-1.2-.5-2.1-1.2-2.8-.7-.7-1.7-1-2.9-1-1.5 0-2.7.4-3.4 1.3-.7.8-1.1 2.2-1.1 4v10.3c0 1.8.4 3.1 1.1 4 .7.8 1.8 1.2 3.4 1.2 2.9 0 4.3-1.7 4.3-5.2 0-.3.1-.6.3-.8.2-.2.4-.3.6-.3h2.2c.1 0 .3.1.5.3s.3.4.3.8c0 2.7-.7 4.9-2 6.5s-3.4 2.5-6.2 2.5c-2.7 0-4.7-.8-6.1-2.5s-2.1-3.8-2.1-6.5V400c0-2.7.7-4.9 2.1-6.5s3.3-2.5 6-2.5z"
          />
          <path
            fill="#1C8F9E"
            d="M186.3 391.2h14.3c.3 0 .6.1.8.3.2.2.3.4.3.6v2.1c0 .1-.1.3-.3.5-.2.2-.4.3-.8.3h-5.2v22.8c0 .3-.1.6-.3.8s-.4.3-.6.3h-2.2c-.1 0-.3-.1-.5-.3-.2-.2-.3-.4-.3-.8V395h-5.2c-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.3-.6V392c0-.1.1-.3.3-.5.2-.2.5-.3.8-.3zm20.7 2.3c1.3-1.7 3.4-2.5 6.2-2.5s4.9.8 6.2 2.5c1.3 1.7 2 3.8 2 6.5v10.3c0 2.7-.7 4.9-2 6.5-1.3 1.7-3.4 2.5-6.2 2.5s-4.9-.8-6.2-2.5c-1.3-1.7-2-3.8-2-6.5V400c0-2.7.6-4.9 2-6.5zm6.2 1.2c-2.9 0-4.4 1.8-4.4 5.3v10.3c0 3.5 1.5 5.2 4.4 5.2 2.9 0 4.4-1.7 4.4-5.2V400c0-3.5-1.5-5.3-4.4-5.3zm14.8-3.5h1.9c.1 0 .3.1.5.3.2.2.3.4.3.8v16.8c0 2.4.3 4 1 5 .7.9 1.8 1.4 3.4 1.4 1.4 0 2.5-.5 3.2-1.4.7-1 1.1-2.6 1.1-4.9v-16.8c0-.3.1-.6.3-.8.2-.2.4-.3.6-.3h2.2s.3.1.5.3c.2.2.3.4.3.8V409c0 3-.7 5.5-2 7.4-1.3 1.9-3.4 2.9-6.2 2.9-2.7 0-4.8-1-6.2-2.9s-2.1-4.4-2.1-7.4v-16.6c0-.3.1-.6.3-.8.2-.2.4-.3.6-.3l.3-.1zm21.1 0h7c5.5 0 8.3 2.7 8.3 8.2 0 2.1-.4 3.8-1.2 5s-2 2.2-3.6 2.8l2.9 6c.7 1.2 1.4 1.9 2.1 1.9h.6c.3 0 .6.1.8.3.2.2.3.4.3.6v2s-.1.3-.3.5c-.2.2-.4.3-.8.3h-.8c-1.2 0-2.1-.3-2.9-1-.8-.6-1.6-1.7-2.5-3.3l-3.1-6.7h-2.8v9.9c0 .3-.1.6-.3.8-.2.2-.4.3-.6.3H250c-.1 0-.3-.1-.5-.3-.2-.2-.3-.4-.3-.8v-26.5zm3.8 3.8v9.2h3.1c1.6 0 2.7-.4 3.4-1.2.7-.8 1-2 1-3.6 0-1.7-.4-2.9-1.1-3.5s-1.8-1-3.3-1h-3.1z"
          />
        </g>
      )}
    </svg>
  </Logo>
)
