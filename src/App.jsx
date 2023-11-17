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
const DetailBerita = lazy(() => import('./pages/Berita/DetailBerita'))
const Announcement = lazy(() => import('./pages/Announcement'))
const Journal = lazy(() => import('./pages/Journal'))
const Gallery = lazy(() => import('./pages/Gallery'))
const HistoryBgp = lazy(() => import('./pages/HistoryBgp'))

// NOTE - Services
const ProgramTeacherMotivator = lazy(() => import('./pages/Services/ProgramTeacherMotivator'))
const DrivingSchoolProgram = lazy(() => import('./pages/Services/DrivingSchoolProgram'))
const IndependentCurriculum = lazy(() => import('./pages/Services/IndependentCurriculum'))
const Partnership = lazy(() => import('./pages/Services/Partnership'))
const InternshipProgramme = lazy(() => import('./pages/Services/InternshipProgramme'))
const KPPD = lazy(() => import('./pages/Services/KPPD'))

// NOTE - PPID
const PpidBeranda = lazy(() => import('./pages/PPID/Beranda'))
const PpidProfile = lazy(() => import('./pages/PPID/Profile'))
const PpidProfileShort = lazy(() => import('./pages/PPID/ShortProfile'))
const PpidOrganizationalStructure = lazy(() => import('./pages/PPID/OrganizationalStructure'))
const PpidJobFunction = lazy(() => import('./pages/PPID/JobFunction'))
const PpidVisiMission = lazy(() => import('./pages/PPID/VisiMission'))
const PpidContactMe = lazy(() => import('./pages/PPID/ContactMe'))

// NOTE - PPID Regulations
const Regulasi = lazy(() => import('./pages/PPID/Regulations'))
const PenangananSengketaInformasiPublik = lazy(() => import('./pages/PPID/Regulations/PenangananSengketaInformasiPublik'))
const PendokumentasianInformasiPublik = lazy(() => import('./pages/PPID/Regulations/PendokumentasianInformasiPublik'))
const PendokumentasianInformasiYangDiKecualikan = lazy(() => import('./pages/PPID/Regulations/PendokumentasianInformasiYangDiKecualikan'))
const PenetapanDanPemutakahiranDaftarInformasiPublik = lazy(() => import('./pages/PPID/Regulations/PenetapanDanPemutakahiranDaftarInformasiPublik'))
const PengelolaanKeberatanAtasInformasi = lazy(() => import('./pages/PPID/Regulations/PengelolaanKeberatanAtasInformasi'))
const PengelolaanPermohonanInformasi = lazy(() => import('./pages/PPID/Regulations/PengelolaanPermohonanInformasi'))
const PengujianKonsekuensi = lazy(() => import('./pages/PPID/Regulations/PengujianKonsekuensi'))

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>

      {/* NOTE - Router */}
      <Routes>

        {/* NOTE - Not Found */}
        <Route path="*" element={<div>Not Found !</div>} />

        {/* NOTE - Homepage */}
        <Route index path="/" element={<Home />} />

        {/* NOTE - Profile */}
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
        <Route path="berita/:id" element={<DetailBerita />} />
        <Route path="pengumuman" element={<Announcement />} />
        <Route path="jurnal" element={<Journal />} />
        <Route path="galeri" element={<Gallery />} />
        <Route path="sejarah" element={<HistoryBgp />} />

        {/* NOTE - Services */}
        <Route path="program-guru-penggerak" element={<ProgramTeacherMotivator />} />
        <Route path="program-sekolah-penggerak" element={<DrivingSchoolProgram />} />
        <Route path="implementasi-kurikulum-merdeka" element={<IndependentCurriculum />} />
        <Route path="kemitraan" element={<Partnership />} />
        <Route path="internship-programme-for-student-with-disability" element={<InternshipProgramme />} />
        <Route path="kppd" element={<KPPD />} />

        {/* NOTE - PPID */}
        <Route path="/ppid">
          <Route path="beranda" element={<PpidBeranda />} />
          <Route path="profile" element={<PpidProfile />} />
          <Route path="profile-singkat" element={<PpidProfileShort />} />
          <Route path="profile-struktur-organisasi" element={<PpidOrganizationalStructure />} />
          <Route path="tugas-dan-fungsi" element={<PpidJobFunction />} />
          <Route path="visi-dan-misi" element={<PpidVisiMission />} />
          <Route path="kontak-kami" element={<PpidContactMe />} />
          {/* Regulations */}
          <Route path="regulasi">
            <Route path="" element={<Regulasi />} />
            <Route path="penanganan-sengketa-informasi-publik" element={<PenangananSengketaInformasiPublik />} />
            <Route path="pendokumentasian-informasi-publik" element={<PendokumentasianInformasiPublik />} />
            <Route path="pendokumentasian-informasi-yang-di-kecualikan" element={<PendokumentasianInformasiYangDiKecualikan />} />
            <Route path="penetapan-dan-pemutakahiran-daftar-informasi-publik" element={<PenetapanDanPemutakahiranDaftarInformasiPublik />} />
            <Route path="pengelolaan-keberatan-atas-informasi" element={<PengelolaanKeberatanAtasInformasi />} />
            <Route path="pengelolaan-permohonan-informasi" element={<PengelolaanPermohonanInformasi />} />
            <Route path="pengujian-konsekuensi" element={<PengujianKonsekuensi />} />
          </Route>
        </Route>

      </Routes>
    </Suspense>
  )
}
