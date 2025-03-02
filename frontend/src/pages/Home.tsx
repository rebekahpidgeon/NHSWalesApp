import Footer, { ActiveTab } from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import PrescriptionBox from "../components/PrescriptionBox/PrescriptionBox"
import UpcomingAppointments from "../components/UpcomingAppointments/UpcomingAppointments"

function Home() {

  return (
    <div className="relative w-full h-full flex flex-col">
      <Navbar showLogo />
      <div className="pb-12 flex flex-col space-y-4 flex-grow overflow-scroll">
        <PrescriptionBox />
        <UpcomingAppointments />
      </div>
      <Footer activeTab={ActiveTab.HOME} />

    </div>
  )
}

export default Home
