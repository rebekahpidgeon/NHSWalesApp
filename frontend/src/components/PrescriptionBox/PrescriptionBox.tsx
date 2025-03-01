import { Progress } from "@/components/ui/progress"



export default function PrescriptionBox() {
  return <div>

    <div>
      <div>
        <h2>Approved! Your order is being filled at the pharmacy</h2>
        <p>Custom Acne Cream</p>
      </div>
      <div>
        <img src="https://placehold.co/600x400/EEE/31343C" alt="Custom Acne Cream" />
      </div>
    </div>
    <div>
      <Progress  value={75} />
      <div>
        <p>Requested</p>
        <p>Reviewed</p>
        <p>Shipped</p>
        <p>Delivered</p>
      </div>
    </div>

  </div>;
}
