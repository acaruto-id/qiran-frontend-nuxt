import { PropType } from '.nuxt/imports'

interface Invitation {
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
    stories: Array<{
        title: string
        image?: string
        content: string
        _id: string
    }>
    gallery: Array<{
        url: string
        _id: string
    }>
    timelines: Array<{
        title: string
        date: Date
        location?: string
        url?: string
        _id: string
    }>
    specialGuests: Array<{
        name: string
        _id: string
    }>
    music?: string
    wishes: Array<{
        name: string
        address?: string
        wish: string
        _id: string
    }>
    _id: string
}

export type InvitationProps = PropType<Invitation>
