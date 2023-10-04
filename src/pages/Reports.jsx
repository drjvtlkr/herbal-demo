import React from 'react'
import Charts from '../Components/Chart/Charts'
import { Link } from 'react-router-dom'
import BarChart from '../Components/Chart/BarChart'

const Reports = () => {
  return (
    <div>
      <h2>Reports</h2>
      <div>
        <Link to="/reports/charts">Go to Charts</Link>
      </div>
      <div>
        <Link to="/reports/barchart">Go to BarChart</Link>
      </div>
    </div>
  )
}

export default Reports
