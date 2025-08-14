import "../globals.css";
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
      <body>
        {" "}
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-orange-400 p-6 text-center">
                <h1 className="text-2xl font-bold text-white">CRUD EXAM</h1>
              </div>
              {children}{" "}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
