import React from 'react'

export default function Title({name}) {
  return (
    <p
        style={{
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        {name}
      </p>
  )
}
