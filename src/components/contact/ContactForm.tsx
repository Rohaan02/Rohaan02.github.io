"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

// FormSubmit.co needs no API key or backend — it just forwards submissions
// to site.email. The destination address must click a one-time confirmation
// link from FormSubmit the first time it ever receives a submission.
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      subject: data.get("subject"),
      message: data.get("message"),
      _subject: `Portfolio contact: ${data.get("subject")}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => null);

      if (response.ok && result && result.success !== "false") {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-on-surface-variant mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl bg-surface-container border border-white/10 px-4 py-3 text-on-surface focus:outline-none focus:border-primary/50"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-on-surface-variant mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl bg-surface-container border border-white/10 px-4 py-3 text-on-surface focus:outline-none focus:border-primary/50"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-on-surface-variant mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-xl bg-surface-container border border-white/10 px-4 py-3 text-on-surface focus:outline-none focus:border-primary/50"
          placeholder="Project inquiry, collaboration, etc."
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-on-surface-variant mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl bg-surface-container border border-white/10 px-4 py-3 text-on-surface focus:outline-none focus:border-primary/50 resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto px-10 py-4 bg-primary text-on-primary font-bold rounded-xl shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" ? (
        <p className="text-secondary font-medium">
          Thanks for reaching out! I&apos;ll get back to you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-error font-medium">
          Something went wrong sending your message. Please try emailing directly instead.
        </p>
      ) : null}
    </form>
  );
}
