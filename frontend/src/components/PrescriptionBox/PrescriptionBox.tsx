export default function PrescriptionBox() {
  return <div className="p-4">
    <div className="bg-slate-100 rounded-md p-2 shadow-md">
      <div className="flex">
        <div
          className="flex flex-col justify-center p-2"
        >
          <h2 className="font-semibold">Approved! Your order is being filled at the pharmacy</h2>
          <p className="font-light text-sm">Custom Acne Cream</p>
        </div>
        <div
          className="flex flex-1/4 items-center justify-center rounded-xl"
        >
          <img
            className="w-16 aspect-square"
            src="https://placehold.co/256x256/EEE000/31343C"
            alt="Custom Acne Cream" />
        </div>
      </div>
      <div>
        <div id="progress-bar-container" className="relative rounded-xl p-2">
          <div className=" absolute rounded-xl bg-nhs-dark-blue w-[62%] h-2" />
          <div className="rounded-xl bg-slate-300 w-full h-2" />
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
