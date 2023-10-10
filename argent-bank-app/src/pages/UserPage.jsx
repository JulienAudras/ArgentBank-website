import Header from "../components/Header"
import Footer from "../components/Footer"
import User from "../components/User"

const UserPage = () => {
  return (
    <div className="userPageContainer">
    <Header />
      <div>
        <User />
      </div>
    <Footer />
    </div>
  )
}

export default UserPage