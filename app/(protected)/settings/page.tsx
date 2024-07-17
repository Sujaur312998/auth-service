import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'

const SettingsPage = async () => {
    const session = await auth()
    return (
        <div>
            <p>Settings Page</p>
            <p>{JSON.stringify(session)}</p>
            <form action={
                async()=>{
                    "use server";
                    await signOut()
                }
            }>
                <button type='submit' className='p-2 bg-slate-400 rounded-lg'>Sign out</button>
            </form>
        </div>
    )
}

export default SettingsPage