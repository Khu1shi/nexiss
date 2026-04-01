"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { portalNavigation, portalRoleCopy, type PortalRole } from "@/lib/portal";

type PortalShellProps = {
  children: ReactNode;
  role: PortalRole;
  title: string;
  subtitle: string;
};

export function PortalShell({ children, role, title, subtitle }: PortalShellProps) {
  const pathname = usePathname();
  const navItems = portalNavigation[role];
  const roleCopy = portalRoleCopy[role];

  return (
    <main className="mx-auto max-w-[110rem] px-4 py-5 sm:px-6 lg:px-8 xl:py-6">
      <div className="grid gap-5 xl:grid-cols-[18rem_minmax(0,1fr)]">
        <aside className="panel relative overflow-hidden rounded-[32px] p-5 xl:min-h-[calc(100vh-6.5rem)] xl:sticky xl:top-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,209,255,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(31,111,255,0.08),transparent_32%)]" />
          <div className="relative">
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-cyan/20 bg-white/90 shadow-[0_12px_30px_rgba(31,111,255,0.12)]">
                <Image
                  src="/brand/nexisgeo-logo.png"
                  alt="NexisGEO logo"
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain"
                  priority
                />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-[0.28em] text-ink">NEXISGEO</p>
                <p className="font-mono text-xs text-slate-500">Portal shell</p>
              </div>
            </Link>

            <div className="mt-6 rounded-[24px] border border-slate-200 bg-white/80 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">{roleCopy.label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{roleCopy.detail}</p>
            </div>

            <div className="mt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Navigation</p>
              <div className="mt-3 space-y-2">
                {navItems.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition ${
                        active
                          ? "border border-cyan/20 bg-cyan/10 text-ink shadow-[0_10px_24px_rgba(79,209,255,0.12)]"
                          : "border border-transparent bg-white/50 text-slate-600 hover:border-slate-200 hover:bg-white/85 hover:text-ink"
                      }`}
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {item.tag}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(243,248,255,0.88))] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500">Portal split</p>
              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-slate-200 bg-white/85 p-3">
                  <p className="text-sm font-semibold text-ink">User portal</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Brand teams, agencies, growth operators
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/85 p-3">
                  <p className="text-sm font-semibold text-ink">Admin portal</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Internal workspace review, launch ops, investor control
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <section className="panel relative overflow-hidden rounded-[32px] p-5 md:p-6 xl:min-h-[calc(100vh-6.5rem)] xl:p-7">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(79,209,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(138,92,255,0.06),transparent_26%)]" />
          <div className="relative">
            <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-5 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">{roleCopy.label}</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                  {title}
                </h1>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{subtitle}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[22rem]">
                <div className="rounded-2xl border border-slate-200 bg-white/85 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Workspace</p>
                  <p className="mt-2 text-base font-semibold text-ink">Mumbai Pilot Workspace</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/85 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Status</p>
                  <p className="mt-2 text-base font-semibold text-emerald-600">Signals active</p>
                </div>
              </div>
            </div>

            <div className="mt-6">{children}</div>
          </div>
        </section>
      </div>
    </main>
  );
}
