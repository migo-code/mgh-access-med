import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers/index.js";
import { readFileSync } from "fs";
import { connectToDatabase } from "./db/connection.js";
import { gql } from 'graphql-tag';

const typeDefs = gql(readFileSync("./schema.graphql", { encoding: "utf-8" }));

await connectToDatabase();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { url } = await startStandaloneServer(server);

console.log(`🚀 Server listening at: ${url}`);
