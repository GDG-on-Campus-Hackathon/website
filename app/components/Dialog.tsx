import { X } from "lucide-react";
import { forwardRef } from "react";

interface DialogProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, onClose }, ref) => {
    return (
      <dialog
        ref={ref}
        className={`
          open:flex flex-col m-auto p-2 rounded-lg bg-brand-beige text-brand-gray
          transition-discrete duration-200 backdrop:duration-200
          opacity-0 starting:open:opacity-0 open:opacity-100
          scale-95 starting:open:scale-95 open:scale-100
          backdrop:opacity-0 starting:open:backdrop:opacity-0 open:backdrop:opacity-100
          backdrop:bg-black/60
        `}
      >
        <div className="flex justify-end sticky top-0 bg-brand-beige">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 hover:brightness-50 hover:cursor-pointer"
          >
            <X />
          </button>
        </div>
        <article className="max-w-3xl overflow-y-auto px-[3vw] text-sm/8 text-justify tracking-wide">
          {children}
        </article>
        <div className="h-4" aria-hidden="true" />
      </dialog>
    );
  },
);

Dialog.displayName = "Dialog";

export default Dialog;
