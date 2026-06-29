"use client"

import { useEffect, useState } from "react"
import Navlink from "@/components/homepage/Navbar/Navlink"
import { Workflow, Sparkles, UserPlus, Tag, CircleHelp } from "lucide-react"
import Brand from "@/components/ui/Brand"
import Button from "@/components/ui/Button"

export default function Navbar(){
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        // troque por um IntersectionObserver numa seção se quiser
        // disparar "em determinada parte da página" em vez de um threshold.
        const onScroll = () => setScrolled(window.scrollY > 80)
        onScroll() // garante o estado certo em reload no meio da página
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <>
        <header data-scrolled={scrolled} className="group flex fixed bottom-0 md:bottom-auto md:top-0 w-full h-navbar-mobile md:h-navbar-desktop justify-center items-center">
            <nav className="md:hidden w-full h-full flex justify-between items-center max-[375px]:px-gutter-mobile-sm px-gutter-mobile sm:px-gutter-sm sm:py-4 border-t-2 border-grey-light-3  ">
                <Navlink href="#" Icon={Workflow}>Como funciona</Navlink>
                <Navlink href="#" Icon={Sparkles}>Recursos</Navlink>
                <Navlink href="#" Icon={UserPlus} isMain>Criar conta</Navlink>
                <Navlink href="#" Icon={Tag}>Preço</Navlink>
                <Navlink href="#" Icon={CircleHelp}>FAQ</Navlink>
            </nav>

            <nav className="hidden md:flex w-full justify-between items-center px-gutter-mobile lg:px-gutter-sm xl:px-0 py-4 transition-all duration-300 lg:max-w-page-navbar
            
            group-data-[scrolled=true]:md:mx-gutter-mobile group-data-[scrolled=true]:lg:mx-gutter-md
            

            group-data-[scrolled=true]:lg:max-w-page group-data-[scrolled=true]:bg-components/70 
            group-data-[scrolled=true]:backdrop-blur-lg group-data-[scrolled=true]:border 
            group-data-[scrolled=true]:border-border group-data-[scrolled=true]:rounded 
            group-data-[scrolled=true]:shadow-xs group-data-[scrolled=true]:px-gutter-mobile-sm 
            group-data-[scrolled=true]:translate-y-2" >
                <Brand text/>
                <ul className="flex gap-2 transition-all duration-300
                               opacity-0 -translate-y-1 pointer-events-none
                               group-data-[scrolled=true]:opacity-100 group-data-[scrolled=true]:translate-y-0 group-data-[scrolled=true]:pointer-events-auto">
                    <Navlink href="#" Icon={Workflow}>Como funciona</Navlink>
                    <Navlink href="#" Icon={Sparkles}>Recursos</Navlink>
                    <Navlink href="#" Icon={Tag}>Preço</Navlink>
                    <Navlink href="#" Icon={CircleHelp}>FAQ</Navlink>
                </ul>
                <div>
                    <Button variant="tertiary" href="/login">Entrar</Button>
                    <Button variant="primary" href="/login">Entrar</Button>
                </div>
            </nav>
        </header>
        </>
    );
}
