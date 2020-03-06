import React from 'react'
import ContactsList from './components/ContactsList'

import contacts from './data/contacts.json'

const App = () => <div className="App">
  <ContactsList contacts={contacts.results} />
</div>

export default App