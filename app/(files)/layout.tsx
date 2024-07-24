import TopNavbar from "@/app/(files)/TopNavbar"
import SideNavbar from "@/app/(files)/SideNavbar"

const DashboardLasyout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <TopNavbar />
            <div className="flex">
                <SideNavbar />
                {children}
            </div>

        </div>
    )
}

export default DashboardLasyout