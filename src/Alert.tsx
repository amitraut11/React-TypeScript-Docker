import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

type AlertProps = {
    type?: "information" | "warning";
    heading: string;
    children: React.ReactNode;
    closable?: boolean;
    onClose?: () => void;

}



export function Alert({
  type = "information",
  heading,
  children,
  closable,
  onClose
}:AlertProps) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }
  return (
    <div>
      <div>
        <span
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
        >
          {type === "warning" ? "⚠" : "ℹ️"}
        </span>
        <span>{heading}</span>
      </div>
      {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}
      <div>{children}</div>
    </div>
  );
}