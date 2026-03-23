import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "./VisibilityIcons";

function LoginForm() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(true);

    function handelEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handelPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function handelPasswordVisibility() {
        setShowPassword(!showPassword);
    }


    const handleLogin = () => {
        console.log("Login payload", { email, password });
    };

    return (
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
           

            <div className="space-y-4">
                <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={handelEmailChange}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            value={password}
                            onChange={handelPasswordChange}
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 pr-20 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={handelPasswordVisibility}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-2 text-cyan-700 hover:bg-cyan-50"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                        </button>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleLogin}
                    className="w-full rounded-lg bg-cyan-600 px-4 py-2.5 font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default LoginForm;