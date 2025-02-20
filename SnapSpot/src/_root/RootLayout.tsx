import Bottombar from "@/components/shared/Bottombar"
import Leftside from "@/components/shared/Leftside"
import Topbar from "@/components/shared/Topbar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
        <Topbar />
        <Leftside />
        <section className="flex flex-1 h-full">
          <Outlet />
        </section>
        <Bottombar />
        
    </div>
  )
}

export default RootLayout