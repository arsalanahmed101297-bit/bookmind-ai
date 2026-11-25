"use client";

import { useRef, useState } from "react";
import { CheckCircle2, FileText, Info, UploadCloud, X } from "lucide-react";

import { useI18n } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { formatFileSize, isPdfFile } from "@/lib/utils";

const MAX_SIZE = 50 * 1024 * 1024;

export function UploadDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { dict } = useI18n();
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [preview, setPreview] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function acceptFile(candidate: File | undefined) {
    if (!candidate) return;
    if (!isPdfFile(candidate)) {
      setFile(null);
      setError(dict.app.upload.invalidType);
      return;
    }
    if (candidate.size > MAX_SIZE) {
      setFile(null);
      setError(dict.app.upload.tooLarge);
      return;
    }
    setError(null);
    setFile(candidate);
    setPreview(false);
  }

  function submit() {
    if (!file) {
      setError(dict.app.upload.empty);
      return;
    }
    setPreview(true);
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={preview ? dict.app.upload.previewTitle : dict.app.upload.title}
      description={preview ? dict.app.upload.previewBody : dict.app.upload.description}
      closeLabel={dict.common.close}
      className="max-w-lg"
    >
      {preview ? (
        <div>
          <div className="flex items-start gap-3 rounded-2xl border border-accent/25 bg-accent-soft/50 p-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-ink">
              <Info className="size-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[0.85rem] font-semibold text-ink">{dict.app.upload.previewTitle}</p>
              <p className="mt-1 text-[0.78rem] leading-relaxed text-ink-soft/80">
                {dict.app.upload.previewBody}
              </p>
            </div>
          </div>

          {file ? (
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-line bg-paper/60 p-3">
              <FileText className="size-4 shrink-0 text-muted" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.8rem] font-medium text-ink">{file.name}</p>
                <p className="text-[0.66rem] text-muted">
                  {formatFileSize(file.size)} · {dict.app.upload.previewTag}
                </p>
              </div>
              <CheckCircle2 className="size-4 text-accent" aria-hidden="true" />
            </div>
          ) : null}

          <div className="mt-6 flex justify-end">
            <Button type="button" onClick={onClose}>
              {dict.app.upload.done}
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => {
              event.preventDefault();
              setDragging(false);
              acceptFile(event.dataTransfer.files?.[0]);
            }}
            className={`rounded-2xl border border-dashed p-7 text-center transition-colors ${
              dragging
                ? "border-accent bg-accent-soft/50"
                : "border-line-strong bg-paper/40 hover:border-accent/50"
            }`}
          >
            <span className="mx-auto grid size-12 place-items-center rounded-2xl border border-line bg-surface text-accent shadow-sm">
              <UploadCloud className="size-5" aria-hidden="true" />
            </span>
            <p className="mt-4 text-[0.85rem] font-medium text-ink">{dict.app.upload.drop}</p>
            <p className="mt-1 text-[0.7rem] text-muted">{dict.app.upload.hint}</p>
            <input
              ref={inputRef}
              id="bookmind-pdf-input"
              type="file"
              accept="application/pdf,.pdf"
              className="sr-only"
              onChange={(event) => acceptFile(event.target.files?.[0])}
            />
            <Button
              type="button"
              variant="secondary"
              size="sm"
              className="mt-4"
              onClick={() => inputRef.current?.click()}
            >
              {dict.app.upload.browse}
            </Button>
          </div>

          {error ? (
            <p className="mt-3 text-[0.75rem] font-medium text-danger" role="alert">
              {error}
            </p>
          ) : null}

          {file ? (
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-line bg-surface-strong p-3">
              <FileText className="size-4 shrink-0 text-accent" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[0.8rem] font-medium text-ink">{file.name}</p>
                <p className="text-[0.66rem] text-muted">{formatFileSize(file.size)}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setError(null);
                  if (inputRef.current) inputRef.current.value = "";
                }}
                aria-label={dict.common.cancel}
                className="grid size-7 place-items-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            </div>
          ) : null}

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[0.58rem] font-medium uppercase tracking-[0.1em] text-muted">
              {dict.app.upload.previewTag}
            </span>
            <div className="flex gap-2">
              <Button type="button" variant="ghost" size="sm" onClick={onClose}>
                {dict.common.cancel}
              </Button>
              <Button type="button" size="sm" onClick={submit} disabled={!file}>
                {dict.app.upload.submit}
              </Button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
