import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})


export const RegistrationSchema = z.object({
    name: z.string().min(2,{
        message:"Name is Required"
    }),
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Minimum 6 Characters Required"
    })
})