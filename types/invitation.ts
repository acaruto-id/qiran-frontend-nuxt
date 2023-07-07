import { PropType } from '.nuxt/imports'

interface Invitation {
    title: string
    slug: string
    coverImage: string
    landingImage: string
    quote: {
        content: string
        verse?: string
    }
    startDate: Date
    endDate?: Date
    maleBride: {
        name: string
        image?: string
        father?: string
        mother?: string
    }
    femaleBride: {
        name: string
        image?: string
        father?: string
        mother?: string
    }
    stories: {
        title: string
        image?: string
        content: string
        _id?: string
    }[]
    gallery: {
        url: string
        _id?: string
    }[]
    timelines: {
        title: string
        date: Date
        location?: string
        url?: string
        _id?: string
    }[]
    specialGuests: {
        name: string
        _id?: string
    }[]
    music?: string
    wishes: {
        name: string
        address?: string
        wish: string
        _id?: string
    }[]
    _id?: string
}

export type InvitationProps = PropType<Invitation>
