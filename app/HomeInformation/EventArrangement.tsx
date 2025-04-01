import event_arrangement_desktop from "./event_arrangement_desktop.svg";
import event_arrangement_mobile from "./event_arrangement_mobile.svg";

export default function EventArrangement() {
  return (
    <div className="w-full h-auto mb-5">
      <div className="hidden md:block">
        <img src={event_arrangement_desktop.src} alt={"Event Arrangement"} />
      </div>
      <div className="block md:hidden">
        <img src={event_arrangement_mobile.src} alt={"Event Arrangement"} />
      </div>
    </div>
  );
}
