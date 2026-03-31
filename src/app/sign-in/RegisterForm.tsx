import { Button } from "@/components/ui/button";
import { AuthFormProps } from "@/app/sign-in/page";

const RegisterForm = (props: AuthFormProps) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gamesNeutral">
            <div className="bg-gamesNeutralLight p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign In</h2>
                <form className="space-y-4">
                    <div className="flex flex-col gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gamesPrimary">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 p-4 w-full border border-gray-600 rounded-md bg-gamesNeutral text-gray-300 focus:outline-none focus:ring-2 focus:ring-gamesPrimary"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gamesPrimary">Phone Number</label>
                            <input
                                type="number"
                                id="phone"
                                name="phone"
                                className="mt-1 p-4 w-full border border-gray-600 rounded-md bg-gamesNeutral text-white focus:outline-none focus:ring-2 focus:ring-gamesPrimary"
                                placeholder="Enter your Phone Number"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gamesPrimary">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="mt-1 p-4 w-full border border-gray-600 rounded-md bg-gamesNeutral text-white focus:outline-none focus:ring-2 focus:ring-gamesPrimary"
                                placeholder="Enter your Password"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full bg-gamesPrimary mt-5 text-white p-7 rounded-md hover:bg-gamesSecondaryDark transition-colors">
                            Sign In
                        </Button>
                    </div>
                </form>
                <div className="text-center text-gray-400 mt-10">
                    Don't have an account? <span className="text-gamesSecondary hover:underline" onClick={() => props.switchAuthForm((prevState) => !prevState)}>Sign Up</span>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;