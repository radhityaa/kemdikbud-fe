import React from 'react'
import App from '../../Layout/App'
import ContentHeader from '../../../components/ContentHeader'
import Image from '../../../assets/images/pendidikan-guru-penggerak.jpg'
import { Tab } from '@headlessui/react'
import TargetAreaTable from '../../../components/TargetAreaTable'
import DocumentationActivities from '../../../components/DocumentationActivities'


export default function ProgramTeacherMotivator() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const categories = ['Wilayah Sasaran', 'Dokumentasi Kegiatan']

    return (
        <App title={'Program Guru Penggerak'}>
            <ContentHeader text={'Program Guru Penggerak'} />

            <div className='space-y-36'>
                <div className="grid md:grid-cols-2 gap-28">
                    <div className='space-y-10'>
                        <h1 className='text-xl text-center md:text-start md:text-2xl font-serif text-blue-primary font-semibold uppercase'>Program Guru Penggerak</h1>
                        <p>Pendidikan Guru Penggerak adalah program untuk menyiapkan Guru Penggerak sebagai pemimpin Pendidikan masa depan. Guru tetap dapat menjalankan tugas mengajar selama mengikuti program ini. Hasil program ini adalah Guru Penggerak yang berperan sebagai pemimpin pembelajaran yang mendorong tumbuh kembang murid secara holistik dan proaktif mengembangkan pendidik lainnya untuk mengimplementasikan pembelajaran yang berorientasi pada peserta didik serta menjadi teladan dan agen transformasi ekosistem Pendidikan untuk mewujudkan Profil Pelajar Pancasila.</p>
                    </div>
                    <div>
                        <img src={Image} className='w-[445px] h-[290px]' />
                    </div>
                </div>

                <div>
                    <Tab.Group>
                        <Tab.List className={'md:space-x-24 border-b-2 my-5'}>
                            {categories.map((item, index) => (
                                <Tab key={index} className={({ selected }) =>
                                    classNames(
                                        'py-2 px-7',
                                        selected
                                            ? 'border-b-2 border-blue-dark'
                                            : null
                                    )
                                }>
                                    {item}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <TargetAreaTable />
                            </Tab.Panel>
                            <Tab.Panel>
                                <DocumentationActivities />
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>

            </div>
        </App>
    )
}
