"use Client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {Button} from '@/components/ui/button'

export const Social =()=>{
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button 
                className="w-full"
                size='lg'
                variant='outline'
                onClick={()=>{}}
            >
                <FcGoogle />
            </Button>
            <Button 
                className="w-full"
                size='lg'
                variant='outline'
                onClick={()=>{}}
            >
                <FaGithub />
            </Button>
        </div>
    )
}