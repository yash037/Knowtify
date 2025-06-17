import { Box, Container } from "@chakra-ui/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import CreatePost from "./components/CreatePost";
import ChatPage from "./pages/ChatPage";
import { SettingsPage } from "./pages/SettingsPage";
import AiButton from "./components/AiButton";

function App() {
	const user = useRecoilValue(userAtom);
	const { pathname } = useLocation();

	// Check if route is a user profile (/:username)
	const isUserProfile = /^\/[^\/]+$/.test(pathname) &&
	!["/chat", "/auth", "/settings", "/update"].includes(pathname);


	return (
		<Box position={"relative"} w='full' minH="100vh">
			<Container maxW={pathname === "/" ? { base: "620px", md: "900px" } : "620px"}>
				<Header />
				<Routes>
					<Route path='/' element={user ? <HomePage /> : <Navigate to='/auth' />} />
					<Route path='/auth' element={!user ? <AuthPage /> : <Navigate to='/' />} />
					<Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to='/auth' />} />
					<Route
						path='/:username'
						element={
							user ? (
								<>
									<UserPage />
									<CreatePost />
								</>
							) : (
								<UserPage />
							)
						}
					/>
					<Route path='/:username/post/:pid' element={<PostPage />} />
					<Route path='/chat' element={user ? <ChatPage /> : <Navigate to={"/auth"} />} />
					<Route path='/settings' element={user ? <SettingsPage /> : <Navigate to={"/auth"} />} />
				</Routes>
			</Container>

			{/* AI Button: sticky on all pages */}
			<Box
				position="fixed"
				bottom={isUserProfile ? "100px" : "40px"} // push up if CreatePost is there
				right="30px"
				zIndex="1000"
			>
				<AiButton />
			</Box>
		</Box>
	);
}

export default App;
