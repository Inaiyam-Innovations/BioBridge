import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [{ title: "FAQs — BioBridge 2026" }],
  }),
  component: FAQRedirect,
});

function FAQRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: "/" });
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("open-biobridge-faq", { detail: { tab: "all-faqs" } }));
    }, 100);
  }, [navigate]);

  return null;
}

