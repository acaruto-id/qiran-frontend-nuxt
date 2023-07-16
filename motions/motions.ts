export const fadeToTop = {
    initial: {
        scale: 0.3,
        opacity: 0,
        y: 100,
    },
    visibleOnce: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1000,
        },
    },
}

export const fadeToBottom = {
    initial: {
        scale: 0.3,
        opacity: 0,
        y: -100,
    },
    visibleOnce: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1000,
        },
    },
}

export const fadeToLeft = {
    initial: {
        opacity: 0,
        x: 100,
    },
    visibleOnce: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1000,
        },
    },
}

export const fadeToRight = {
    initial: {
        opacity: 0,
        x: -100,
    },
    visibleOnce: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1000,
        },
    },
}

export const fade = {
    initial: {
        scale: 0.6,
        opacity: 0,
    },
    visibleOnce: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1000,
        },
    },
}
