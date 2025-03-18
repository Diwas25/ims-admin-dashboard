import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import CourseMaster from "./pages/CourseMaster";
import SubjectMaster from "./pages/SubjectMaster";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
//import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import AddmissionForm from "./pages/AddmissionForm";
import ManageEnquiry from "./pages/ManageEnquiry";
import EnquiryForm from "./pages/EnquiryForm";
import ManageCourse from "./pages/ManageCourse";



export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
            <Route index path="/addmission-form" element={<AddmissionForm />} />
            
            {/* Others Page */}
            <Route path="/course-master" element={<CourseMaster />} />
            <Route path="/subject-master" element={<SubjectMaster />} />
            <Route path="/user-management" element={<Users />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/manage-enquiry" element={<ManageEnquiry/>}/>
            <Route path="/calendar" element={<Calendar />} />
            {/*<Route path="/blank" element={<Blank />} /> */}

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />
            <Route path="/enquiry-form" element={<EnquiryForm />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />
            <Route path="/manage-course" element={<ManageCourse />}/>
            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}