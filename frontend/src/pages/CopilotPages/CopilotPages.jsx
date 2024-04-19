/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react";
import BaseLayout from "../../components/layout/BaseLayout";
import { SidebarProvider } from "../../context/SidebarContext";
import { ThemeProvider } from "../../context/ThemeContext";
import { Dashboard } from "../../screens";
import "./copilot.scss";

export default function CopilotPages() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <BaseLayout>
          <main className=" min-h-[calc(100vh-160px)">
            <Dashboard />
          </main>
        </BaseLayout>
      </SidebarProvider>
    </ThemeProvider>
  );
}
