
const config = {
    endpoint: "https://rusikulya-db.documents.azure.com:443/",
    key: "75odz1VJwi6kvXsBeRbExWcoJiWfPh1YKTRdY6czoXgG8d0iRPZafYWKKxWxHGXAGOvrKHjvDN1fq4NlxNksrA==",
    databaseId: "bansadhara",
    containerId: "item",
    partitionKey: { kind: "Hash", paths: ["/category"] }
  };
  
  module.exports = config;
  