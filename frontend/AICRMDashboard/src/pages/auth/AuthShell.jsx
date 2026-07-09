import { Sparkles, TrendingUp, Bot, ShieldCheck } from "lucide-react";

/* Split-screen auth layout: marketing panel on the left, form on the right. */
export function AuthShell({ children }) {
  return (
    <div className="flex min-h-screen bg-canvas">
      {/* Brand / marketing panel */}
      <div className="relative hidden w-[45%] flex-col justify-between overflow-hidden lg:flex"
           style={{ background: "linear-gradient(160deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)" }}>
        {/* Subtle geometric decoration */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-10"
             style={{ background: "radial-gradient(circle, #a5b4fc 0%, transparent 70%)" }} />
        <div className="absolute -bottom-28 -left-12 h-80 w-80 rounded-full opacity-10"
             style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 right-0 h-px w-full opacity-10 -translate-y-1/2"
             style={{ background: "linear-gradient(90deg, transparent, #a5b4fc, transparent)" }} />

        {/* Logo */}
        <div className="relative flex items-center gap-3 px-10 pt-10">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-display text-lg font-bold text-white tracking-tight">
            Time To Program CRM
          </span>
        </div>

        {/* Hero copy */}
        <div className="relative px-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            AI-Powered Sales Intelligence
          </div>
          <h2 className="font-display text-4xl font-bold leading-tight text-white">
            Close more deals<br />with an AI co-pilot<br />in your pipeline.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            TTP CRM unifies your leads, contacts and follow-ups — then layers
            Gemini-powered summaries, email drafts and sales insights on top.
          </p>

          <div className="mt-10 space-y-3.5">
            {[
              { icon: TrendingUp, text: "Visual pipeline with drag-and-drop stages" },
              { icon: Bot,         text: "AI lead scoring & instant email drafting" },
              { icon: ShieldCheck, text: "Secure JWT auth — your data stays yours" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-white/80" />
                </div>
                <span className="text-sm text-white/80">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className="relative px-10 pb-10 text-xs text-white/35">
          © {new Date().getFullYear()} Time To Program. All rights reserved.
        </p>
      </div>

      {/* Form panel */}
      <div className="flex w-full flex-col items-center justify-center bg-canvas px-6 py-12 lg:w-[55%]">
        {/* Mobile logo */}
        <div className="mb-8 flex items-center gap-2.5 lg:hidden">
          <div className="brand-gradient flex h-8 w-8 items-center justify-center rounded-xl text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-display text-base font-bold text-ink">TTP CRM</span>
        </div>
        <div className="w-full max-w-[380px] animate-fade-up rounded-2xl border border-line bg-surface p-8 shadow-[var(--shadow-card)]">
          {children}
        </div>
      </div>
    </div>
  );
}
