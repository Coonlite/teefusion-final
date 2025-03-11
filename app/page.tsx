import * as React from "react";
import {NavigationMenuDemo} from "@/components/shared/NavigationMenuDemo";
import {Button} from "@/components/ui/button"


export default function Home() {
    return (
        <header className="h-screen relative">
            <NavigationMenuDemo/>
            <div className="opacity"></div>
            <video autoPlay muted loop className="h-full w-full object-cover">
                <source src="/videos/PLACEholderv2.mp4" type="video/mp4"/>
                Ваш браузер не поддерживает видео.
            </video>
            <div
                className="absolute z-1 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-7">
                <h1>Ты Питухч</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis cumque error, impedit magnam
                    natus necessitatibus quaerat quidem sunt voluptates. Assumenda dicta dolorum, ex iusto perspiciatis
                    quasi quia ratione sapiente?</p>
                <Button variant="main" size="main" className="">Скачать</Button>
            </div>
        </header>
    );
}
