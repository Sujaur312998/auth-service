import { CardWrapper } from './card-wrapper'

export const LoginForm = () => {
    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonHref="/auth/register"
            backButtonLevel="Don't have an account"
            showSocial
        >
            Login Form
        </CardWrapper>
    )
}