import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import { Layout } from './components/layout/Layout'
import { InfoPage } from './pages/InfoPage/InfoPage'
import { SortingPage } from './pages/SortingPage/SortingPage'
import { WorkerTask } from './pages/WorkerTask/WorkerTask'
import { NoPage } from './pages/NoPage/NoPage'
import { Contact } from './pages/Contact/Contact'



export default function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<InfoPage />} />
          <Route path="sort" element={<SortingPage />} />
          <Route path="worker_task" element={<WorkerTask />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  )
}
