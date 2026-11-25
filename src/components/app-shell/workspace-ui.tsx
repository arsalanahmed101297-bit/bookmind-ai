"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { SearchDialog } from "./search-dialog";
import { UploadDialog } from "./upload-dialog";

type WorkspaceUiContextValue = {
  openSearch: () => void;
  openUpload: () => void;
  closeSearch: () => void;
};

const WorkspaceUiContext = createContext<WorkspaceUiContextValue | null>(null);

export function WorkspaceUiProvider({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);

  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);
  const openUpload = useCallback(() => setUploadOpen(true), []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen((value) => !value);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const value = useMemo(
    () => ({ openSearch, openUpload, closeSearch }),
    [openSearch, openUpload, closeSearch],
  );

  return (
    <WorkspaceUiContext.Provider value={value}>
      {children}
      {searchOpen ? (
        <SearchDialog
          open
          onClose={closeSearch}
          onUpload={() => {
            setSearchOpen(false);
            setUploadOpen(true);
          }}
        />
      ) : null}
      {uploadOpen ? (
        <UploadDialog open onClose={() => setUploadOpen(false)} />
      ) : null}
    </WorkspaceUiContext.Provider>
  );
}

export function useWorkspaceUi() {
  const ctx = useContext(WorkspaceUiContext);
  if (!ctx) throw new Error("useWorkspaceUi must be used inside WorkspaceUiProvider");
  return ctx;
}
