function ExternalArrowIcon({ className }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.2614 3.50124L1.60156 13.4994"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
      />
      <path
        d="M4.75781 3.24219H13.2431V11.7275"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

ExternalArrowIcon.displayName = 'ExternalIcon';

export { ExternalArrowIcon };
