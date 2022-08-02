import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProfilePage = () => {
	const auth = getAuth();
	const [changeDetails, setChangeDetails] = useState(false);
	const [formData, setFormData] = useState({
		name: auth.currentUser.displayName,
		email: auth.currentUser.email,
	})
	const { name, email } = formData;
	const navigate = useNavigate();
	const handleLogout = () => {
		auth.signOut();
		navigate("/");
	}
	const handleSubmit = async (e) => {
		try {
			if (auth.currentUser.displayName !== name) {
				await updateProfile(auth.currentUser, {
					displayName: name
				})
				const userRef = doc(db, "users", auth.currentUser.uid);
				await updateDoc(userRef, { name })
			}
		} catch (error) {
			toast.error("Couldn't update profile");
		}
	}
	const handleChange = (e) => {
		setFormData(prevState => ({
			...prevState,
			[e.target.id]: e.target.value
		}))
	}
	return (
		<section className="profile">
			<div className="profile-header">
				<h2 className="page__header">My Profile</h2>
				<button type="button" className="log-out-btn" onClick={handleLogout}>
					Log out
				</button>
			</div>
			<main>
				<div className="profile-details-header">
					<p className="profile-details-text">Personal Details</p>
					<p className="change-personal-details" onClick={() => {
						changeDetails && handleSubmit()
						setChangeDetails(prevState => !prevState)
					}}>
						{changeDetails ? "done" : "change"}
					</p>
				</div>
				<div className="profile-card">
					<form>
						<input type="text" id="name" className={!changeDetails ? "profile__name" : "profile__name--active"} disabled={!changeDetails} value={name} onChange={handleChange} />
						<input type="text" id="email" className={!changeDetails ? "profile__email" : "profile__email--active"} disabled={!changeDetails} value={email} onChange={handleChange} />
					</form>
				</div>
			</main>
		</section>
	)
};

export default ProfilePage;