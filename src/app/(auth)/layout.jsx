export const metadata = {
  title: {
    default: "Login",
    template: "%s | Exam",
    absolute: "",
  },
  description: "Login form",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
