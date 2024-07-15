"use server";
import * as z from "zod"
import { RegistrationSchema } from "@/schemas";
import bcrypt from 'bcrypt'
import {db} from '@/lib/db'
import { getUserByEmail } from "@/data/user";

export const register = async ( values: z.infer<typeof RegistrationSchema> ) => {
    const validatedFields= RegistrationSchema.safeParse(values)
    if(!validatedFields.success){
        return {error: 'Invalid Fields!'}
    }
    const {email, password, name}= validatedFields.data
    
    const existingUser= await getUserByEmail(email)

    if(existingUser) return {error: "Email already in use!"}
    const hashedPassword=  await bcrypt.hash(password,10)

    await db.user.create({
        data:{
            name,
            email,
            password:hashedPassword
        }
    })

    //TODO SENT VERIFICATION EMAIL

    return { success: "User Created!"}
}