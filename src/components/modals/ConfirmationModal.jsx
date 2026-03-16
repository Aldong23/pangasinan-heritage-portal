"use client";

import Modal from "./Modal";
import { TriangleAlert } from "lucide-react";
import { Dialog } from "@headlessui/react";
import Button from "../buttons/Button";

export default function ConfirmationModal({
  show = false,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onClose = () => {},
  onConfirm = () => {},
  confirmVariant = "danger",
}) {
  return (
    <Modal show={show} onClose={onClose} maxWidth="sm">
      <div className="p-6 text-center">
        {/* Icon */}
        <TriangleAlert className="mx-auto mb-4 h-12 w-12 text-red-600 dark:text-red-400" />

        {/* Title */}
        <Dialog className="text-lg font-medium text-gray-900 dark:text-gray-100">
          {title}
        </Dialog>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-3">
          <Button variant="light" onClick={onClose} className="!px-4 !py-2">
            {cancelText}
          </Button>
          <Button
            variant={confirmVariant}
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="!px-4 !py-2"
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
