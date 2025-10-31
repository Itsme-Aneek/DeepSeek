import { Inter } from "next/font/google";
import "./globals.css";
import "./prism.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import PrismHighlighter from "@/components/PrismHighlighter"; // 👈 Client-side Prism loader

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata = {
	title: "NeuroSeek",
	description: "AI-Powered Technology Platform – Full Stack Project",
};

export default function RootLayout({ children }) {
  return (
		<ClerkProvider>
			<AppContextProvider>
				<html lang="en">
					<body
						className={`${inter.className} antialiased bg-[#0a0a0a] text-white`}
					>
						{/* Client-side PrismJS */}
						<PrismHighlighter />

						{/* Toast Notifications */}
						<Toaster
							toastOptions={{
								success: {
									style: {
										background: "black",
										color: "white",
									},
								},
								error: {
									style: {
										background: "black",
										color: "white",
									},
								},
							}}
						/>

						{/* Page Content */}
						{children}
					</body>
				</html>
			</AppContextProvider>
		</ClerkProvider>
  );
}
