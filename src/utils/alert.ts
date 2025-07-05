// src/utils/alert.ts
import Swal, { type SweetAlertIcon } from "sweetalert2";

export function showAlert({
  title,
  text,
  icon = "success",
  timer = 1800,
  showConfirmButton = false,
}: {
  title: string;
  text?: string;
  icon?: SweetAlertIcon;
  timer?: number;
  showConfirmButton?: boolean;
}) {
  return Swal.fire({
    title,
    text,
    icon,
    timer,
    showConfirmButton,
    timerProgressBar: true,
    customClass: {
      popup: "rounded-lg shadow-lg",
      title: "text-lg font-semibold",
    },
  });
}

export function showErrorAlert(message: string = "Something went wrong!") {
  return showAlert({
    title: "Error",
    text: message,
    icon: "error",
    timer: 2500,
    showConfirmButton: true,
  });
}

export function showSuccessAlert(message: string = "Success!") {
  return showAlert({
    title: "Success",
    text: message,
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
  });
}
