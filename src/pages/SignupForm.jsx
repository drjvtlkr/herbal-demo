import React, { useState } from 'react'

const SignupForm = (props) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/your-signup-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('Registration successful')
      } else {
        console.error('Registration failed')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-md py-6 px-12 w-[2*96] sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">SignUp Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="text-gray-700 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="block w-full mt-1 px-3 py-2.5 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 rounded-md focus:outline-none focus:ring-blue-600"
              placeholder=""
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full mt-1 px-3 py-2.5 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 rounded-md focus:outline-none focus:ring-blue-600"
              placeholder=""
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="text-gray-700 dark:text-gray-300"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="block w-full mt-1 px-3 py-2.5 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 rounded-md focus:outline-none focus:ring-blue-600"
              placeholder=""
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full mt-1 px-3 py-2.5 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 rounded-md focus:outline-none focus:ring-blue-600"
              placeholder=""
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="text-gray-700 dark:text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="block w-full mt-1 px-3 py-2.5 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 rounded-md focus:outline-none focus:ring-blue-600"
              placeholder=""
              required
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full text-gray-800 bg-primary-600 border border-gray-300 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-neutral-800 dark:text-neutral-200">
          Already have an account?{' '}
          <button
            onClick={() => props.onFormSwitch('login')}
            className="text-blue-600 hover:text-blue-700 focus:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500 dark:focus:text-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignupForm
