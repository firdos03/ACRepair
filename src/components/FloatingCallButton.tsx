import { Phone } from "lucide-react";
import { createPortal } from "react-dom";

export const FloatingCallButton = () => {
    return createPortal(
        <div
            style={{
                position: "fixed",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 999999999,
            }}
        >
            <a
                href="tel:+91 91305 69016"
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-xl hover:bg-blue-700 active:scale-95 transition-all duration-200"
            >
                <Phone size={18} />
                <span className="font-semibold">Call Now</span>
            </a>
        </div>,
        document.body
    );
};
