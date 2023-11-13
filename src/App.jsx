import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"

// SECTION - Lazy Load Router
// NOTE - Homepage
const Home = lazy(() => import('./pages/Home'))

// NOTE - Profile
const VisionMission = lazy(() => import('./pages/Profile/VisionMission'))
const JobFunction = lazy(() => import('./pages/Profile/JobFunction'))
const History = lazy(() => import('./pages/Profile/History'))
const WorkTeam = lazy(() => import('./pages/Profile/WorkTeam'))
const PromiseProclamation = lazy(() => import('./pages/Profile/PromiseProclamation'))
const BehaviorGuide = lazy(() => import('./pages/Profile/BehaviorGuide'))

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
          <Route path="visi-misi" element={<VisionMission />} />
          <Route path="tugas-fungsi" element={<JobFunction />} />
          <Route path="sejarah" element={<History />} />
          <Route path="tim-kerja" element={<WorkTeam />} />
          <Route path="janji-maklumat" element={<PromiseProclamation />} />
          <Route path="panduan-perilaku-core-value" element={<BehaviorGuide />} />
        </Route>

      </Routes>
    </Suspense>
  )
}
