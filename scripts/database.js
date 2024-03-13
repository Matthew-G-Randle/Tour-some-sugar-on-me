// Contains Database and exports bands, venues, and bookings


const database = {

    bands: [
        { id: 1, name: "Boiled Potato Destroyers", members: 5, genre: "metal", formed:},
        { id: 2, firstName: "Alice", lastName: "Smith", destinationId: 3 },
        { id: 3, firstName: "David", lastName: "Johnson", destinationId: 2 },
        { id: 4, firstName: "Emily", lastName: "Williams", destinationId: 6 },
    ],

    venues:[
        {id: 1, name: "large potato field", sqft: 10000, occupancy: 400}
    ],

    bookings:[
        { id: 1, bandID: 1, venueID: 1, date: "2024-12-31T10:30:00.000-06:00"}
    ]
}


export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}