import { getBands, getBookings, getVenues } from "../database.js"


// Click event here
document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        if(whatWasClickedOn.dataset.type == "booking"){
                window.alert(`${whatWasClickedOn.dataset.bandname}
                genre : ${whatWasClickedOn.dataset.bandgenre}
                formed in : ${whatWasClickedOn.dataset.bandformed}
                ${whatWasClickedOn.dataset.bandmembers} band members`)
        }
    }
)


// Generate HTML for each booking in a list inside a div for the block
export const bookingsBlock = () => {
    const bookings = getBookings()
    const bands = getBands()
    const venues = getVenues()
    let bookingListHTML = `<div class="bookingListBlock"><ul>`
    //Gathering click event data directly below.
    for (const booking of bookings) {
        bookingListHTML += `<li data-type="booking" 
                            data-bandname="${bands[booking.bandID - 1].name}" 
                            data-bandgenre="${bands[booking.bandID - 1].genre}"
                            data-bandformed="${bands[booking.bandID - 1].formed}"
                            data-bandmembers="${bands[booking.bandID - 1].members}">

        ${bands[booking.bandID - 1].name} playing at ${venues[booking.venueID - 1].name} at ${booking.date}</li>` // Band playing at location on time
        /* The above line is to assemble the string that will be displayed in HTML*/
    }
    bookingListHTML += `</ul></div>`

    return bookingListHTML
}