import Link from "next/link"

const sideNavbarData = [
    {
        id: 1,
        href: '/dashboard',
        title: "Dashboard"
    },
    {
        id: 2,
        href: '/warehouse',
        title: "WareHouse"
    },
    {
        id: 3,
        href: '/fartilizer',
        title: "Fartilizer"
    },
    {
        id: 4,
        href: '/customer',
        title: "Customer"
    },
    {
        id: 5,
        href: '/order',
        title: "Order"
    },
    {
        id: 6,
        href: '/contact',
        title: "Contact Us"
    },
]

const SideNavbar = () => {
    return (
        <div className="h-screen w-36 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-600 to-slate-950 rounded-tr-md rounded-br-md">
            <div className="w-full h-auto">
                <div className="text-white justify-between  rounded-tr-md rounded-br-md ">
                    <ul>
                        {
                            sideNavbarData?.map(item => {
                                return (
                                    <li
                                        key={item.id}
                                        className=" p-2 flex hover:text-rose-600 cursor-pointer ">
                                        <Link
                                            href={item.href}
                                            className="w-full">{item.title}
                                        </Link>
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

export default SideNavbar