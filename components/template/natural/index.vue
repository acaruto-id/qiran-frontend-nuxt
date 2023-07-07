<script setup lang="ts">
import { InvitationProps } from '@/types/invitation'

defineProps({
    data: {
        type: Object as InvitationProps,
        required: true,
    },
})

const galleryIndex = ref(0)
const leftGallery = computed(() => (((galleryIndex.value - 1) % 3) + 3) % 3)
const middleGallery = computed(() => ((galleryIndex.value % 3) + 3) % 3)
const rightGallery = computed(() => (((galleryIndex.value + 1) % 3) + 3) % 3)

const countdown = ref(0)
let interval: NodeJS.Timer

onMounted(() => {
    interval = setInterval(() => {
        countdown.value++
    }, 1000)
})

onBeforeUnmount(() => {
    clearInterval(interval)
})
</script>

<template>
    <TemplateWrapper color="bg-sage-700">
        <div class="bg-scotch text-sage">
            <section class="relative h-screen">
                <img src="/images/landing-image.png" alt="Landing image" class="absolute h-full w-full object-cover" />
                <div class="text-center text-xl text-sage-700">
                    <p class="pb-12 pt-20 drop-shadow-lg">The wedding of</p>
                    <h1 class="pb-12 font-monte text-5xl drop-shadow-lg">
                        {{ data.maleBride.name.split(' ')[0] }} & {{ data.femaleBride.name.split(' ')[0] }}
                    </h1>
                    <p class="pb-12 drop-shadow-lg">{{ getDay(data.startDate) }}</p>
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-scotch" />
            </section>

            <section v-motion-slide-visible-once-bottom class="px-4 py-16">
                <div class="text-center text-sm">
                    <p class="mb-2 font-medium italic">“{{ data.quote.content }}”</p>
                    <p>{{ data.quote.verse }}</p>
                </div>
            </section>

            <section v-motion-slide-visible-once-bottom class="px-4 pb-16">
                <div class="relative flex items-center justify-between text-xl">
                    <div class="h-1.5 w-1.5 rounded-full bg-sage" />
                    <p class="z-10 bg-scotch px-px font-medium">Our Special Day</p>
                    <div class="h-1.5 w-1.5 rounded-full bg-sage" />
                    <hr class="absolute left-0 right-0 h-px border-0 bg-sage" />
                </div>
            </section>

            <section v-motion-slide-visible-once-bottom class="flex flex-col items-center pb-8 text-sage">
                <div
                    :style="{ backgroundImage: 'url(' + data.maleBride.image + ')' }"
                    class="relative mb-8 aspect-image w-48 rounded-xl bg-cover bg-center shadow-[2px_7px_6px_3px_rgba(0,0,0,0.3)]"
                >
                    <img src="/images/flower.png" alt="Flower" class="absolute -left-10 -top-12 w-36 rotate-180" />
                    <img src="/images/flower.png" alt="Flower" class="absolute -bottom-12 -right-10 w-36" />
                </div>
                <p class="mb-7 font-monte text-4xl">{{ data.maleBride.name }}</p>
                <p class="font-medium">Son of</p>
                <p v-if="data.maleBride.father">
                    Bapak {{ data.maleBride.father }}
                    <span v-if="data.maleBride.mother">&</span>
                </p>
                <p v-if="data.maleBride.mother">Ibu {{ data.maleBride.mother }}</p>
            </section>

            <section v-motion-slide-visible-once-bottom class="pb-10 text-center font-monte text-4xl">&</section>

            <section v-motion-slide-visible-once-bottom class="flex flex-col items-center pb-16 text-sage">
                <div
                    :style="{ backgroundImage: 'url(' + data.femaleBride.image + ')' }"
                    class="relative mb-8 aspect-image w-48 rounded-xl bg-cover bg-center shadow-[2px_7px_6px_3px_rgba(0,0,0,0.3)]"
                >
                    <img src="/images/flower.png" alt="Flower" class="absolute -left-10 -top-12 w-36 rotate-180" />
                    <img src="/images/flower.png" alt="Flower" class="absolute -bottom-12 -right-10 w-36" />
                </div>
                <p class="mb-7 font-monte text-4xl">{{ data.femaleBride.name }}</p>
                <p class="font-medium">Daughter of</p>
                <p v-if="data.femaleBride.father">
                    Bapak {{ data.femaleBride.father }}
                    <span v-if="data.femaleBride.mother">&</span>
                </p>
                <p v-if="data.femaleBride.mother">Ibu {{ data.femaleBride.mother }}</p>
            </section>

            <section v-motion-slide-visible-once-bottom class="flex items-center justify-between px-2 pb-16 font-monte">
                <img src="/images/flower-2.png" alt="Flower" class="w-20 -scale-x-100" />
                <h2 class="text-4xl font-medium">Our Love Story</h2>
                <img src="/images/flower-2.png" alt="Flower" class="w-20" />
            </section>

            <section class="grid grid-cols-2 grid-rows-3 gap-x-3 gap-y-7 px-4 pb-16 text-xs">
                <template v-for="(story, index) in data.stories" :key="story._id">
                    <img
                        v-if="index % 2 === 0"
                        v-motion-slide-visible-once-bottom
                        :src="story.image"
                        alt="photo1"
                        class="aspect-image w-full rounded-xl object-cover"
                    />
                    <div v-motion-slide-visible-once-bottom class="text-justify">
                        <h2 class="text-md mb-3 text-center font-semibold">{{ story.title }}</h2>
                        <p class="leading-4">
                            {{ story.content }}
                        </p>
                    </div>
                    <img
                        v-if="index % 2 !== 0"
                        v-motion-slide-visible-once-bottom
                        :src="story.image"
                        alt="photo1"
                        class="aspect-image w-full rounded-xl object-cover"
                    />
                </template>
            </section>

            <section v-motion-slide-visible-once-bottom class="pb-16 text-center font-monte text-4xl font-medium">
                <h2>Precious Moments</h2>
            </section>

            <section class="px-4 pb-16">
                <div
                    v-motion-slide-visible-once-bottom
                    class="mb-3 aspect-image w-full rounded-lg bg-cover bg-center transition-all"
                    :style="{ backgroundImage: 'url(' + data.gallery[middleGallery].url + ')' }"
                />
                <div v-motion-slide-visible-once-bottom class="grid-row-1 grid grid-cols-3 gap-3 text-center">
                    <div class="relative cursor-pointer overflow-hidden rounded-lg" @click="galleryIndex--">
                        <img
                            :src="data.gallery[leftGallery].url"
                            alt="gallery"
                            class="aspect-landscape w-full object-cover"
                        />
                        <div class="absolute inset-0 bg-gradient-to-r from-scotch/50 to-transparent" />
                        <FontAwesomeIcon
                            icon="fa-solid fa-chevron-left"
                            class="absolute inset-0 my-auto ml-4 text-3xl text-white"
                        />
                    </div>
                    <img
                        :src="data.gallery[middleGallery].url"
                        alt="gallery"
                        class="aspect-landscape w-full rounded-lg border-2 border-sage-600 object-cover"
                    />
                    <div class="relative cursor-pointer overflow-hidden rounded-lg" @click="galleryIndex++">
                        <img
                            :src="data.gallery[rightGallery].url"
                            alt="gallery"
                            class="aspect-landscape w-full rounded-lg object-cover"
                            @click="galleryIndex++"
                        />
                        <div class="absolute inset-0 bg-gradient-to-l from-scotch/50 to-transparent" />
                        <FontAwesomeIcon
                            icon="fa-solid fa-chevron-right"
                            class="absolute bottom-0 right-0 top-0 my-auto mr-4 text-3xl text-white"
                        />
                    </div>
                </div>
            </section>

            <section v-motion-slide-visible-once-bottom class="pb-16 text-center font-monte text-4xl font-medium">
                <h2>The Event Will be Held</h2>
            </section>

            <section v-motion-slide-visible-once-bottom class="px-4 pb-16 text-center">
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

            <section
                v-motion-slide-visible-once-bottom
                class="mx-8 mb-16 rounded-lg bg-sage p-8 text-center text-sm text-scotch"
            >
                <p class="mb-5">
                    <b>{{ data.wishes.length }} Guest</b> response will join, let&apos;s send your response too.
                </p>
                <button class="w-full rounded-full border-0 bg-sky-400 py-3">Reservation (RSVP)</button>
            </section>

            <section v-motion-slide-visible-once-bottom class="px-4 pb-10">
                <div v-for="timeline in data.timelines" :key="timeline._id" class="mb-7 text-center text-sm">
                    <h2 class="mb-3 font-monte text-4xl font-medium">{{ timeline.title }}</h2>
                    <p class="mb-1"><FontAwesomeIcon icon="fa-regular fa-calendar" /> {{ getDay(timeline.date) }}</p>
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
            </section>

            <section v-motion-slide-visible-once-bottom class="px-4 pb-16 text-center text-sm">
                <p class="mb-4">
                    It is an honor and happiness for us if, Mr / Mrs / Brother / i can attend our wedding celebration.
                    Looking forward to celebrate with you. Thank you.
                </p>
                <p class="font-medium">also invite:</p>
                <ul>
                    <li v-for="guest in data.specialGuests" :key="guest._id">{{ guest.name }}</li>
                </ul>
            </section>

            <section v-motion-slide-visible-once-bottom class="pb-8 text-center font-monte text-4xl font-medium">
                <h2>Send a Wish</h2>
            </section>

            <section v-motion-slide-visible-once-bottom class="mb-4 h-60 overflow-y-scroll px-4">
                <div v-for="wish in data.wishes" :key="wish.name" class="mb-4 flex gap-5 text-xs font-medium">
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

            <section v-motion-slide-visible-once-bottom class="mx-4 mb-16 rounded-lg bg-[#f1eee2] p-6 shadow-3xl">
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
                    <button class="rounded-full border-none bg-sage px-6 py-2 text-scotch">Submit Now</button>
                </form>
            </section>

            <footer class="bg-sage py-3 text-center font-medium text-scotch">
                <p class="mb-1 text-xs">Powered by</p>
                <p>qiran.id</p>
            </footer>
        </div>
    </TemplateWrapper>
</template>
