import event_arrangement_desktop from "./event_arrangement_desktop.svg";
import event_arrangement_mobile from "./event_arrangement_mobile.svg";

export default function EventArrangement() {
  return (
    <div className="w-full h-auto mb-5">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={event_arrangement_desktop.src}
        />
        <source
          media="(max-width: 767px)"
          srcSet={event_arrangement_mobile.src}
        />
        <img
          src={event_arrangement_mobile.src}
          alt="Event Arrangement"
          className="w-full h-auto"
        />
      </picture>
    </div>
  );
}
