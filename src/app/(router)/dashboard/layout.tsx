import DashboardHeader from "@/components/dashboard/dashboard-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " Dashboard",
  //   description: "Vinecalc dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="hidden  lg:block bg-[#161b37] w-full min-h-screen">
        {/* left side */}
        <DashboardHeader />
        {/* right content */}
        <main className="h-full min-h-[calc(100vh-74px)]">{children}</main>
      </div>

      {/* <div className="lg:hidden bg-[#161b37] flex flex-col justify-center items-center h-screen px-10">
        <p className="text-3xl font-bold text-red-600 mb-4">Desktop Only!</p>
        <p className="text-xs sm:text-sm md:text-base text-white text-center leading-5">
          This application is optimized for desktop use. Please switch to a
          desktop device for the best experience.
        </p>
      </div> */}
    </>
  );
}
