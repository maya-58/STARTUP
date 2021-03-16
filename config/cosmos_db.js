const config = require("./cosmos_config");
const CosmosClient = require("@azure/cosmos").CosmosClient;

const dbContext = require("./cosmos_dbcontext");

const newItem = {
    feedid: "140",
    feedcategory: "free",
    feedname: "Cosmos DB",
    feeddescription: "Complete Cosmos DB Node.js Pro ⚡",
    feedisComplete: true
  };

const rundb = async() =>{

  try {

     //connection property

     const { endpoint, key, databaseId, containerId } = config;

     const client = new CosmosClient({ endpoint, key });
     
     const database = client.database(databaseId);
     const container = database.container(containerId);
 
         // Make sure Tasks database is already setup. If not, create it.
         await dbContext.create(client, databaseId, containerId);
 
 
         // Create new item
         const { resource: createdItem } = await container.items.create(newItem);
         
         console.log(`\r\nCreated new item: ${createdItem.id} - ${createdItem.feeddescription}\r\n`);
 
 
    
  } catch (error) {
    console.error("Error ...Debug");
    
  }

}

   
const checkdb = async()=>{
  try {
    console.log("Database check starts");

    
  } catch (error) {
    console.error("Error ...Debug");
    
  }
}

//rundb();

module.exports = rundb;