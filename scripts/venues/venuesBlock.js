import { getVenues, getBookings, getBands } from "../database.js"

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        if(whatWasClickedOn.dataset.type == "venue"){
            const bookings = getBookings()
            const bands = getBands()
            let venueClickString = "This venue is booked by :"
            for (const booking of bookings) {
                if (booking.venueID == whatWasClickedOn.dataset.venueid){
                    venueClickString += bands[booking.bandID - 1].name + ", "
                }
            }

            window.alert(`${venueClickString}`)
        }
    }
)

export const venuesBlock = () => {
    const venues = getVenues()
    let venueListHTML = `<div class="bandListBlock"><ul>`
    
    for (const venue of venues) {
        venueListHTML += `<li data-type="venue" 
                            data-venueid="${venue.id}"
                            >${venue.name}: ${venue.address} sqft: ${venue.sqft} max occupancy: ${venue.occupancy}</li>`
    }

    venueListHTML += `</ul></div>`

    return venueListHTML
}