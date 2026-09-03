import React, { useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";

const WEB3FORMS_ACCESS_KEY = "26d9fb0c-e6f1-424a-b569-7a430d0f0833";

const infoIcons = [Mail, Phone, MapPin];

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim() || `Portfolio Nachricht von ${form.name.trim()}`,
          message: form.message.trim(),
          from_name: `${form.name.trim()} via jajeh.net`,
          botcheck: "",
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Übertragung fehlgeschlagen.");
      }
    } catch (err: unknown) {
      console.error("Web3Forms error:", err);
      const msg = err instanceof Error ? err.message : "Senden fehlgeschlagen.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 relative"
      style={{
        background: "linear-gradient(180deg, #040b16 0%, #060d1a 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(6,182,212,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-xs font-semibold tracking-widest uppercase bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            {c.badge}
          </span>
          <h2 className="font-grotesk text-4xl md:text-5xl font-bold text-white mb-4">
            {c.title1}{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #06b6d4, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {c.title2}
            </span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {c.info.map(({ label, value }, i) => {
              const Icon = infoIcons[i % infoIcons.length];
              return (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-800/60 glow-border"
                  style={{ background: "rgba(6,18,40,0.6)" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest mb-1 font-mono">
                      {label}
                    </div>
                    <div className="text-slate-200 font-medium text-sm sm:text-base break-all">
                      {value}
                    </div>
                  </div>
                </div>
              );
            })}

            <div
              className="p-5 rounded-2xl border border-green-500/20 mt-2"
              style={{ background: "rgba(16,185,129,0.05)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="text-green-400 font-semibold text-sm">
                  {c.availTitle}
                </span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {c.availDesc}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-800/60 p-6 sm:p-8 space-y-5 glow-border"
              style={{ background: "rgba(6,18,40,0.6)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2 font-mono">
                    {c.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={c.form.namePh}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2 font-mono">
                    {c.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={c.form.emailPh}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2 font-mono">
                  {c.form.subject}
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder={c.form.subjectPh}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2 font-mono">
                  {c.form.message}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={c.form.messagePh}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors resize-none"
                />
              </div>

              {/* Web3Forms Honeypot for spam protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm text-center flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{c.form.success}</span>
                </motion.div>
              )}

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center flex items-center justify-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl font-semibold text-sm bg-cyan-500 text-slate-900 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {loading ? (
                  c.form.sending
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {c.form.send}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
