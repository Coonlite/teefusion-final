"use client"

import * as React from "react"
import Link from "next/link"
import {FaUser} from "react-icons/fa";

import {cn} from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {AiFillApi} from "react-icons/ai";
import Image from "next/image";

// const components: { title: string; href: string; description: string }[] = [
//     {
//         title: "Alert Dialog",
//         href: "/docs/primitives/alert-dialog",
//         description:
//             "A modal dialog that interrupts the user with important content and expects a response.",
//     },
//     {
//         title: "Hover Card",
//         href: "/docs/primitives/hover-card",
//         description:
//             "For sighted users to preview content available behind a link.",
//     },
//     {
//         title: "Progress",
//         href: "/docs/primitives/progress",
//         description:
//             "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//     },
//     {
//         title: "Scroll-area",
//         href: "/docs/primitives/scroll-area",
//         description: "Visually or semantically separates content.",
//     },
//     {
//         title: "Tabs",
//         href: "/docs/primitives/tabs",
//         description:
//             "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//     },
//     {
//         title: "Tooltip",
//         href: "/docs/primitives/tooltip",
//         description:
//             "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//     },
// ]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu
            className="absolute z-2 w-[800px] bg-background rounded-4xl shadow-[0_0_11px_1px_var(--foreground)] p-3 px-7 left-0 right-0 top-6 m-auto">
            <NavigationMenuList className="gap-5 m-0 p-0">
                <Link href="/page">
                    <Image
                        className="dark:invert mr-15"
                        src="/TF.svg"
                        alt="TeeFusion logo"
                        width={40}
                        height={40}
                        priority
                    />
                </Link>
                <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-background text-xl nav-menu_link">
                        Главная
                    </NavigationMenuLink>
                </Link>
                <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-background text-xl nav-menu_link">
                        Серверы
                    </NavigationMenuLink>
                </Link>
                <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className="bg-background text-xl nav-menu_link">
                        Донат
                    </NavigationMenuLink>
                </Link>
                <NavigationMenuItem>
                    <NavigationMenuTrigger
                        className="text-xl nav-menu_link">Сообщество</NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>

                                    <Link
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/public"
                                    >
                                        <AiFillApi className="fill-amber-300" style={{width: "40px", height: "40px"}}/>
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            TeeFusion
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Инновационное сообщество TeeWorlds для тех, кто перерос «просто поиграть».
                                            Мы не собираем игроков, а синтезируем кибергладиаторов и развлекаемся. С
                                            2024 года.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Правила сообщества">
                                За нашей линией — играют по нашим законам
                            </ListItem>
                            <ListItem href="/docs/installation" title="Наши площадки">
                                Хайп там, где мы
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="О нас">
                                Единый организм с 2024
                            </ListItem>
                        </ul>

                    </NavigationMenuContent>
                </NavigationMenuItem>
                <div className="icon-container">
                    <div className="icon"><FaUser className="ml-15" style={{width: "20px", height: "20px"}}/></div>
                    <div className="tooltip">В разработке</div>
                </div>

                {/*<NavigationMenuItem>*/}
                {/*    <NavigationMenuTrigger>Components</NavigationMenuTrigger>*/}
                {/*    <NavigationMenuContent>*/}
                {/*        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">*/}
                {/*            {components.map((component) => (*/}
                {/*                <ListItem*/}
                {/*                    key={component.title}*/}
                {/*                    title={component.title}*/}
                {/*                    href={component.href}*/}
                {/*                >*/}
                {/*                    {component.description}*/}
                {/*                </ListItem>*/}
                {/*            ))}*/}
                {/*        </ul>*/}
                {/*    </NavigationMenuContent>*/}

                {/*</NavigationMenuItem>*/}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
