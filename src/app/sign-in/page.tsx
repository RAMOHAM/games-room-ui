import HomePageNavbar from "@/app/home/HomePageNavbar";
import Footer from "@/app/home/Footer";
import { Button } from "@/components/ui/button";

const SignIn = () => {
    return (
        <div>
            <HomePageNavbar />
            <div className="flex items-center justify-center h-screen bg-gamesNeutral">
                <div className="bg-gamesNeutralLight p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign In</h2>
                    <form className="space-y-4">
                        <div className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gamesPrimary">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-gamesNeutral text-gray-300 focus:outline-none focus:ring-2 focus:ring-gamesPrimary"
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
                                    className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-gamesNeutral text-white focus:outline-none focus:ring-2 focus:ring-gamesPrimary"
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
                                    className="mt-1 p-2 w-full border border-gray-600 rounded-md bg-gamesNeutral text-white focus:outline-none focus:ring-2 focus:ring-gamesPrimary"
                                    placeholder="Enter your Password"
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full bg-gamesPrimary text-white py-6 rounded-md hover:bg-gamesSecondaryDark transition-colors">
                                Sign In
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignIn;