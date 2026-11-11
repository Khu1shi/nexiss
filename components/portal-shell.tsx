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
    <main className="relative z-10 overflow-x-clip bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.06),transparent_44%),linear-gradient(135deg,#F1F5FD_0%,#FAFBFF_65%,#F7F9FF_100%)] font-[family-name:var(--font-jakarta),var(--font-sans),sans-serif]">
      <div className="mx-auto max-w-[1600px] px-4 py-5 sm:px-6 lg:px-8 lg:py-6">
        <div className="grid gap-5 xl:grid-cols-[16.5rem_minmax(0,1fr)] xl:items-start xl:gap-6">
          {/* Left Navigation Sidebar Card */}
          <aside className="min-w-0 rounded-[24px] border border-[rgba(99,115,160,0.14)] bg-white p-5 shadow-[0_12px_40px_rgba(30,64,175,0.08)] md:rounded-[28px] xl:sticky xl:top-24">
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-[rgba(99,115,160,0.18)] bg-[#F8FAFF] shadow-[0_4px_14px_rgba(30,64,175,0.08)]">
                <Image
                  src="/brand/nexisgeo-logo.png"
                  alt="NexisGEO logo"
                  width={36}
                  height={36}
                  className="h-7 w-7 object-contain"
                  priority
                />
              </div>
              <div>
                <p className="text-[13px] font-bold tracking-[0.22em] text-[#0F172A]">NEXISGEO</p>
                <p className="text-[11.5px] font-medium text-[#6B7280]">Portal shell</p>
              </div>
            </Link>

            <div className="mt-5 rounded-[20px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4FD8]">
                {roleCopy.label}
              </p>
              <p className="mt-1.5 text-[13px] leading-[1.5] text-[#5B6472]">{roleCopy.detail}</p>
            </div>

            <div className="mt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                Navigation
              </p>
              <nav aria-label="Portal navigation" className="mt-2.5 space-y-1.5">
                {navItems.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between rounded-[14px] px-3.5 py-2.5 text-[13.5px] transition ${
                        active
                          ? "border border-[#D5E2FA] bg-[#EEF4FF] font-semibold text-[#0F172A]"
                          : "border border-transparent bg-transparent font-medium text-[#4B5563] hover:border-[rgba(99,115,160,0.14)] hover:bg-[#FBFCFF] hover:text-[#0F172A]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] ${
                          active
                            ? "border border-[#D5E2FA] bg-white text-[#2563EB]"
                            : "bg-[#F1F5FD] text-[#64748B]"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="mt-5 rounded-[20px] border border-[rgba(99,115,160,0.14)] bg-[#FBFCFF] p-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                Portal split
              </p>
              <div className="mt-3 space-y-2.5">
                <div className="rounded-[14px] border border-[rgba(99,115,160,0.14)] bg-white p-3">
                  <p className="text-[13px] font-bold text-[#0F172A]">User portal</p>
                  <p className="mt-1 text-[12px] leading-[1.45] text-[#6B7280]">
                    Brand teams, agencies, growth operators
                  </p>
                </div>
                <div className="rounded-[14px] border border-[rgba(99,115,160,0.14)] bg-white p-3">
                  <p className="text-[13px] font-bold text-[#0F172A]">Admin portal</p>
                  <p className="mt-1 text-[12px] leading-[1.45] text-[#6B7280]">
                    Internal workspace review, launch ops, investor control
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Workspace Area (sits directly on page background without outer glass card) */}
          <section className="min-w-0">
            <div className="flex flex-col gap-4 border-b border-[rgba(99,115,160,0.14)] pb-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <span className="inline-flex w-fit items-center rounded-full border border-[#D5E2FA] bg-[#EEF4FF] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2563EB]">
                  {roleCopy.label}
                </span>
                <h1 className="mt-3 text-[clamp(28px,2.5vw,38px)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#0F172A]">
                  {title}
                </h1>
                <p className="mt-2 max-w-3xl text-[14.5px] leading-[1.55] text-[#5B6472] sm:text-[15px]">
                  {subtitle}
                </p>
              </div>

              <div className="grid shrink-0 gap-3 sm:grid-cols-2 lg:min-w-[21rem]">
                <div className="rounded-[18px] border border-[rgba(99,115,160,0.14)] bg-white px-4 py-3.5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                    Workspace
                  </p>
                  <p className="mt-1.5 text-[14.5px] font-bold text-[#0F172A]">
                    Mumbai Pilot Workspace
                  </p>
                </div>
                <div className="rounded-[18px] border border-[rgba(99,115,160,0.14)] bg-white px-4 py-3.5 shadow-[0_8px_30px_rgba(30,64,175,0.06)]">
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#6B7280]">
                    Status
                  </p>
                  <p className="mt-1.5 inline-flex items-center gap-2 text-[14.5px] font-bold text-[#15803D]">
                    <span className="h-2 w-2 rounded-full bg-[#34C38F]" />
                    Signals active
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5">{children}</div>
          </section>
        </div>
      </div>
    </main>
  );
}
