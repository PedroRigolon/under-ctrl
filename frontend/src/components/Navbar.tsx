import Navlink from "@/components/ui/Navlink"
import { Workflow, Sparkles, UserPlus, Tag, CircleHelp } from "lucide-react"

export default function Navbar(){
    return (
        <>
        <header className="fixed bottom-0 w-full min-h-navbar-desktop bg-components">
            <nav className="w-full h-full flex justify-between items-center max-[375px]:px-gutter-mobile-sm px-gutter pb-4">
                <Navlink href="#" Icon={Workflow}>Como funciona</Navlink>
                <Navlink href="#" Icon={Sparkles}>Recursos</Navlink>
                <Navlink href="#" Icon={UserPlus} isMain>Criar conta</Navlink>
                <Navlink href="#" Icon={Tag}>Preço</Navlink>
                <Navlink href="#" Icon={CircleHelp}>FAQ</Navlink>
            </nav>
        </header>
        </>
    );
}