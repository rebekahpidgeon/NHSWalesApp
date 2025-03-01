import Footer, { ActiveTab } from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

export default function Appointments() {

  return (
    <>
      <Navbar title="Appointments" />
      <div>

      </div>
      <Footer activeTab={ActiveTab.APPOINTMENTS} />
    </>
  )
}
