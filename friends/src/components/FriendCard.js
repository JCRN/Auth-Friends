import React from 'react'
import { Card } from 'semantic-ui-react'
export const FriendCard = ({ friend }) => {
  const { age, email, name } = friend

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{age}</Card.Meta>
        <Card.Description>{email}</Card.Description>
      </Card.Content>
    </Card>
  )
}
