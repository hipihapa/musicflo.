/**
 * MusicFlo. marketing palette — admin surfaces match the public site
 * (dark-bg, dark-card, accent-teal / accent-green, gray borders).
 */
export const adminShell =
  "min-h-screen bg-dark-bg text-white font-poppins antialiased";

export const adminMainColumn = "flex min-w-0 flex-1 flex-col bg-dark-bg text-white";

export const adminSidebar =
  "border-r border-gray-800/40 bg-dark-card text-white";

export const adminTopBar =
  "border-b border-gray-800/30 bg-dark-bg/40 backdrop-blur-md text-white";

export const adminCard =
  "rounded-lg border border-gray-800/40 bg-dark-card text-white shadow-none";

export const adminMuted = "text-gray-400";

export const adminLabel = "text-gray-300";

export const adminInput =
  "border-gray-800/25 bg-dark-bg/90 text-white placeholder:text-gray-500 file:text-gray-300 focus-visible:border-accent-teal/35 focus-visible:ring-1 focus-visible:ring-accent-teal/25 focus-visible:ring-offset-0";

export const adminPrimaryBtn =
  "border-0 bg-gradient-to-r from-accent-teal to-accent-green font-semibold text-white shadow-none hover:from-accent-teal/85 hover:to-accent-green/85";

export const adminOutlineBtn =
  "border-gray-600 bg-transparent text-gray-200 hover:bg-white/5 hover:text-white";

export const adminGhost =
  "text-gray-300 hover:bg-white/5 hover:text-accent-teal";

export const adminNavActive =
  "bg-gradient-to-r from-accent-teal to-accent-green font-semibold text-white shadow-none";

export const adminTableWrap =
  "overflow-hidden rounded-lg border border-gray-800/40 bg-dark-card";

export const adminTableRow = "border-gray-800/50 hover:bg-white/[0.04]";

export const adminTableHead = "text-gray-400";

export const adminDialog =
  "border border-gray-800/50 bg-dark-card text-white sm:rounded-lg";

export const adminDialogTitle = "text-white";

export const adminDialogDesc = "text-gray-400";

/** Elevated panel so menus read clearly above dark-card tables. */
export const adminDropdown =
  "z-[300] border border-gray-500/35 bg-[#121212] text-white shadow-2xl shadow-black/60 ring-1 ring-white/10";

export const adminDropdownItem =
  "cursor-pointer text-gray-100 outline-none data-[highlighted]:bg-white/12 data-[highlighted]:text-white focus:bg-white/12 focus:text-white";
