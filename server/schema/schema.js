const axios = require('axios');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQ

} = require('graphql');



const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    date_local: { type: GraphQLString },
    success: { type: GraphQLBoolean },
    crew: {type: new GraphQLList(CrewType)},
  }) 
});

const CrewType = new GraphQLObjectType({
  name: 'Crew',
  fields: () => ({
    crew: { type: GraphQLID },
    role: { type: GraphQLString }
  })
});

const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    active: { type: GraphQLBoolean },
    images: { type: new GraphQLList(GraphQLString) }
  })
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v4/rockets')
          .then(res => res.data)
          .catch(err => console.log(err));
             }
    },
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios.get('https://api.spacexdata.com/v5/launches/')
          .then(res => res.data)
          .catch(err => console.log(err));
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});