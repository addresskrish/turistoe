export interface navLinks {
    name: string,
    link: string
}

export const LINKS:navLinks[] = [
    {
        name: 'About',
        link: '#about'
    },
    {
        name: 'Trip',
        link: '#trip'
    },
    {
        name: 'Blogs',
        link: '#blogs'
    },
    {
        name: 'Reviews',
        link: '#reviews'
    }
]

export interface searchItems {
    name: string
}

export const SEARCH:searchItems[] = [
    {
        name: 'Location'
    },
    {
        name: 'Date'
    },
    {
        name: 'Guest'
    }
]