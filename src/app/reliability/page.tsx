import React from "react";
import Hero from "@/components/hero";
import homeSrc from "../../../public/2.jpg";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Reliability",
    description: "Generated by create next app",
};

export default function Page(){
    return (
        <div>
            <Hero imgUrl={homeSrc} altTxt='Home Image' content='Reliability Cloud Running'/>
        </div>
    )
}