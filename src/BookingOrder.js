{ _id: ObjectID
    confirmed: Boolean,
    rooms: [roomObjectId, roomObjectId, //etc],
    totalAtBookingTime: Number,
    guest: GuestId,
    startDate: Date,
    endDate: Date,
    amountPaid: Number,
    balance: Number,

}
