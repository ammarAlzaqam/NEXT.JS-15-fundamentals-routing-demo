import { ReactNode } from "react";

interface ComplexDashboardLayoutProps {
  children: ReactNode;
  users: ReactNode;
  revenue: ReactNode;
  notification: ReactNode;
  login: ReactNode;
}

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notification,
  login,
}: ComplexDashboardLayoutProps) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <section>
      <div>{children}</div>
      <div className="flex mt-10 gap-5">
        <div className="flex flex-col gap-5">
          {users}
          {revenue}
        </div>
        <div className="flex grow">{notification}</div>
      </div>
    </section>
  ) : (
    login
  );
}
