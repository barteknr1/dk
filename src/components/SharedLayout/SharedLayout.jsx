import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import css from './SharedLayout.module.css'
import Navigation from '../Navigation/Navigation'

const SharedLayout = () => {
  return (
    <div className={css.layout}>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  )
};

export default SharedLayout