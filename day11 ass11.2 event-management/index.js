const express = require("express");
const connectDB = require("./config/db");

const organizerRoutes = require("./routes/organizerRoutes");
const eventRoutes = require("./routes/eventRoutes");
const attendeeRoutes = require("./routes/attendeeRoutes");
const registrationRoutes = require("./routes/registrationRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();
app.use(express.json());

connectDB();

app.use("/organizers", organizerRoutes);
app.use("/events", eventRoutes);
app.use("/attendees", attendeeRoutes);
app.use("/registrations", registrationRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
