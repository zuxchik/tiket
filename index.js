const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

app.use(express.json());
app.use(cors());


async function connectToDB() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("MongoDB connection successful");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}
connectToDB();


const swaggerOptions = {
  swaggerDefinition: { 
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
      description: "API documentation using Swagger"
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"]
};


const swaggerDocs = swaggerJsdoc(swaggerOptions)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.get("/", (req, res) => {
  res.send("Hi NodeJs!");
});

const { bookingRouter } = require("./routes/booking.Route.js");
app.use("/booking", bookingRouter);

const { DiscauntRuote } = require("./routes/discaunt.Ruote.js");
app.use("/DiscauntRuote", DiscauntRuote);

const { District } = require("./routes/District.Route.js");
app.use("/District", District);

const { venue_type } = require("./routes/venue_type.Route.js");
app.use("/venue_type", venue_type);

const { adminRouter } = require("./routes/Admin.Route.js");
app.use("/adminRouter", adminRouter);

const { RegionRouter } = require("./routes/region.Route.js");
app.use("/RegionRouter", RegionRouter);

const { cartRouter } = require("./routes/cart.Route.js");
app.use("/cartRouter", cartRouter);

const { customerAddressRouter } = require("./routes/customer_address.Route.js");
app.use("/customerAddressRouter", customerAddressRouter);

const { customerCardRouter } = require("./routes/customer_card.Route.js");
app.use("/customerCardRouter", customerCardRouter);

const { customerRouter } = require("./routes/customer.Route.js");
app.use("/customerRouter", customerRouter);

const { eventTypeRouter } = require("./routes/event_type.Route.js");
app.use("/eventTypeRouter", eventTypeRouter);

const { eventRouter } = require("./routes/event.Route.js");
app.use("/eventRouter", eventRouter);

const { humanCategoryRouter } = require("./routes/human_category.Route.js");
app.use("/humanCategoryRouter", humanCategoryRouter);

const { seatTypeRouter } = require("./routes/seat_typeRoute.js");
app.use("/seatTypeRouter", seatTypeRouter);

const { seatRouter } = require("./routes/seat.Route.js");
app.use("/seatRouter", seatRouter);

const { ticketRouter } = require("./routes/ticket.route.js");
app.use("/ticketRouter", ticketRouter);

const { venuePhotoRouter } = require("./routes/venua_photo.route.js");
app.use("/venuePhotoRouter", venuePhotoRouter);

const { Venue } = require("./routes/venue.Route.js");
app.use("/Venue", Venue);

const { paymentRouter } = require("./routes/payment.Route.js");
app.use("/paymentRouter", paymentRouter);

const { genderRouter } = require("./routes/Gender.Route.js");
app.use("/genderRouter", genderRouter);

const { languageRouter } = require("./routes/language.Route.js");
app.use("/languageRouter", languageRouter)

const { flatRoute } = require("./routes/flat.Route.js");
app.use("/flatRoute", flatRoute)

const { SectorRoute } = require("./routes/Sector.Route.js");
app.use("/SectorRoute", SectorRoute)

const { StatusRouter } = require("./routes/status.Route.js");
app.use("/StatusRouter", StatusRouter)

const { TicketTypeChikRoute } = require("./routes/TicketType.Route.js");
app.use("/TicketTypeChikRoute", TicketTypeChikRoute)




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});