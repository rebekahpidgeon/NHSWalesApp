import Footer, { ActiveTab } from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import PrescriptionBox from "../components/PrescriptionBox/PrescriptionBox"
import UpcomingAppointments from "../components/UpcomingAppointments/UpcomingAppointments"

function Home() {

  return (
    <>
      <Navbar showLogo />
      <div>
        <PrescriptionBox />
        <UpcomingAppointments />
      </div>
      <Footer activeTab={ActiveTab.HOME} />

    </>
  )
}

export default Home
