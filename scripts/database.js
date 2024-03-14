// Contains Database and exports bands, venues, and bookings


const database = {

    bands: [
        { id: 1, name: "Boiled Potato Destroyers", members: 5, genre: "metal", formed: 1845},
        { id: 2, name: "Bubonic Plague", members: 1, genre: "death metal", formed: 1346},
        { id: 3, name: "The Rush In Flus", members: 2, genre: "baby metal", formed: 1833},
        // Inspired by the Boston Molasses Disaster of 1919, where a large tank of molasses burst, flooding the streets.
        { id: 4, name: "Molten Molasses Mayhem", members: 8, genre: "blues rock", formed: 1920 },
        // Based on the Great Emu War of 1932 in Australia, where soldiers were tasked with controlling the emu population.
        { id: 5, name: "Emu Enforcers", members: 4, genre: "country", formed: 1933 },
        // Named after the Dancing Plague of 1518, a mysterious event where people danced uncontrollably in the streets of Strasbourg.
        { id: 6, name: "Dancing Delirium", members: 5, genre: "disco", formed: 1519 },
        // Inspired by the Tanganyika Laughter Epidemic of 1962, where uncontrollable laughter spread among a school in Tanzania.
        { id: 7, name: "Hysterical Hilarity", members: 6, genre: "comedy rock", formed: 1963 }
    ],

    venues:[
        { id: 1, name: "Large Potato Field", sqft: 32595, occupancy: 5000000, address: "Spud Street, Tater Town, Idaho" },
        { id: 2, name: "Across the Pond", sqft: 3900000, occupancy: 746400000, address: "123 Lakeview Lane, Duckburg" },
        { id: 3, name: "The Bad Place", sqft: 6060000, occupancy: 143400000, address: "666 Inferno Avenue, Hades" },
        { id: 4, name: "Big Apple Arena", sqft: 8500000, occupancy: 200000, address: "1 Broadway, New York City, NY" },
        { id: 5, name: "Mountain View Amphitheater", sqft: 500000, occupancy: 30000, address: "Top of the Mountain, Scenic Valley, Colorado" },
        { id: 6, name: "Royal Theatre", sqft: 10000, occupancy: 1500, address: "42 Regal Road, London, UK" },
        { id: 7, name: "Neon Nights Club", sqft: 5000, occupancy: 500, address: "7 Electric Avenue, Neon District, Tokyo" }
    ],

    bookings:[
        { id: 1, bandID: 1, venueID: 1, date: "2024-12-31T10:30:00.000-06:00"},
        { id: 2, bandID: 2, venueID: 2, date: "2024-12-30T10:30:00.000-06:00"},
        { id: 3, bandID: 3, venueID: 3, date: "2024-12-29T10:30:00.000-06:00"},
        { id: 4, bandID: 1, venueID: 4, date: "2024-12-28T12:00:00.000-06:00" }, 
        { id: 5, bandID: 1, venueID: 5, date: "2024-12-27T15:00:00.000-06:00" }, 
        { id: 6, bandID: 2, venueID: 4, date: "2024-12-29T14:30:00.000-06:00" }, 
        { id: 7, bandID: 2, venueID: 5, date: "2024-12-30T17:00:00.000-06:00" }, 
        { id: 8, bandID: 3, venueID: 4, date: "2024-12-31T19:00:00.000-06:00" }, 
        { id: 9, bandID: 3, venueID: 5, date: "2024-12-28T20:30:00.000-06:00" }, 
        { id: 10, bandID: 4, venueID: 6, date: "2024-12-27T18:00:00.000-06:00" }, 
        { id: 11, bandID: 4, venueID: 7, date: "2024-12-28T21:00:00.000-06:00" }, 
        { id: 12, bandID: 5, venueID: 6, date: "2024-12-29T10:00:00.000-06:00" }, 
        { id: 13, bandID: 5, venueID: 7, date: "2024-12-30T13:30:00.000-06:00" }, 
        { id: 14, bandID: 6, venueID: 6, date: "2024-12-31T16:30:00.000-06:00" }, 
        { id: 15, bandID: 6, venueID: 7, date: "2024-12-27T19:00:00.000-06:00" }, 
        { id: 16, bandID: 7, venueID: 6, date: "2024-12-28T20:00:00.000-06:00" }, 
        { id: 17, bandID: 7, venueID: 7, date: "2024-12-29T12:00:00.000-06:00" } 
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