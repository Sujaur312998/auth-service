import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

interface FormErrorProps {
    message?: string
}

export const FormError=({
    message
}:FormErrorProps)=>{
    if(!message) return null    
    return(
        <div className="bg-destructive/15 flex items-center rounded-md gap-2 text-sm text-destructive p-2">
            <ExclamationTriangleIcon  />
            <p>{message}</p>
        </div>
    )
}