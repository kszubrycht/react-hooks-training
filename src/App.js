import React, { useState, useEffect } from 'react'
import ContactsList from './components/ContactsList'

const App = () => {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchContacts()
  }, [])

  const pushToContacts = (newContacts) => {
    setContacts([...contacts, ...newContacts])
  }

  const fetchContacts = (count = 5) => {
    const url = `https://randomuser.me/api/?results=${count}`
    setLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(data => pushToContacts(data.results))
      .finally(() => setLoading(false))
      .catch(err => {
        console.error(err)
      })
  }

  const fetchMoreContacts = () => fetchContacts(3)

  return(
    <div className="App">
      <ContactsList contacts={contacts} />
      { loading ? 'loading...' : <button onClick={fetchMoreContacts}>More</button> }
    </div>
  )
}

export default App