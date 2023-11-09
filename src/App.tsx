import { Route, Routes } from 'react-router-dom'

import './App.css'
import { PageLayout } from './components/page-layout'
import { MainPage } from './features/main-page'
import { TablePage } from './features/table-page'

export const App = () => {
    return (
        <PageLayout>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/table" element={<TablePage />} />
                <Route path="/settings" element={<div>{'Settings Page'}</div>} />
            </Routes>
        </PageLayout>
    )
}
