"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { UserButton } from "@clerk/nextjs";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const UserNav = () => {

    const [isVisible, setIsVisible] = useState(false);

    return <>
        <nav
            className={`${isVisible ? '' : 'fixed'} md:absolute top-0 bg-white md:bg-transparent z-40 p sm:h-[100px] flex flex-row w-full px-10 py-2 md:py-0 justify-between items-center text-slate-800`}>
            <p className="bg-white text-blue-500 rounded text-xl font-bold p-2 whitespace-normal">
                Trip Fever
            </p>

            {isVisible ?
                <Button
                    className="md:hidden"
                    onClick={() => setIsVisible(!isVisible)}
                    variant={'ghost'}>
                    <X />
                </Button>
                :
                <Button
                    className="md:hidden"
                    onClick={() => setIsVisible(!isVisible)}
                    variant={'ghost'}>
                    <AlignJustify />
                </Button>
            }
            <div className={`fixed ${isVisible ? 'flex' : 'hidden md:flex'} md:relative z-50 bg-blue-50 md:bg-transparent bg-opacity-95 p-3 md:p-0 h-screen md:h-fit w-screen md:w-fit top-0 left-0 flex-col md:flex-row items-center justify-start md:space-x-10 pt-12`}>

                <div className="flex md:hidden flex-row w-full justify-between">
                    <p className="bg-white text-blue-500 rounded text-xl font-bold p-2 whitespace-normal">
                        Trip Fever
                    </p>
                    <Button
                        onClick={() => setIsVisible(!isVisible)}
                        variant={'ghost'}>
                        <X />
                    </Button>
                </div>

                <NavigationMenu className="max-h-[200px]">
                    <NavigationMenuList className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-6 items-center">
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle() + ' hover:bg-blue-100 bg-transparent md:bg-white text-2xl'}>
                                    <p className="text-xl md:text-sm">Packages</p>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle() + ' hover:bg-blue-200 bg-transparent md:bg-white'}>
                                    <p className="text-xl md:text-sm">Contact</p>
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                <div className="w-full flex justify-center">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </nav>
    </>
}

export default UserNav;