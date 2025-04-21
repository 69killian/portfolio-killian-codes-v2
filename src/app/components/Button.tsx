"use client";
import React from 'react';
import ShimmerButton from "@/components/ui/shimmer-button";

interface ButtonProps {
  name: string;
  icon?: React.ReactNode;  // Ajout de l'option pour l'icône
}

export function Button({ name, icon }: ButtonProps) {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center font-rethink">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          {name}
          {icon && icon} {/* Affiche l'icône si elle est fournie */}
        </span>
      </ShimmerButton>
    </div>
  );
}
