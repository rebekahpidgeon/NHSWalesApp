import Footer, { ActiveTab } from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

export default function Appointments() {

  return (
    <>
      <Navbar title="Appointments" />
      <div className="p-4">
        <a
          className="fixed bottom-16 left-1/2 -translate-x-1/2 py-4 px-4 bg-nhs-blue max-w-xs w-full rounded-full shadow-md text-center text-white font-bold"
          href="/appointments"
        >
          Book a new appointment
        </a>

      </div>
      <Footer activeTab={ActiveTab.APPOINTMENTS} />
    </>
  )
}
