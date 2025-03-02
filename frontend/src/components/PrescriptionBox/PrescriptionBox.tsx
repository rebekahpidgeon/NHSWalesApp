export default function PrescriptionBox() {
  return <div className="p-4">
    <div className="bg-white rounded-md p-2 shadow-md">
      <div className="flex">
        <div
          className="flex flex-col  px-2"
        >
          <h2 className="font-semibold">Approved! Your order is being filled at the pharmacy</h2>
          <p className="font-normal text-sm">Time remaining: 2 days</p>
          <p className="font-light text-sm">Ibuprofen</p>
        </div>
        <div
          className="flex items-center justify-center rounded-xl bg-slate-300 aspect-square h-full w-32 p-2"
        >
          <img
            className="w-16 aspect-square"
            src="/placeholder/ibuprofen.png"
            alt="" />
        </div>
      </div>
      <div className="pt-1">
        <div id="progress-bar-container" className="relative rounded-xl p-2">
          <div className=" absolute rounded-xl bg-nhs-blue-wcag w-[62%] h-2" />
          <div className="rounded-xl bg-slate-200 w-full h-2" />
        </div>
        <div className="px-2 flex justify-between">
          <p className="text-sm">Requested</p>
          <p className="text-sm">Reviewed</p>
          <p className="text-sm">Shipped</p>
          <p className="text-sm">Delivered</p>
        </div>
      </div>
    </div>

  </div>
}
