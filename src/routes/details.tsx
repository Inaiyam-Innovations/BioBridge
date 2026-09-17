import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/details")({
  head: () => ({
    meta: [
      { title: "How It Works — BioBridge 2026" },
      { httpEquiv: "refresh", content: "0;url=/#how-it-works" },
    ],
  }),
  component: DetailsRedirect,
});

function DetailsRedirect() {
  useEffect(() => {
    window.location.replace("/#how-it-works");
  }, []);

  return null;
}
