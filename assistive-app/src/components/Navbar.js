import React from 'react';

export default function Navbar() {
    return (
        <section>
            <nav className="bg-amber-50 border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 px-3 text-green bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-green md:dark:text-green-500">Home</a>
                            </li>
                            <li>
                                <a href="/game" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-green md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green md:dark:hover:bg-transparent">Game</a>
                            </li>
                            <li>
                                <a href="/leaderboard" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-green md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-green md:dark:hover:bg-transparent">Leaderboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    )
}