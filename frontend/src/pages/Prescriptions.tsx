import Footer, { ActiveTab } from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import PrescriptionBox from "../components/PrescriptionBox/PrescriptionBox";

export default function Prescriptions() {
  return (
    <div className="relative w-full h-full flex flex-col">
      <Navbar title="Prescriptions" />
      <div className="px-4">
        <div className="h-16 flex justify-center items-center bg-white shadow-md rounded-md">
          <a
            className="py-3 px-6 bg-nhs-blue rounded-full text-white font-bold text-center w-full max-w-xs"
            href="/prescriptions"
          >
            View all prescriptions
          </a>
        </div>

        <div className="mt-2 bg-white p-4 rounded-md shadow-md">
          <h2 className="font-semibold text-lg mb-1">Repeat prescriptions</h2>
          {/* Grid with two boxes */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-2 bg-yellow-400 rounded-md">
              {/* Warning upcoming prescrioption */}
              <div className="flex justify-between items-center h-full">
                <div>
                  <h2 className="font-bold text-md">Upcoming Prescription</h2>
                  <p className="text-sm font-light mt-1 leading-3.5">You have a prescription due in 3 days</p>
                </div>

              </div>
            </div>
            <a className="bg-nhs-blue-wcag p-2 rounded-md flex justify-center items-center h-full"
              href="/prescriptions"
            >
              <span
                className="text-white font-bold text-center w-full max-w-xs"
              >
                Order repeat prescription
              </span>
            </a>
          </div>
        </div>
      </div>
      <PrescriptionBox />

      <Footer activeTab={ActiveTab.PRESCRIPTIONS} />
    </div>
  );
}
