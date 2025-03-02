import Appointment from "../components/Appointment/Appointment"
import Footer, { ActiveTab } from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

const appointments = [
  {
    doctor: "Dr. Watson Mccoy",
    image: "https://www.northernmed.com/wp-content/uploads/2020/12/headshot-placeholder-01-996x996.jpg",
    appointmentType: "General Checkup",
    dateTime: "7th March 2025 at 11:00AM",
    location: "Greek Street, London, W1D 4DJ"
  },
  {
    doctor: "Dr. Ariene Karistin",
    image: "https://www.northernmed.com/wp-content/uploads/2020/12/headshot-placeholder-01-996x996.jpg",
    appointmentType: "Dental Checkup",
    dateTime: "12th March 2025 at 10:00AM",
    location: "1 Harley Street, London, W1G 9QD"
  },
  {
    doctor: "Dr. Oscar Hayman",
    image: "https://www.northernmed.com/wp-content/uploads/2020/12/headshot-placeholder-01-996x996.jpg",
    appointmentType: "General Checkup",
    dateTime: "27th April 2025 at 2:00PM",
    location: "85 Wimpole Street, London, W1G 9RJ"
  },
]

export default function Prescriptions() {
  return (
    <div className="relative w-full h-full flex flex-col">
      <Navbar title="Appointments" />
      <div className="px-4">
        <div className="h-16 flex justify-center items-center bg-white shadow-md rounded-md">
          <a
            className="py-3 px-6 bg-nhs-blue rounded-full text-white font-bold text-center w-full max-w-xs"
            href="/appointments"
          >
            View your prescriptions
          </a>
        </div>

        <div className="mt-2 bg-white p-4 rounded-md shadow-md flex flex-col space-x-4">
         {/* Grid */}
         
        </div>

      </div>

      <Footer activeTab={ActiveTab.PRESCRIPTIONS} />
    </div>
  );
}
