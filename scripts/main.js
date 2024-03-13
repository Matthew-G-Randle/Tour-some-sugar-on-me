import { bookingsBlock } from "./bookings/bookingsBlock.js"
import { bandsBlock } from "./bands/bandsBlock.js"
import { venuesBlock } from "./venues/venuesBlock.js"

const mainHTML = `

<article class="container__bookings">
    <h2>bookings</h2>
    ${bookingsBlock()}
</article>

<article class="container__bottom">
    <section class="container__venues">
        <h2>Venues</h2>
        ${venuesBlock()}
    </section>
    <section class="container__bands">
        <h2>Bands</h2>
        ${bandsBlock()}
    </section>
</article>


`


document.getElementById("container__main").innerHTML = mainHTML