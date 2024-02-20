interface VotingOption {
    id: number,
    name: string,
    description: string,
    image: string
}

interface Navigation {
    title: string,
    description: string | undefined,
    link: string
}

interface LoginForm {
    email: string,
    password: string
}

interface RegistrationForm {
    username: string,
    email: string,
    password: string
}