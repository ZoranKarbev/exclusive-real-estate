import { useEffect, useState } from "react"
import { getAuth } from "firebase/auth"
const ProfilePage = () => {
	const [user, setUser] = useState(null)
	const auth = getAuth();
	useEffect(() => {
		setUser(auth.currentUser);
	}, [])

	return (
		user ? <h1>USER: {user.displayName}</h1> : <h1>Please Log in!</h1>
	)
};

export default ProfilePage;