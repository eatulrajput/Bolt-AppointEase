import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Welcome to AppointEase
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        The simple way to book and manage your medical appointments
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/register"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Get Started
        </Link>
        <Link
          to="/login"
          className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}