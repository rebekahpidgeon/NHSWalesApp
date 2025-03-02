interface AppointmentProps {
    doctor: string;
    image: string;
    appointmentType: string;
    dateTime: string;
    location: string;
}

export default function Appointment(props: AppointmentProps) {
    return (
        <div>
            <div className="bg-white p-4 rounded-xl shadow-md flex flex-col space-x-4">
                {/* Person */}
                <div className="flex items-center space-x-4">
                    <img className="w-10 h-10 rounded-full" src={props.image} alt="Doctor" />
                    <div className="flex flex-col">
                        <h3 className="font-semibold">{props.doctor}</h3>
                        <p className="font-light text-sm">{props.appointmentType}</p>
                    </div>
                </div>
                {/* Date and Location */}
                <div className="flex flex-col mt-2">
                    <p className="font-light text-sm">{props.dateTime}</p>
                    <p className="font-light text-sm">{props.location}</p>
                </div>
                <div>
                    {/* Learn more and cancel booking button */}
                    <div className="flex justify-between pt-2 space-x-2">

                        <a href="#" className="text-sm bg-nhs-blue px-4 py-2 text-white rounded-sm font-semibold w-1/2 text-center whitespace-nowrap">
                            Learn more
                        </a>
                        <a href="#" className="text-sm bg-red-700 px-4 py-2 text-white rounded-sm font-semibold w-1/2 text-center whitespace-nowrap">
                            Cancel booking
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
