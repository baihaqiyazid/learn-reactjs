import Navbar from "../components/Layouts/Navbar";
import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin();
    return (
        <div>
            <Navbar />
            <h1>Profile</h1>
            <h2>{username}</h2>
        </div>
    )

}

export default ProfilePage