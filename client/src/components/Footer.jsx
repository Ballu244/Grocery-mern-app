import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-slate-100 flex flex-col items-center justify-around w-full py-16 text-sm text-gray-800/70  ">
                <div className="flex items-center gap-8">
                    <a href="#" className="font-medium text-gray-500 hover:text-black transition-all">
                        Home
                    </a>
                    <a href="#" className="font-medium text-gray-500 hover:text-black transition-all">
                        About
                    </a>
                    <a href="#" className="font-medium text-gray-500 hover:text-black transition-all">
                        Products
                    </a>

                </div>
                <div className="flex items-center gap-4 mt-8 text-indigo-500">
                    <a href="https:/facebook.com" className="hover:-translate-y-0.5 transition-all duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="https:/instagram.com" className="hover:-translate-y-0.5 transition-all duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="https:/linkedin.com" className="hover:-translate-y-0.5 transition-all duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
                <p className="mt-8 text-center">Copyright © 2025 GroceryApp. All rights reservered.</p>

            </footer></div>
    )
}

export default Footer