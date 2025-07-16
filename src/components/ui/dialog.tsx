"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

interface DialogDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={() => onOpenChange?.(false)}
    >
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

const DialogContent: React.FC<DialogContentProps> = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn(
      "relative z-50 grid w-full max-w-lg gap-4 border border-gray-200 bg-white p-6 shadow-lg sm:rounded-lg",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const DialogHeader: React.FC<DialogHeaderProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);

const DialogTitle: React.FC<DialogTitleProps> = ({ className, ...props }) => (
  <h3
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
);

const DialogDescription: React.FC<DialogDescriptionProps> = ({
  className,
  ...props
}) => <p className={cn("text-sm text-gray-600", className)} {...props} />;

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription };
