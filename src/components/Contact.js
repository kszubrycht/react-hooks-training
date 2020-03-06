import React, { useState } from 'react'

const Contact = ({
  contact: {
    name: { first, last },
    location: {
      street: {
        name: streetName,
        number: streetNumber
      },
      city,
      country,
      postcode
    }
  }
}) => {
  const [visible, setVisible] = useState(false)
  const [forceVisible, setForceVisible] = useState(false)
  const show = () => setVisible(true)
  const hide = () => setVisible(false)
  const triggerForceVisible = () => setForceVisible(!forceVisible)

  const name = `${first} ${last}`
  const details = `${streetName} ${streetNumber}, ${postcode} ${city}, ${country}`

  return (
    <li
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <div>{ name }</div>
      <button onClick={triggerForceVisible}>Show!</button>
      { (forceVisible || visible) &&
        <p style={styles.details}>
          { details }
        </p>
      }
    </li>
  )
}

const styles = {
  details: {
    background: 'white',
    padding: '10px',
    position: 'absolute',
    border: '1px solid black'
  }
}

export default Contact

