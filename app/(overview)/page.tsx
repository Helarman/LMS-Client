import Client from "../Client";
import getCoursesByCurrentUser from "../actions/getCoursesByCurrentUser";
import getCurrentUser from "../actions/getCurrentUser";
import Header from "../components/Header/Header";


const IndexPage = async () => {
  const currentUser = await getCurrentUser()
  const courses = await getCoursesByCurrentUser()

  return (
    <Header/>
  )
}


export default IndexPage;