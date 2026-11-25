"use client";

import { useEffect } from "react";
import { Home, RotateCcw, TriangleAlert } from "lucide-react";

import { EmptyState } from "@/components/app-shell/page-header";
import { useI18n } from "@/components/providers/locale-provider";
import { Button, ButtonLink } from "@/components/ui/button";

export default function AppError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  const { dict } = useI18n();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-app py-10 sm:py-16">
      <EmptyState
        icon={<TriangleAlert className="size-5" aria-hidden="true" />}
        title={dict.notFound.errorTitle}
        description={dict.notFound.errorDescription}
        action={
          <div className="flex flex-wrap justify-center gap-2">
            <Button type="button" size="sm" onClick={() => retry()}>
              <RotateCcw className="size-3.5" aria-hidden="true" />
              {dict.notFound.retry}
            </Button>
            <ButtonLink href="/" variant="secondary" size="sm">
              <Home className="size-3.5" aria-hidden="true" />
              {dict.notFound.home}
            </ButtonLink>
          </div>
        }
        className="mx-auto max-w-2xl"
      />
    </div>
  );
}
