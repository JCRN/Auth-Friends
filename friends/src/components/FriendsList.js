import React, { useState, useEffect } from 'react'

import { FriendCard } from './FriendCard'
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function FriendsList(props) {
  const [friends, setFriends] = useState([])

  const getData = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/friends')
      .then(response => {
        setFriends(response.data)
      })
      .catch(error => console.log(error.response))
  }

  useEffect(() => {
    console.log('hello from inside useEffect')
    getData()
  })

  return (
    <div>
      {friends.map(friend => {
        ;<FriendCard friend={friend} />
      })}
    </div>
  )
}
