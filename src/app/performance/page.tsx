import React from "react";
import Hero from "@/components/hero";
import homeSrc from "../../../public/1.jpg";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Performance",
    description: "Generated by create next app",
};

export default function Page(){
    return (
        <div>
            <Hero imgUrl={homeSrc} altTxt='Home Image' content='Performance Cloud Running'/>
        </div>
    )
}