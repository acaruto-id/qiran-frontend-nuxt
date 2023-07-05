<template>
    <TemplateWrapper color="bg-sage-700">
        <div class="bg-scotch text-sage">
            <section class="relative h-screen">
                <img src="/images/landing-image.png" alt="Landing image" class="absolute h-full w-full object-cover" />
                <div class="text-center text-xl text-sage-700">
                    <p class="pb-12 pt-20 drop-shadow-lg">The wedding of</p>
                    <h1 class="pb-12 font-monte text-5xl drop-shadow-lg">Qolandar & Intan</h1>
                    <p class="pb-12 drop-shadow-lg">Saturday, 27 May 2023</p>
                </div>
                <div class="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-transparent to-scotch" />
            </section>

            <section v-motion-slide-visible-once-bottom class="px-4 py-16">
                <div class="text-center text-sm">
                    <p class="mb-2 font-medium italic">
                        “Love is patient; love is kind; it is not jealous. It does not boast and it is not proud”
                    </p>
                    <p>1 Corinthians 13:4</p>
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
                    style="background-image: url('/images/male-bride.jpg')"
                    class="relative mb-8 aspect-image w-48 rounded-xl bg-cover shadow-[2px_7px_6px_3px_rgba(0,0,0,0.3)]"
                >
                    <img src="/images/flower.png" alt="Flower" class="absolute -left-10 -top-12 w-36 rotate-180" />
                    <img src="/images/flower.png" alt="Flower" class="absolute -bottom-12 -right-10 w-36" />
                </div>
                <p class="mb-7 font-monte text-4xl">Annuri O</p>
                <p class="font-medium">Son of</p>
                <p>Bapak Nuri O &</p>
                <p>Ibu Situ O</p>
            </section>

            <section v-motion-slide-visible-once-bottom class="pb-10 text-center font-monte text-4xl">&</section>

            <section v-motion-slide-visible-once-bottom class="flex flex-col items-center pb-16 text-sage">
                <div
                    style="background-image: url('/images/male-bride.jpg')"
                    class="relative mb-8 aspect-image w-48 rounded-xl bg-cover shadow-[2px_7px_6px_3px_rgba(0,0,0,0.3)]"
                >
                    <img src="/images/flower.png" alt="Flower" class="absolute -left-10 -top-12 w-36 rotate-180" />
                    <img src="/images/flower.png" alt="Flower" class="absolute -bottom-12 -right-10 w-36" />
                </div>
                <p class="mb-7 font-monte text-4xl">Annuri O</p>
                <p class="font-medium">Son of</p>
                <p>Bapak Nuri O &</p>
                <p>Ibu Situ O</p>
            </section>

            <section v-motion-slide-visible-once-bottom class="flex items-center justify-between px-2 pb-16 font-monte">
                <img src="/images/flower-2.png" alt="Flower" class="w-20 -scale-x-100" />
                <h2 class="text-4xl font-medium">Our Love Story</h2>
                <img src="/images/flower-2.png" alt="Flower" class="w-20" />
            </section>

            <section
                v-motion-slide-visible-once-bottom
                class="grid grid-cols-2 grid-rows-3 gap-x-3 gap-y-7 px-4 pb-16 text-xs"
            >
                <img src="/images/photo1.jpg" alt="photo1" class="aspect-image w-full rounded-xl object-cover" />
                <div class="text-justify">
                    <h2 class="text-md mb-3 text-center font-semibold">Awal Bertemu</h2>
                    <p class="leading-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet beatae exercitationem
                        praesentium odit iste rem aut dolores ex porro eligendi quos illum accusamus sapiente maxime
                        totam aliquid, labore tempore! Tenetur omnis eligendi amet! Qui.
                    </p>
                </div>
                <div class="text-justify">
                    <h2 class="text-md mb-3 text-center font-semibold">Lamaran</h2>
                    <p class="leading-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet beatae exercitationem
                        praesentium odit iste rem aut dolores ex porro eligendi quos illum accusamus sapiente maxime
                        totam aliquid, labore tempore! Tenetur omnis eligendi amet! Qui.
                    </p>
                </div>
                <img src="/images/photo2.jpg" alt="photo2" class="aspect-image w-full rounded-xl object-cover" />
                <img src="/images/photo3.jpg" alt="photo3" class="aspect-image w-full rounded-xl object-cover" />
                <div class="text-justify">
                    <h2 class="text-md mb-3 text-center font-semibold">Resepsi</h2>
                    <p class="leading-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet beatae exercitationem
                        praesentium odit iste rem aut dolores ex porro eligendi quos illum accusamus sapiente maxime
                        totam aliquid, labore tempore! Tenetur omnis eligendi amet! Qui.
                    </p>
                </div>
            </section>

            <section v-motion-slide-visible-once-bottom class="pb-16 text-center font-monte text-4xl font-medium">
                <h2>Precious Moments</h2>
            </section>

            <section v-motion-slide-visible-once-bottom class="px-4 pb-16">
                <img src="/images/photo4.jpg" alt="photo4" class="mb-3 aspect-image w-full rounded-lg object-cover" />
                <div class="grid-row-1 grid grid-cols-3 gap-3 text-center">
                    <div>
                        <img
                            src="/images/photo4.jpg"
                            alt="photo4"
                            class="aspect-landscape w-full rounded-lg object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="/images/photo5.jpg"
                            alt="photo5"
                            class="aspect-landscape w-full rounded-lg object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="/images/photo6.jpg"
                            alt="photo6"
                            class="aspect-landscape w-full rounded-lg object-cover"
                        />
                    </div>
                </div>
            </section>

            <section v-motion-slide-visible-once-bottom class="pb-16 text-center font-monte text-4xl font-medium">
                <h2>The Event Will be Held</h2>
            </section>

            <section v-motion-slide-visible-once-bottom class="px-4 pb-16 text-center">
                <div class="mb-4 font-medium">
                    <h3 class="text-3xl">69</h3>
                    <h3>Days</h3>
                </div>
                <div class="grid-row-1 mb-6 grid grid-cols-3 font-medium">
                    <div>
                        <h3 class="text-3xl">69</h3>
                        <h3>Hours</h3>
                    </div>
                    <div>
                        <h3 class="text-3xl">69</h3>
                        <h3>Minutes</h3>
                    </div>
                    <div>
                        <h3 class="text-3xl">69</h3>
                        <h3>Second</h3>
                    </div>
                </div>
                <p>Monday 29 June 2023</p>
            </section>

            <section
                v-motion-slide-visible-once-bottom
                class="mx-8 mb-16 rounded-lg bg-sage p-8 text-center text-sm text-scotch"
            >
                <p class="mb-5"><b>20 Guest</b> response will join, let&apos;s send your response too.</p>
                <button class="w-full rounded-full border-0 bg-sky-400 py-3">Reservation (RSVP)</button>
            </section>

            <section v-motion-slide-visible-once-bottom class="px-4 pb-10">
                <div v-for="i in 3" :key="i" class="mb-7 text-center text-sm">
                    <h2 class="mb-3 font-monte text-4xl font-medium">Akad Nikah</h2>
                    <p class="mb-1"><FontAwesomeIcon icon="fa-regular fa-calendar" /> Minggu 25 Juni 2023</p>
                    <p class="mb-1"><FontAwesomeIcon icon="fa-regular fa-clock" /> at 09.00 - Finish</p>
                    <p class="mb-4">
                        <FontAwesomeIcon icon="fa-solid fa-location-dot" /> Jalan Jakarta, di Masjid Al Badrani
                    </p>
                    <button class="rounded-full border border-sage px-6 py-2">
                        <FontAwesomeIcon icon="fa-solid fa-location-dot" /> See location
                    </button>
                </div>
            </section>

            <section v-motion-slide-visible-once-bottom class="px-4 pb-16 text-center text-sm">
                <p class="mb-4">
                    It is an honor and happiness for us if, Mr / Mrs / Brother / i can attend our wedding celebration.
                    Looking forward to celebrate with you. Thank you.
                </p>
                <p class="font-medium">also invite:</p>
                <ul>
                    <li>Keluarga Besar Acaruto</li>
                    <li>Keluarga Besar Kadarusman</li>
                    <li>Teman SMA Brawijaya Smart School</li>
                </ul>
            </section>

            <section v-motion-slide-visible-once-bottom class="pb-8 text-center font-monte text-4xl font-medium">
                <h2>Send a Wish</h2>
            </section>

            <section v-motion-slide-visible-once-bottom class="mb-4 h-60 overflow-y-scroll px-4">
                <div v-for="i in 3" :key="i" class="mb-4 flex gap-5 text-xs font-medium">
                    <div
                        class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-neutral-400 font-bold text-black"
                    >
                        ACR
                    </div>
                    <div class="relative grow">
                        <FontAwesomeIcon
                            icon="fa-solid fa-play"
                            class="absolute -left-3 rotate-180 text-2xl text-white"
                        />
                        <div class="rounded-xl rounded-tl-lg bg-white p-4 text-black shadow-3xl">
                            <p class="font-bold">Acridok B</p>
                            <p>at Malang</p>
                            <p class="font-normal">Mas kameranya dinyalakan dulu mas, coba baca jelaskan mas.</p>
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
