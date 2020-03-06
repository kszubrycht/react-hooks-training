import React, { useState } from 'react'
import Contact from './Contact'

const ContactsList = ({ contacts = [] }) => {
  const [query, setQuery] = useState('')
  const [sortDirectionAsc, setSortDirectionAsc] = useState(true)
  const handleChange = ({ currentTarget: { value }}) => setQuery(value)
  const changeSortDirection = () => setSortDirectionAsc(!sortDirectionAsc)
  const filterAndSort = () => {
    const result = contacts
      .filter(({ name: { first, last }}) => `${first} ${last}`.toLowerCase().includes(query.toLowerCase()))
      .sort(({ name: { first: a } }, { name: { first: b } }) => a.localeCompare(b))
    return sortDirectionAsc ? result : result.reverse()
  }

  return (
    <React.Fragment>
      <input onChange={handleChange} />
      <button onClick={changeSortDirection}>{ sortDirectionAsc ? <>&#8595;</> : <>&#8593;</> }</button>

      <ul>
        { filterAndSort().map((contact, i) => <Contact contact={contact} key={i} />) }
      </ul>
    </React.Fragment>
  )
}

export default ContactsList
