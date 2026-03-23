interface Props {
  number?: string;
  message?: string;
}

export default function WhatsAppButton({ number = '919876543210', message = 'Hello! I am interested in your properties.' }: Props) {
  const href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25d366] hover:bg-[#20bf5a] w-16 h-16 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
      aria-label="Chat on WhatsApp"
      style={{ boxShadow: '0 4px 28px rgba(37,211,102,0.55)' }}
    >
      <svg viewBox="0 0 48 48" className="w-9 h-9" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4.868 43.303l2.694-9.835a18.749 18.749 0 01-2.51-9.41C5.055 13.769 13.825 5 24.517 5c5.178.002 10.043 2.016 13.703 5.678 3.659 3.662 5.67 8.528 5.667 13.704-.005 10.694-8.775 19.464-19.466 19.464a19.49 19.49 0 01-9.316-2.373L4.868 43.303zm10.23-5.904l.59.352a16.188 16.188 0 008.28 2.272c8.924 0 16.188-7.263 16.19-16.19.001-4.325-1.683-8.391-4.739-11.449-3.057-3.059-7.122-4.745-11.449-4.746-8.93 0-16.191 7.262-16.194 16.189a16.12 16.12 0 002.453 8.59l.382.607-1.624 5.93 5.111-1.555zm9.975-5.048c-.147-.245-.538-.392-1.126-.686-.588-.294-3.478-1.715-4.017-1.911-.539-.196-.931-.294-1.323.295s-1.519 1.911-1.862 2.303c-.343.393-.686.442-1.274.148-.588-.295-2.484-.916-4.732-2.919-1.749-1.558-2.93-3.484-3.273-4.072-.343-.588-.037-.906.258-1.199.265-.263.588-.686.882-1.029.295-.343.392-.588.588-.981.196-.392.098-.735-.049-1.029-.147-.294-1.323-3.186-1.813-4.362-.476-1.147-.963-.99-1.323-.99l-1.127-.02c-.392 0-1.029.147-1.568.736s-2.059 2.01-2.059 4.902 2.108 5.687 2.402 6.08c.294.392 4.148 6.334 10.052 8.876 1.405.606 2.5.969 3.353 1.24 1.41.448 2.693.384 3.709.233 1.131-.169 3.478-1.422 3.969-2.796.491-1.373.491-2.55.344-2.796z"/>
      </svg>
      <span className="absolute right-[74px] bg-[#0a2240] text-white text-xs px-3 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none shadow-xl font-medium">
        Chat on WhatsApp
      </span>
      <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
    </a>
  );
}
