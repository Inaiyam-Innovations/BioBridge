import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BioBridge 2026" },
      { httpEquiv: "refresh", content: "0;url=/#partners" },
    ],
  }),
  component: AboutRedirect,
});

function AboutRedirect() {
  useEffect(() => {
    window.location.replace("/#partners");
  }, []);

  return null;
}
