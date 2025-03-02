import { Calendar } from "../ui/calendar"


export default function UpcomingAppointments() {
  return <div className="p-4 pt-0">
    <div className="bg-white rounded-md p-2 shadow-md">
      <div className="flex justify-center">
        <div
          className="flex flex-col justify-center"
        >
          <h2 className="font-bold text-nhs-blue-wcag text-xl text-center pb-2">Upcoming appointments</h2>

          <Calendar
            mode="multiple"
            today={new Date(2025, 2, 2)}
            selected={
              [
                new Date(2025, 2, 7),
                new Date(2025, 2, 12),
              ]
            }
            className="rounded-md border" />
        </div>
      </div>
      <div className="flex">
        <div
          className="flex flex-col p-2"
        >
          <p className="font-semibold text-left pb-1">Upcoming appointment information</p>
          <p className="text-sm ">Date: 7th March 2025 11:00AM</p>
          <p className="text-sm ">Appointment: Blood test</p>
          <p className="text-sm ">Location: 123 Fake Street</p>
        </div>
      </div>
    </div>

  </div>
}
