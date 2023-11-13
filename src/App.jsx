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
const Office = lazy(() => import('./pages/Profile/Office'))

// NOTE - Publication
const Berita = lazy(() => import('./pages/Berita'))
const Announcement = lazy(() => import('./pages/Announcement'))
const Journal = lazy(() => import('./pages/Journal'))

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
          <Route path="office" element={<Office />} />
        </Route>
        {/* NOTE - Publication */}
        <Route path="berita" element={<Berita />} />
        <Route path="pengumuman" element={<Announcement />} />
        <Route path="jurnal" element={<Journal />} />

      </Routes>
    </Suspense>
  )
}
