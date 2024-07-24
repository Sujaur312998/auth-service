"use client";
import Link from "next/link"
// import { useState } from "react";

const topNavbarData = [
    {
        id: 1,
        href: "/",
        title: "Home"
    },
    {
        id: 2,
        href: "/service",
        title: "Service"
    },
    {
        id: 3,
        href: "/product",
        title: "Products",
        section: [
            {
                productID: 1,
                href: '/product/agri_product',
                title: "Agriculture"
            },
            {
                productID: 2,
                href: '/product/hardware_product',
                title: "Hardware "
            },
        ]
    },
    {
        id: 4,
        href: "/about",
        title: "About"
    },
]
const TopNavbar = () => {
    const toggleSideNavbar = () => {
        console.log("Clicked");
    }
    return (
        <div
            className="w-full h-16 flex  bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-600 to-stone-950 rounded-br-md"
        >
            <button
                onClick={toggleSideNavbar}
                className="m-auto mx-2 cursor-pointer"
            >
                <div className="w-5 h-[2px] rounded-lg my-1 bg-white"></div>
                <div className="w-4 h-[2px] rounded-lg my-1 bg-white"></div>
                <div className="w-5 h-[2px] rounded-lg my-1 bg-white"></div>
            </button>
            <div className="container flex justify items-center justify-between">
                <div className="flex items-center justify-start">

                    <div className="text-white m-2 font-mono font-extrabold text-2xl cursor-pointer">
                        Laiba Treders
                    </div>
                </div>
                <div className="font-light">
                    <ul className="flex items-center justify-end text-white">
                        {
                            topNavbarData.map(item => {
                                return (
                                    <li
                                        key={item.id}
                                        className="mx-1 cursor-pointer hover:text-rose-600 hover:text-bold group relative dropdown uppercase tracking-wide "
                                    >
                                        <Link href={item.href}>
                                            {item.title}
                                        </Link>
                                        <div className="group-hover:block dropdown-menu absolute hidden h-auto">

                                            {
                                                item.section ?
                                                    <ul className="top-0 w-auto bg-white shadow p-2 rounded-md">
                                                        {
                                                            item.section?.map(item => {
                                                                return (
                                                                    <li className="py-1">
                                                                        <Link
                                                                            href={item.href}
                                                                            className="block text-black font-bold text-base uppercase hover:text-rose-700 cursor-pointer"
                                                                        >
                                                                            {item.title}
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul> : null

                                            }

                                            {/* <ul className="top-0 w-32 bg-white shadow px-6 py-8">
                                                <li className="py-1">
                                                    <a className="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">
                                                        Item
                                                    </a>
                                                </li>

                                            </ul> */}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default TopNavbar