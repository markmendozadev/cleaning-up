import PageWrapper from "@/components/PageWrapper";
import ModeToggle from "@/components/mode-toggle";
import MenuBar from "@/constants/menu";
import React from "react";
import { NavLink } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <PageWrapper>
      <div className="px-24">
        <nav className="py-4">
          <ul className="flex  flex-row gap-4 justify-end items-center">
            {MenuBar.map((menu) => (
              <li key={menu.label}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    isActive
                      ? "underline decoration-2 underline-offset-8"
                      : "bg-inherit no-underline hover:underline decoration-2 underline-offset-8"
                  }
                >
                  {menu.label}
                </NavLink>
              </li>
            ))}
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
        {children}
      </div>
      <Toaster />
    </PageWrapper>
  );
}

export default Container;
