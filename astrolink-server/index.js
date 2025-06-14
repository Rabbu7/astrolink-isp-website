const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// middleware
app.use(cors());
app.use(express.json());

// astrolink-admin
// PXvRyV9tT4dVEOHc

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a4vyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // Db collection define
    const db = client.db("astrolinkDB");
    const usersCollection = db.collection("users");
    const complaintCollection = db.collection("complaints");

    //<-----------------------users APIs-------------------------->

    // create a new user
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      console.log("creating a new user", newUser);
      const result = await usersCollection.insertOne(newUser); // Check if the user already exists
      res.send(result); // Send the result back to the client
    });

    app.patch("/users", async (req, res) => {
      const email = req.body.email; // Extract the email from the request body
      const filter = { email }; // Create a filter to find the user by email

      const updatedDoc = {
        $set: {
          lastSignInTime: req.body?.lastSignInTime, // Extract the last sign-in time from the request body
        },
      };
      const result = await usersCollection.updateOne(filter, updatedDoc); // Update the user in the collection
      res.send(result); // Send the result back to the client
    });

    // Get all users
    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find(); // Find all users
      const result = await cursor.toArray(); // Convert the cursor to an array
      res.send(result); // Send the result back to the client
    });

    // Filter users by role
    app.get("/users", async (req, res) => {
      const role = req.query.role;
      const filter = role ? { role } : {};
      const result = await usersCollection.find(filter).toArray();
      res.send(result);
    });

    //<---------------complaint apis--------------------->

    // customer submits
    app.post("/complaints", async (req, res) => {
      const complaint = req.body; // { email, issue, address, status, assignedTo, createdAt }
      console.log("creating a complaint", complaint);

      complaint.status = "pending"; // default status
      complaint.createdAt = new Date();

      const result = await complaintCollection.insertOne(complaint);
      res.send(result);
    });

    // Get complaints (all)
    app.get("/complaints", async (req, res) => {
      const result = await complaintCollection.find().toArray();
      res.send(result);
    });

    // GET complaints assigned to specific technician
    app.get("/complaints", async (req, res) => {
      const assignedTo = req.query.assignedTo;
      let filter = {};
      if (assignedTo) {
        filter = { assignedTo };
      }
      const result = await complaintCollection.find(filter).toArray();
      res.send(result);
    });

    // Assign Technician
    app.patch("/complaints/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const status = req.body.status;

         console.log("PATCH BODY:", req.body);

        

        if (!ObjectId.isValid(id)) {
          return res.status(400).send({ error: "Invalid ID format" });
        }

        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: { 
               status: status,
               assignedTo: req.body.assignedTo,
           },
        };

        const result = await complaintCollection.updateOne(filter, updateDoc);
        console.log("MongoDB update result:", result);

        res.send(result);
      } catch (error) {
        console.error("❌ PATCH ERROR:", error.message);
        res.status(500).send({ error: error.message });
      }
    });
  } finally {
    // Ensures that the client will close when you finish/error
    //     await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("on the air.........");
});

app.listen(port, () => {
  console.log(`web is airing in port: ${port}`);
});
