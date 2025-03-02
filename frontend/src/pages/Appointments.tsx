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
    <div className="relative w-full h-full flex flex-col">
      <Navbar title="Appointments" />
      <div className="p-4 flex flex-col space-y-4 flex-grow overflow-scroll">
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
      </div>

      {/* Button Wrapper with negative margin */}
      <div className="h-16 flex justify-center items-center bg-white shadow-md mb-12 border-y-2 border-slate-200  ">
        <a
          className="py-3 px-6 bg-nhs-blue rounded-full text-white font-bold text-center w-full max-w-xs"
          href="/appointments"
        >
          Book a new appointment
        </a>
      </div>

      <Footer activeTab={ActiveTab.APPOINTMENTS} />
    </div>
  );
}
