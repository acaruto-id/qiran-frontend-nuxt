import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import {
    faArrowLeft,
    faArrowRight,
    faChevronLeft,
    faChevronRight,
    faLocationDot,
    faPlay,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(
    faInstagram,
    faArrowLeft,
    faArrowRight,
    faCalendar,
    faClock,
    faLocationDot,
    faPlay,
    faChevronLeft,
    faChevronRight
)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
