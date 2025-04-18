import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* Login shown first */}

      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
