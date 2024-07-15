"use client";
import {
    Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent
} from "@/components/ui/card";
import { Header } from "@/components/auth/Header";
import {Social} from '@/components/auth/Social'
import { BackButton } from "@/components/auth/back-button";


interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLevel: string,
    backButtonHref: string,
    showSocial?: boolean
};

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonHref,
    backButtonLevel,
    showSocial
}: CardWrapperProps) => {
    return (
        <Card className="w-96 shadow-md">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {
                showSocial && (
                    <CardFooter>
                        <Social/>
                    </CardFooter>
                )
            }
            <CardFooter>
                <BackButton label={backButtonLevel} href={backButtonHref}/>
            </CardFooter>

        </Card>
    )
}