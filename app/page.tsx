import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from '@/components/auth/login-button'

const font = Poppins({
  subsets: ["latin"],
  weight: ['600']
})

export default function Home() {
  return (
    <main className="flex items-center justify-center h-full flex-col bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-300 to-blue-800">
      <div className="space-y-3 text-center">
        <h1 className={cn(
          "text-6xl font-semibold text-white drop-shadow-md",
          font.className
        )}>
          🔐Auth
        </h1>
        <p className="text-white text-lg">
          A simple authentication service
        </p>
      </div>
      <div>
        <LoginButton>
          <Button variant="secondary" size='lg' >
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
