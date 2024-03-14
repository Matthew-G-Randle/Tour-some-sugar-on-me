import { getVenues, getBookings, getBands } from "../database.js"

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target
        if(whatWasClickedOn.dataset.type == "band"){
            const bookings = getBookings()
            const venues = getVenues()
            let bandClickString = "This band has booked :"
            for (const booking of bookings) {
                if (booking.bandID == whatWasClickedOn.dataset.bandid){
                    bandClickString += venues[booking.venueID - 1].name + ", "
                }
            }

            window.alert(`${bandClickString}`)
        }
    }
)


export const bandsBlock = () => {
    const bands = getBands()
    let bandListHTML = `<div class="bandListBlock"><ul>`
    
    for (const band of bands) {
        bandListHTML += `<li 
        data-type="band" 
        data-bandid="${band.id}"
        >${band.name}</li>`
    }

    bandListHTML += `</ul></div>`

    return bandListHTML
}