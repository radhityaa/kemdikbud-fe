import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"

// SECTION - Lazy Load Router
// NOTE - Homepage
const Home = lazy(() => import('./pages/Home'))

// NOTE - Profile
const VisionMission = lazy(() => import('./pages/Profile/VisionMission'))
const JobFunction = lazy(() => import('./pages/Profile/JobFunction'))
const History = lazy(() => import('./pages/Profile/History'))

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>

      {/* NOTE - Router */}
      <Routes>

        {/* NOTE - Not Found */}
        <Route path="*" element={<div>Not Found !</div>} />

        {/* SECTION - Homepage */}
        <Route index path="/" element={<Home />} />

        {/* SECTION - Profile */}
        {/* NOTE - Vision And Mission */}
        <Route path="/profile">
          <Route path="visionmission" element={<VisionMission />} />
          <Route path="jobfunction" element={<JobFunction />} />
          <Route path="history" element={<History />} />
        </Route>

      </Routes>
    </Suspense>
  )
}
