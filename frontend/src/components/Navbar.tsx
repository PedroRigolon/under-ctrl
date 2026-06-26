import Navlink from "@/components/ui/Navlink"
import { Workflow, Sparkles, UserPlus, Tag, CircleHelp } from "lucide-react"
import Brand from "@/components/ui/Brand"
import Button from "@/components/ui/Button"
export default function Navbar(){
    return (
        <>
        <header className="flex fixed bottom-0 md:bottom-auto md:top-0 w-full min-h-navbar-desktop bg-components md:items-center justify-center">
            <nav className="md:hidden w-full h-full flex justify-between items-center max-[375px]:px-gutter-mobile-sm px-gutter-mobile sm:px-gutter-sm sm:py-4 border-t-2 border-grey-light-3  ">
                <Navlink href="#" Icon={Workflow}>Como funciona</Navlink>
                <Navlink href="#" Icon={Sparkles}>Recursos</Navlink>
                <Navlink href="#" Icon={UserPlus} isMain>Criar conta</Navlink>
                <Navlink href="#" Icon={Tag}>Preço</Navlink>
                <Navlink href="#" Icon={CircleHelp}>FAQ</Navlink>
            </nav>

            <nav className="hidden md:flex w-full h-full justify-between items-center px-gutter-mobile lg:max-w-page py-4">
                <Brand />
                <ul className="flex gap-2">
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