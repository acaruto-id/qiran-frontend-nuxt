type TimeType = 'day' | 'hour' | 'minute' | 'second'

export const getDay = (data: string) => {
    const date = new Date(data)
    return date.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

export const getTime = (data: string) => {
    const date = new Date(data)
    return date.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
    })
}

export const getCountdown = (data: string, type: TimeType) => {
    const date = new Date(data)
    const now = new Date()
    const diff = date.getTime() - now.getTime()
    const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24))
    const diffHours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const diffMinutes = Math.floor((diff / (1000 * 60)) % 60)
    const diffSeconds = Math.floor((diff / 1000) % 60)

    switch (type) {
        case 'day':
            return diffDays
        case 'hour':
            return diffHours
        case 'minute':
            return diffMinutes
        case 'second':
            return diffSeconds
        default:
            return diffDays
    }
}
