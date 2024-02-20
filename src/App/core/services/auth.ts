import { log } from "console"
import { supabase } from "../utils/supabase"

async function signUpNewUser(registrationForm: RegistrationForm) {
    const { data, error } = await supabase.auth.signUp({
        email: registrationForm.email,
        password: registrationForm.password,
        options: {
            emailRedirectTo: '/',
        },
    })
}

async function signInWithEmail(loginForm: LoginForm) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: loginForm.email,
        password: loginForm.password,
    })
}

async function signOut() {
    const { error } = await supabase.auth.signOut()
}