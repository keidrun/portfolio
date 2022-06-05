// @flow
import React from 'react'
import { Link } from 'gatsby'

function NotFoundPage() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 flex-column bg-black bg-gradient">
      <h1 className="text-white">Page Not Found</h1>
      <p className="text-white">
        Go back to{' '}
        <Link to="/" className="text-white-50">
          Home
        </Link>
      </p>
    </div>
  )
}

export default NotFoundPage
