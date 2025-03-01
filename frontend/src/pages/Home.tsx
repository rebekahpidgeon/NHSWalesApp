import Navbar from "../components/Navbar/Navbar"
import PrescriptionBox from "../components/PrescriptionBox/PrescriptionBox"
import UpcomingAppointments from "../components/UpcomingAppointments/UpcomingAppointments"

function Home() {

  return (
    <>
      <Navbar />
      <div>
        <PrescriptionBox />
        <UpcomingAppointments />
      </div>
    </>
  )
}

export default Home
