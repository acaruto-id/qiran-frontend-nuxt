export default function (name: string): string {
    return name
        .split(' ')
        .map((e) => e.charAt(0).toUpperCase())
        .join('')
        .substring(0, 2)
}
