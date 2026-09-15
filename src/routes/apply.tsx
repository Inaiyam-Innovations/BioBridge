import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

const REGISTRATION_URL =
  "https://unstop.com/p/biobridge-bio-innovation-hackathon-2026-ks-rangasamy-college-of-technology-ksrct-namakkal-1755864?lb=gRm2vex&utm_medium=Share&utm_source=WhatsApp";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [{ title: "Register — BioBridge 2026" }],
  }),
  component: RegistrationRedirect,
});

function RegistrationRedirect() {
  useEffect(() => {
    window.location.replace(REGISTRATION_URL);
  }, []);

  return null;
}
