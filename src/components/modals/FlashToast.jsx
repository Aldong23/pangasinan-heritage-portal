"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

/**
 * FlashToast component triggers toast notifications
 * @param {Object} props
 * @param {string} props.success
 * @param {string} props.error
 * @param {string} props.info
 * @param {string} props.warning
 */
export default function FlashToast({ success, error, info, warning }) {
  useEffect(() => {
    if (success) toast.success(success);
    if (error) toast.error(error);
    if (info) toast.info(info);
    if (warning) toast.warning(warning);
  }, [success, error, info, warning]);

  return null; // Only triggers toasts
}
