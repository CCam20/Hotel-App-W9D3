use bookings;
db.dropDatabase();

db.guests.insertMany([
    {
      name: "Carmen R. Dion",
      email: "CarmenRDion@armyspy.com",
      isCheckedIn:   false
    },
    {
      name: "Arnold M. Silk",
      email: "ArnoldMSilk@teleworm.us",
      isCheckedIn:   true
    },
    {
      name: "Fernando J. Simons",
      email: "FernandoJSimons@dayrep.com",
      ç:   false
    }
  ]);