<script setup lang="ts">
import { InvitationProps } from '@/types/invitation'
import { fadeToTop, fadeToBottom, fadeToLeft, fadeToRight, fade } from '@/motions/motions'

const props = defineProps({
    data: {
        type: Object as InvitationProps,
        required: true,
    },
})

const route = useRoute()
const storyIndex = ref(0)
const currentStory = computed(
    () => ((storyIndex.value % props.data.stories.length) + props.data.stories.length) % props.data.stories.length
)

const galleryIndex = ref(0)
const leftGallery = computed(
    () =>
        (((galleryIndex.value - 1) % props.data.gallery.length) + props.data.gallery.length) % props.data.gallery.length
)
const middleGallery = computed(
    () => ((galleryIndex.value % props.data.gallery.length) + props.data.gallery.length) % props.data.gallery.length
)
const rightGallery = computed(
    () =>
        (((galleryIndex.value + 1) % props.data.gallery.length) + props.data.gallery.length) % props.data.gallery.length
)

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

const formData = {
    name: '',
    address: '',
    wish: '',
}

const submitWish = async () => {
    const { data } = await useFetch(`https://api.qiran.id/v1/invitation/${route.params.slug}/wish`, {
        method: 'POST',
        body: {
            name: formData.name,
            address: formData.address,
            wish: formData.wish,
        },
    })

    if (!data) return alert('Gagal mengirimkan harapan, silahkan coba lagi')

    wishes.value.push({
        name: formData.name,
        address: formData.address,
        wish: formData.wish,
    })
    formData.name = ''
    formData.address = ''
    formData.wish = ''
}

const wishes = ref(props.data.wishes)
</script>

<template>
    <TemplateWrapper color="bg-gray-600">
        <div class="bg-[#eaeaea] text-[#313131]">
            <section
                class="relative h-screen bg-cover bg-center"
                :style="{ backgroundImage: 'url(' + data.landingImage + ')' }"
            >
                <div class="text-center text-xl text-white">
                    <p class="pb-12 pt-20 drop-shadow-lg">Pernikahan</p>
                    <h1 class="pb-12 font-ptserif text-3xl drop-shadow-lg">
                        {{ data.title }}
                    </h1>
                    <p class="pb-12 drop-shadow-lg">{{ getDay(data.startDate) }}</p>
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-scotch" />
            </section>

            <section class="px-4 py-16">
                <div class="text-center text-sm">
                    <p v-motion="fade" class="mb-2 font-medium italic">“{{ data.quote.content }}”</p>
                    <p v-motion="fade">{{ data.quote.verse }}</p>
                </div>
            </section>

            <section v-motion="fade" class="px-4 pb-16">
                <div class="relative flex items-center justify-center text-xl">
                    <p class="z-10 px-px text-center text-2xl font-medium text-[#313131]">Calon Pengantin</p>
                </div>
            </section>

            <section class="flex items-center justify-center px-3 pb-8">
                <div
                    v-motion="fadeToRight"
                    :style="{ backgroundImage: 'url(' + data.maleBride.image + ')' }"
                    class="py-auto mr-4 aspect-square w-40 items-center rounded-full bg-cover bg-center"
                ></div>
                <div>
                    <p v-motion="fadeToLeft" class="mb-2 border-b border-[#313131] pb-2 text-xl font-medium">
                        {{ data.maleBride.name }}
                    </p>
                    <p v-motion="fadeToLeft" class="font-medium">Putra dari</p>
                    <p v-if="data.maleBride.father" v-motion="fadeToLeft" class="font-sm font-light">
                        {{ data.maleBride.father }}
                        <span v-if="data.maleBride.mother">&</span>
                    </p>
                    <p v-if="data.maleBride.mother" v-motion="fadeToLeft" class="font-sm font-light">
                        {{ data.maleBride.mother }}
                    </p>
                </div>
            </section>

            <section class="flex items-center justify-center px-3 pb-16">
                <div class="mr-4">
                    <p
                        v-motion="fadeToRight"
                        class="mb-2 border-b border-[#313131] pb-2 text-right text-xl font-medium"
                    >
                        {{ data.femaleBride.name }}
                    </p>
                    <p v-motion="fadeToRight" class="text-right font-medium">Putri dari</p>
                    <p v-if="data.femaleBride.father" v-motion="fadeToRight" class="font-sm text-right font-light">
                        {{ data.femaleBride.father }}
                        <span v-if="data.femaleBride.mother">&</span>
                    </p>
                    <p v-if="data.femaleBride.mother" v-motion="fadeToRight" class="font-sm text-right font-light">
                        {{ data.femaleBride.mother }}
                    </p>
                </div>
                <div
                    v-motion="fadeToLeft"
                    :style="{ backgroundImage: 'url(' + data.femaleBride.image + ')' }"
                    class="relative mr-4 aspect-square w-40 rounded-full bg-cover bg-center"
                ></div>
            </section>

            <template v-if="data.stories.length > 0">
                <section v-motion="fade" class="flex items-center justify-center px-2 pb-6">
                    <h2 class="font-ptserif text-3xl font-medium">Our Story</h2>
                </section>

                <section class="mb-12 flex flex-col px-10 text-justify">
                    <div
                        :style="{ backgroundImage: 'url(' + data.stories[currentStory].image + ')' }"
                        class="mb-4 flex aspect-image w-full flex-col justify-end bg-cover bg-center shadow-sm"
                    >
                        <div class="px-3 py-2">
                            <p class="mb-2 text-start font-bold text-white">{{ data.stories[currentStory].title }}</p>
                            <p class="text-xs text-white">{{ data.stories[currentStory].content }}</p>
                        </div>
                    </div>
                    <div class="mt-2 flex items-center gap-3">
                        <p class="text-xs italic">More story</p>
                        <hr class="border-0.5 grow border-[#313131] bg-[#313131]" />
                        <FontAwesomeIcon
                            icon="fa-solid fa-arrow-left"
                            class="rounded-full border border-black p-4 text-xl"
                            @click="storyIndex--"
                        />
                        <FontAwesomeIcon
                            icon="fa-solid fa-arrow-right"
                            class="rounded-full border border-black p-4 text-xl"
                            @click="storyIndex++"
                        />
                    </div>
                </section>
            </template>

            <template v-if="data.gallery.length > 0">
                <section v-motion="fadeToBottom" class="pb-8 text-center font-ptserif text-3xl font-medium">
                    <h2>Precious Moment</h2>
                </section>

                <section v-motion="fadeToBottom" class="px-10 pb-16">
                    <div
                        class="mb-3 aspect-image w-full bg-cover bg-center transition-all"
                        :style="{ backgroundImage: 'url(' + data.gallery[middleGallery].url + ')' }"
                    />
                    <div v-motion="fade" class="grid-row-1 grid grid-cols-3 gap-3 text-center">
                        <div class="relative cursor-pointer overflow-hidden rounded-lg">
                            <img
                                :src="data.gallery[leftGallery].url"
                                alt="gallery"
                                class="aspect-landscape w-full object-cover"
                            />
                            <div class="absolute inset-0 bg-gradient-to-r from-scotch/50 to-transparent" />
                        </div>
                        <img
                            :src="data.gallery[middleGallery].url"
                            alt="gallery"
                            class="aspect-landscape w-full rounded-lg border-2 border-sage-600 object-cover"
                        />
                        <div class="relative cursor-pointer overflow-hidden rounded-lg">
                            <img
                                :src="data.gallery[rightGallery].url"
                                alt="gallery"
                                class="aspect-landscape w-full rounded-lg object-cover"
                            />
                            <div class="absolute inset-0 bg-gradient-to-l from-scotch/50 to-transparent" />
                        </div>
                    </div>
                    <div class="mt-2 flex items-center gap-3">
                        <p class="text-xs italic">More story</p>
                        <hr class="border-0.5 grow border-[#313131] bg-[#313131]" />
                        <FontAwesomeIcon
                            icon="fa-solid fa-arrow-left"
                            class="rounded-full border border-black p-4 text-xl"
                            @click="galleryIndex--"
                        />
                        <FontAwesomeIcon
                            icon="fa-solid fa-arrow-right"
                            class="rounded-full border border-black p-4 text-xl"
                            @click="galleryIndex++"
                        />
                    </div>
                </section>
            </template>

            <section v-motion="fadeToBottom" class="px-5 pb-16 text-center font-ptserif text-3xl font-medium">
                <h2>Acara diselenggarakan pada</h2>
            </section>

            <section v-motion="fadeToLeft" class="px-10 pb-16 text-center">
                <div :key="countdown">
                    <div class="mb-16 flex items-center justify-between font-medium">
                        <div>
                            <h3 class="text-3xl">{{ getCountdown(data.startDate, 'day') }}</h3>
                            <h3>Hari</h3>
                        </div>
                        <p class="font-bold">:</p>
                        <div>
                            <h3 class="text-3xl">{{ getCountdown(data.startDate, 'hour') }}</h3>
                            <h3>Jam</h3>
                        </div>
                        <p class="font-bold">:</p>
                        <div>
                            <h3 class="text-3xl">{{ getCountdown(data.startDate, 'minute') }}</h3>
                            <h3>Menit</h3>
                        </div>
                        <p class="font-bold">:</p>
                        <div>
                            <h3 class="text-3xl">{{ getCountdown(data.startDate, 'second') }}</h3>
                            <h3>Detik</h3>
                        </div>
                    </div>
                </div>
                <p v-motion="fadeToTop">{{ getDay(data.startDate) }}</p>
                <p v-motion="fadeToTop">Pukul {{ getTime(data.startDate) }}</p>
            </section>

            <section
                v-motion="fadeToTop"
                class="mx-8 mb-16 rounded-lg bg-[#313131] p-8 text-center text-sm text-scotch"
            >
                <p class="mb-5">
                    <b>{{ data.wishes.length }} tamu</b> memberikan harapan, ayo kirimkan harapanmu juga!
                </p>
            </section>

            <section class="px-4 pb-10">
                <div v-for="(timeline, index) in data.timelines" :key="timeline._id" class="mb-7 text-center text-sm">
                    <div v-if="index % 2 === 0" v-motion="fadeToLeft">
                        <h2 class="mb-4 font-ptserif text-3xl font-medium">{{ timeline.title }}</h2>
                        <p class="mb-1">
                            <FontAwesomeIcon icon="fa-regular fa-calendar" /> {{ getDay(timeline.date) }}
                        </p>
                        <p class="mb-1">
                            <FontAwesomeIcon icon="fa-regular fa-clock" /> {{ getTime(timeline.date) }} - selesai
                        </p>
                        <p v-if="timeline.location" class="mb-4">
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" /> {{ timeline.location }}
                        </p>
                        <a v-if="timeline.url" :href="timeline.url" target="_blank">
                            <button class="rounded-full border border-sage px-6 py-2">
                                <FontAwesomeIcon icon="fa-solid fa-location-dot" /> Lihat lokasi
                            </button>
                        </a>
                    </div>
                    <div v-else v-motion="fadeToRight">
                        <h2 class="mb-4 font-ptserif text-3xl font-medium">{{ timeline.title }}</h2>
                        <p class="mb-1">
                            <FontAwesomeIcon icon="fa-regular fa-calendar" /> {{ getDay(timeline.date) }}
                        </p>
                        <p class="mb-1">
                            <FontAwesomeIcon icon="fa-regular fa-clock" /> {{ getTime(timeline.date) }} - selesai
                        </p>
                        <p v-if="timeline.location" class="mb-4">
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" /> {{ timeline.location }}
                        </p>
                        <a v-if="timeline.url" :href="timeline.url" target="_blank">
                            <button class="rounded-full border border-sage px-6 py-2">
                                <FontAwesomeIcon icon="fa-solid fa-location-dot" /> Lihat lokasi
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <section class="px-4 pb-16 text-center text-sm">
                <p v-motion="fadeToTop" class="mb-4">
                    Adalah sebuah kehormatan dan kebanggan bagi kami apabila Bapak/Ibu/Saudara/i dapat hadir dalam acara
                    pernikahan kami. Nantikan kebersamaan kita. Terima kasih.
                </p>
                <template v-if="data.specialGuests.length > 0">
                    <p class="font-medium">turut mengundang:</p>
                    <ul>
                        <li v-for="guest in data.specialGuests" :key="guest._id">{{ guest.name }}</li>
                    </ul>
                </template>
            </section>

            <section v-motion="fade" class="pb-5 text-center font-ptserif text-3xl font-medium">
                <h2 class="font-3xl font-medium">Kirim harapan</h2>
            </section>

            <section
                v-motion="fade"
                class="mx-4 mb-8 h-96 overflow-y-scroll rounded-xl bg-gray-300 px-4 py-6 shadow-inner"
            >
                <template v-if="wishes.length < 1">
                    <div class="h-full text-center font-monte text-4xl text-[#313131]">
                        Belum ada harapan dari orang-orang, jadilah orang pertama yang mengirim harapan!
                    </div>
                </template>
                <div
                    v-for="wish in wishes"
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
                <h2 class="mb-3 font-medium text-[#313131]">Kirim harapan</h2>
                <form class="text-center text-sm" @submit.prevent="submitWish">
                    <input
                        v-model="formData.name"
                        type="text"
                        placeholder="Nama"
                        class="mb-4 w-full rounded-md border border-[#81787e] bg-transparent p-2 placeholder-[#948b8f]"
                        required
                    />
                    <input
                        v-model="formData.address"
                        type="text"
                        placeholder="Alamat"
                        class="mb-4 w-full rounded-md border border-[#81787e] bg-transparent p-2 placeholder-[#948b8f]"
                    />
                    <textarea
                        v-model="formData.wish"
                        placeholder="Harapanmu"
                        class="mb-4 w-full rounded-md border border-[#81787e] bg-transparent p-2 placeholder-[#948b8f]"
                        required
                    />
                    <button type="submit" class="rounded-full border-none bg-[#313131] px-6 py-2 text-scotch">
                        Submit
                    </button>
                </form>
            </section>

            <footer class="bg-[#313131] py-3 text-center font-medium text-scotch">
                <p class="mb-1 text-xs">Powered by</p>
                <p>qiran.id</p>
                <a href="https://instagram.com/id.qiran" class="inline-block">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>
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
