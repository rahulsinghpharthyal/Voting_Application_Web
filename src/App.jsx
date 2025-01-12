import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./RequireAuth/RequireAuth";

import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminLayout from "./admin/pages/AdminLayout";
import AddCandidateForm from "./admin/pages/AddCandidateForm";
import VotersTable from "./admin/pages/VotersTable";
import CandidatesTable from "./admin/pages/CandidateTable";
import VoterLayout from "./pages/VoterLayout";
import Candidates from "./pages/Candidates";
import VoterProfile from "./pages/VoterProfile";
import MainHome from "./pages/MainHome";
import RegistrationCard from "./components/RegistrationCard";
import ElectionManagementPage from "./pages/ElectionManagementPage";
import MediaAndPublication from "./pages/MediaAndPublication";
import VoterEducationPage from "./pages/VoterEducationPage";
import CandidateViewToUser from "./pages/CandidateViewToUser";
import RegisterForVote from "./pages/RegisterForVote";
import SignupAndLogin from "./common/pages/SignupAndLogin";
import ViewCandidateResult from "./pages/ViewCandidatesResult";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignupAndLogin />} />
        <Route path="/signup" element={<SignupAndLogin />} />
        <Route element={<RequireAuth allowedRole={["admin", "voter"]} />}>
          <Route element={<VoterLayout />}>
            <Route path="/" element={<MainHome />} />
            <Route path="candidates-list" element={<Candidates />} />
            <Route path="register" element={<RegistrationCard />} />
            <Route
              path="election-managment"
              element={<ElectionManagementPage />}
            />
            <Route path="voter-education" element={<VoterEducationPage />} />
            <Route path="media&publication" element={<MediaAndPublication />} />
            <Route path="register-form" element={<RegisterForVote />} />
            <Route path="profile" element={<VoterProfile />} />
            <Route path="candidate-result" element={<ViewCandidateResult />} />
            <Route path="vote" element={<CandidateViewToUser />} />
          </Route>
        </Route>

        {/* Protected Route */}
        <Route element={<RequireAuth allowedRole={["admin"]} />}>
          <Route element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="add-candidate" element={<AddCandidateForm />} />
            <Route path="voters-list" element={<VotersTable />} />
            <Route path="candidate-list" element={<CandidatesTable />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
