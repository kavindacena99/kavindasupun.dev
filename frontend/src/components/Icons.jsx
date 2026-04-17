function IconBase({ children, className = "h-5 w-5" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function MenuIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function CloseIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M6 6l12 12" />
      <path d="M18 6l-12 12" />
    </IconBase>
  );
}

export function SunIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5" />
      <path d="M12 19.5V22" />
      <path d="M4.93 4.93l1.77 1.77" />
      <path d="M17.3 17.3l1.77 1.77" />
      <path d="M2 12h2.5" />
      <path d="M19.5 12H22" />
      <path d="M4.93 19.07l1.77-1.77" />
      <path d="M17.3 6.7l1.77-1.77" />
    </IconBase>
  );
}

export function MoonIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </IconBase>
  );
}

export function ArrowUpRightIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </IconBase>
  );
}

export function MailIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </IconBase>
  );
}

export function MapPinIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 21s6-5.8 6-11a6 6 0 1 0-12 0c0 5.2 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

export function GithubIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M9 18c-4 1.2-4-2-6-2" />
      <path d="M15 22v-3.1a3.3 3.3 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.8A5.3 5.3 0 0 0 18.7 6 4.9 4.9 0 0 0 18.6 2S17.5 1.7 15 3.4a13.4 13.4 0 0 0-6 0C6.5 1.7 5.4 2 5.4 2A4.9 4.9 0 0 0 5.3 6 5.3 5.3 0 0 0 3.8 9.5c0 5.3 3.1 6.5 6.1 6.8A3.3 3.3 0 0 0 9 18.9V22" />
    </IconBase>
  );
}

export function LinkedinIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </IconBase>
  );
}

export function SparkIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 3l1.9 4.8L19 9.5l-4.2 2.4L13 17l-1.8-5.1L7 9.5l5.1-1.7L12 3Z" />
      <path d="M5 19l.8 2 .8-2 2-.8-2-.8-.8-2-.8 2-2 .8 2 .8Z" />
    </IconBase>
  );
}

export function ServerIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01" />
      <path d="M7 17h.01" />
      <path d="M11 7h6" />
      <path d="M11 17h6" />
    </IconBase>
  );
}

export function DatabaseIcon({ className }) {
  return (
    <IconBase className={className}>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </IconBase>
  );
}

export function DeviceIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="12" height="12" rx="2" />
      <rect x="17" y="8" width="4" height="9" rx="1" />
      <path d="M7 19h4" />
    </IconBase>
  );
}

export function CloudIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M7 18a4 4 0 1 1 .8-7.9A5 5 0 0 1 18 11a3.5 3.5 0 1 1 .5 7H7Z" />
    </IconBase>
  );
}

export function ToolsIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
    </IconBase>
  );
}

export function BriefcaseIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </IconBase>
  );
}

export function GraduationIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M3 9l9-5 9 5-9 5-9-5Z" />
      <path d="M7 11.2V16l5 3 5-3v-4.8" />
    </IconBase>
  );
}
