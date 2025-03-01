import Appointment from "../components/Appointment/Appointment"
import Footer, { ActiveTab } from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

const appointments = [
  {
    doctor: "Dr. John Doe",
    image: "https://picsum.photos/128/128",
    appointmentType: "General Checkup",
    dateTime: "7th March 2025 at 11:00AM",
    location: "Greek Street, London, W1D 4DJ"
  },
  {
    doctor: "Dr. Jane Doe",
    image: "https://picsum.photos/128/128",
    appointmentType: "Dental Checkup",
    dateTime: "2022-01-01 11:00",
    location: "London"
  },
  {
    doctor: "Dr. John Doe",
    image: "https://picsum.photos/128/128",
    appointmentType: "General Checkup",
    dateTime: "2022-01-01 10:00",
    location: "London"
  },
]

export default function Appointments() {

  return (
    <>
      <Navbar title="Appointments" />
      <div className="p-4">

        {appointments.map((appointment, index) => (
          <Appointment
            key={index}
            doctor={appointment.doctor}
            image={appointment.image}
            appointmentType={appointment.appointmentType}
            dateTime={appointment.dateTime}
            location={appointment.location}
          />
        ))}

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
