<script setup lang="ts">
import { InvitationProps } from '@/types/invitation'
import { fadeToTop, fadeToBottom, fadeToLeft, fadeToRight, fade } from '@/motions/motions'

const props = defineProps({
    data: {
        type: Object as InvitationProps,
        required: true,
    },
})

const galleryIndex = ref(0)

const countdown = ref(0)
let interval: NodeJS.Timer
let galleryInterval: NodeJS.Timer

onMounted(() => {
    interval = setInterval(() => {
        countdown.value++
    }, 1000)

    galleryInterval = setInterval(() => {
        galleryIndex.value = (galleryIndex.value + 1) % props.data.gallery.length
    }, 4000)
})

onBeforeUnmount(() => {
    clearInterval(interval)
    clearInterval(galleryInterval)
})
</script>

<template>
    <TemplateWrapper color="bg-gray-600">
        <div class="text-brown bg-scotch">
            <section
                class="relative h-screen bg-cover bg-center"
                :style="{ backgroundImage: 'url(' + data.landingImage + ')' }"
            >
                <div class="text-center text-xl text-white">
                    <p class="pb-12 pt-20 drop-shadow-lg">The wedding of</p>
                    <h1 class="pb-12 font-monte text-5xl drop-shadow-lg">
                        {{ data.title }}
                    </h1>
                    <p class="pb-12 drop-shadow-lg">{{ getDay(data.startDate) }}</p>
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-scotch" />
            </section>

            <section v-motion="fadeToBottom" class="px-4 py-16">
                <div class="text-center text-sm">
                    <p class="mb-2 font-medium italic">“{{ data.quote.content }}”</p>
                    <p>{{ data.quote.verse }}</p>
                </div>
            </section>

            <section v-motion="fade" class="px-4 pb-16">
                <div class="relative flex items-center justify-between text-xl">
                    <div class="h-1.5 w-1.5 rounded-full bg-sage" />
                    <p class="z-10 bg-scotch px-px font-medium">Our Special Day</p>
                    <div class="h-1.5 w-1.5 rounded-full bg-sage" />
                    <hr class="absolute left-0 right-0 h-px border-0 bg-sage" />
                </div>
            </section>

            <section class="flex flex-col items-center pb-8">
                <div
                    v-motion="fade"
                    :style="{ backgroundImage: 'url(' + data.maleBride.image + ')' }"
                    class="relative mb-8 aspect-square w-56 rounded-full bg-cover bg-center shadow-[2px_7px_6px_3px_rgba(0,0,0,0.3)]"
                >
                    <img src="/images/flower.png" alt="Flower" class="absolute -left-10 -top-12 w-36 rotate-180" />
                    <img src="/images/flower.png" alt="Flower" class="absolute -bottom-12 -right-10 w-36" />
                </div>
                <p v-motion="fadeToTop" class="mb-7 font-monte text-4xl">{{ data.maleBride.name }}</p>
                <p v-motion="fadeToTop" class="font-medium">Son of</p>
                <p v-if="data.maleBride.father" v-motion="fadeToTop">
                    Bapak {{ data.maleBride.father }}
                    <span v-if="data.maleBride.mother">&</span>
                </p>
                <p v-if="data.maleBride.mother" v-motion="fadeToTop">Ibu {{ data.maleBride.mother }}</p>
            </section>

            <section v-motion="fade" class="pb-10 text-center font-monte text-4xl">&</section>

            <section class="flex flex-col items-center pb-16">
                <div
                    v-motion="fade"
                    :style="{ backgroundImage: 'url(' + data.femaleBride.image + ')' }"
                    class="relative mb-8 aspect-square w-56 rounded-full bg-cover bg-center shadow-[2px_7px_6px_3px_rgba(0,0,0,0.3)]"
                >
                    <img src="/images/flower.png" alt="Flower" class="absolute -left-10 -top-12 w-36 rotate-180" />
                    <img src="/images/flower.png" alt="Flower" class="absolute -bottom-12 -right-10 w-36" />
                </div>
                <p v-motion="fadeToTop" class="mb-7 font-monte text-4xl">{{ data.femaleBride.name }}</p>
                <p v-motion="fadeToTop" class="font-medium">Daughter of</p>
                <p v-if="data.femaleBride.father" v-motion="fadeToTop">
                    Bapak {{ data.femaleBride.father }}
                    <span v-if="data.femaleBride.mother">&</span>
                </p>
                <p v-if="data.femaleBride.mother" v-motion="fadeToTop">Ibu {{ data.femaleBride.mother }}</p>
            </section>

            <section v-motion="fade" class="flex items-center justify-between px-2 pb-16 font-monte">
                <img src="/images/flower-2.png" alt="Flower" class="w-16 -scale-x-100" />
                <h2 class="text-3xl font-medium">Our Love Story</h2>
                <img src="/images/flower-2.png" alt="Flower" class="w-16" />
            </section>

            <section class="mb-8 flex justify-between text-justify">
                <div class="mx-auto flex w-56 flex-col">
                    <div
                        :style="{ backgroundImage: 'url(' + data.stories[2].image + ')' }"
                        class="shadow-sm] mb-4 aspect-video w-full rounded-lg bg-cover bg-center"
                    ></div>
                    <p class="mb-2 text-start font-bold">{{ data.stories[0].title }}</p>
                    <p class="text-xs">{{ data.stories[0].content }}</p>
                </div>
            </section>

            <section v-motion="fadeToBottom" class="pb-16 text-center font-monte text-4xl font-medium">
                <h2>Precious Moments</h2>
            </section>

            <section class="px-4 pb-16">
                <div
                    v-motion="fade"
                    class="mb-3 aspect-image w-full rounded-lg bg-cover bg-center transition-all"
                    :style="{ backgroundImage: 'url(' + data.gallery[galleryIndex].url + ')' }"
                />
            </section>

            <section v-motion="fade" class="pb-16 text-center font-monte text-4xl font-medium">
                <h2>The Event Will be Held</h2>
            </section>

            <section v-motion="fadeToBottom" class="px-4 pb-16 text-center">
                <div :key="countdown">
                    <div class="mb-4 font-medium">
                        <h3 class="text-3xl">{{ getCountdown(data.startDate, 'day') }}</h3>
                        <h3>Days</h3>
                    </div>
                    <div class="grid-row-1 mb-6 grid grid-cols-3 font-medium">
                        <div>
                            <h3 class="text-3xl">{{ getCountdown(data.startDate, 'hour') }}</h3>
                            <h3>Hours</h3>
                        </div>
                        <div>
                            <h3 class="text-3xl">{{ getCountdown(data.startDate, 'minute') }}</h3>
                            <h3>Minutes</h3>
                        </div>
                        <div>
                            <h3 class="text-3xl">{{ getCountdown(data.startDate, 'second') }}</h3>
                            <h3>Second</h3>
                        </div>
                    </div>
                </div>
                <p>{{ getDay(data.startDate) }}</p>
                <p>at {{ getTime(data.startDate) }}</p>
            </section>

            <section v-motion="fadeToTop" class="bg-brown mx-8 mb-16 rounded-lg p-8 text-center text-sm text-scotch">
                <p class="mb-5">
                    <b>{{ data.wishes.length }} Guest</b> response will join, let&apos;s send your response too.
                </p>
                <button class="w-full rounded-full border-0 bg-sky-400 py-3">Reservation (RSVP)</button>
            </section>

            <section class="px-4 pb-10">
                <div v-for="(timeline, index) in data.timelines" :key="timeline._id" class="mb-7 text-center text-sm">
                    <div v-if="index % 2 === 0" v-motion="fadeToLeft">
                        <h2 class="mb-3 font-monte text-4xl font-medium">{{ timeline.title }}</h2>
                        <p class="mb-1">
                            <FontAwesomeIcon icon="fa-regular fa-calendar" /> {{ getDay(timeline.date) }}
                        </p>
                        <p class="mb-1">
                            <FontAwesomeIcon icon="fa-regular fa-clock" /> at {{ getTime(timeline.date) }} - Finish
                        </p>
                        <p v-if="timeline.location" class="mb-4">
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" /> {{ timeline.location }}
                        </p>
                        <a v-if="timeline.url" :href="timeline.url" target="_blank">
                            <button class="rounded-full border border-sage px-6 py-2">
                                <FontAwesomeIcon icon="fa-solid fa-location-dot" /> See location
                            </button>
                        </a>
                    </div>
                    <div v-else v-motion="fadeToRight">
                        <h2 class="mb-3 font-monte text-4xl font-medium">{{ timeline.title }}</h2>
                        <p class="mb-1">
                            <FontAwesomeIcon icon="fa-regular fa-calendar" /> {{ getDay(timeline.date) }}
                        </p>
                        <p class="mb-1">
                            <FontAwesomeIcon icon="fa-regular fa-clock" /> at {{ getTime(timeline.date) }} - Finish
                        </p>
                        <p v-if="timeline.location" class="mb-4">
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" /> {{ timeline.location }}
                        </p>
                        <a v-if="timeline.url" :href="timeline.url" target="_blank">
                            <button class="rounded-full border border-sage px-6 py-2">
                                <FontAwesomeIcon icon="fa-solid fa-location-dot" /> See location
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <section v-motion="fadeToTop" class="px-4 pb-16 text-center text-sm">
                <p class="mb-4">
                    It is an honor and happiness for us if, Mr / Mrs / Brother / i can attend our wedding celebration.
                    Looking forward to celebrate with you. Thank you.
                </p>
                <p class="font-medium">also invite:</p>
                <ul>
                    <li v-for="guest in data.specialGuests" :key="guest._id">{{ guest.name }}</li>
                </ul>
            </section>

            <section v-motion="fade" class="pb-8 text-center font-monte text-4xl font-medium">
                <h2>Send a Wish</h2>
            </section>

            <section v-motion="fade" class="mb-4 h-60 overflow-y-scroll px-4">
                <div
                    v-for="wish in data.wishes"
                    :key="wish.name"
                    v-motion="fadeToRight"
                    class="mb-4 flex gap-5 text-xs font-medium"
                >
                    <div
                        class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-neutral-400 font-bold text-black"
                    >
                        {{ getInitial(wish.name) }}
                    </div>
                    <div class="relative grow">
                        <FontAwesomeIcon
                            icon="fa-solid fa-play"
                            class="absolute -left-3 rotate-180 text-2xl text-white"
                        />
                        <div class="rounded-xl rounded-tl-lg bg-white p-4 text-black shadow-3xl">
                            <p class="font-bold">{{ wish.name }}</p>
                            <p v-if="wish.address">at {{ wish.address }}</p>
                            <p class="font-normal">{{ wish.wish }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section v-motion="fade" class="mx-4 mb-16 rounded-lg bg-[#f1eee2] p-6 shadow-3xl">
                <h2 class="mb-3 font-medium">Send a wish</h2>
                <form action="#" class="text-center text-sm">
                    <input
                        type="text"
                        placeholder="Your full name"
                        class="mb-4 w-full rounded-md border border-[#81787e] bg-transparent p-2 placeholder-[#948b8f]"
                    />
                    <input
                        type="text"
                        placeholder="Your address"
                        class="mb-4 w-full rounded-md border border-[#81787e] bg-transparent p-2 placeholder-[#948b8f]"
                    />
                    <textarea
                        placeholder="Your Wish"
                        class="mb-4 w-full rounded-md border border-[#81787e] bg-transparent p-2 placeholder-[#948b8f]"
                    />
                    <button class="bg-brown rounded-full border-none px-6 py-2 text-scotch">Submit Now</button>
                </form>
            </section>

            <footer class="bg-brown py-3 text-center font-medium text-scotch">
                <p class="mb-1 text-xs">Powered by</p>
                <p>qiran.id</p>
            </footer>
        </div>
    </TemplateWrapper>
</template>

<style scoped>
.text-brown {
    color: #3f2305;
}

.bg-brown {
    background-color: #3f2305;
}
</style>
