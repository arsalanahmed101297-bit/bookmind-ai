"use client";

import { BookX, Home, LibraryBig } from "lucide-react";

import { EmptyState } from "@/components/app-shell/page-header";
import { useI18n } from "@/components/providers/locale-provider";
import { ButtonLink } from "@/components/ui/button";

export default function AppNotFound() {
  const { dict } = useI18n();

  return (
    <div className="container-app py-10 sm:py-16">
      <EmptyState
        icon={<BookX className="size-5" aria-hidden="true" />}
        title={dict.app.book.notFoundTitle}
        description={dict.app.book.notFoundDescription}
        action={
          <div className="flex flex-wrap justify-center gap-2">
            <ButtonLink href="/library" size="sm">
              <LibraryBig className="size-3.5" aria-hidden="true" />
              {dict.app.book.browseLibrary}
            </ButtonLink>
            <ButtonLink href="/dashboard" variant="secondary" size="sm">
              <Home className="size-3.5" aria-hidden="true" />
              {dict.nav.dashboard}
            </ButtonLink>
          </div>
        }
        className="mx-auto max-w-2xl"
      />
    </div>
  );
}
