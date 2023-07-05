import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCalendar, faClock, faLocationDot, faPlay)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
