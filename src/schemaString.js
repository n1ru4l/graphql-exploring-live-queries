import { liveSubscriptionTypeDef } from 'graphql-live-subscriptions'

const liveSubscription = liveSubscriptionTypeDef({
  queryType: 'LiveQueryRoot',
})

const schemaString = `
  type Subscription

  type LiveQueryRoot {
    houses: [House!]!
    jedis: [Jedi!]!
  }

  type Query {
    houses: [House!]!
    jedis: [Jedi!]!
    someNonLiveField: String!
  }

  type House {
    id: ID!
    address(includePostalCode: Boolean!): String!
    numberOfCats: Int!
    numberOfDogs: Int!
  }

  type Jedi {
    id: ID!
    name: String!
    primaryAddress: House
    houses: [House!]!
  }
`

export default [
  schemaString,
  liveSubscription,
]
