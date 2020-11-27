import React from 'react'
import { rehydrate, css } from 'glamor'
import { Div } from 'glamorous'

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__ !== undefined) {
  rehydrate(window.__NEXT_DATA__.ids)
}

// Add global styles
css.global('*', {
  fontFamily:
    'Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif'
})

css.global('body', {
  backgroundColor: '#ff3b81',
  padding: 0,
  margin: 0
})

css.global('p', {
  fontSize: '14px',
  lineHeight: '24px'
})

css.global('article', {
  margin: '0 auto',
  maxWidth: '650px'
})

css.global('button', {
  alignItems: 'center',
  backgroundColor: '#22BAD9',
  border: 0,
  color: 'white',
  display: 'flex',
  padding: '5px 7px',
  transition: 'background-color .3s'
})

css.global('button:active', {
  backgroundColor: '#1B9DB7',
  transition: 'background-color .3s'
})

css.global('button:focus', {
  outline: 'none'
})

const Layout = ({ children }) => (
  <Div>
    <Div
      backgroundImage="url('/jake.jpg')"
      backgroundSize="cover"
      opacity="0.4"
      position="absolute"
      width="100%"
      height="100%"
    />
    <Div position="relative">{children}</Div>
  </Div>
)

export default Layout
