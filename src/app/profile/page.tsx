"use client";
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Profile = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [activity, setActivity] = useState({ loginsThisWeek: 3, lastUpdate: new Date().toLocaleDateString() });

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/sign-in"); // Redirect if not logged in
        }
    }, [status, router]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 via-white to-gray-100 px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                    <Image
                        src={session?.user?.image ?? '/default-avatar.png'}
                        alt="User Avatar"
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-blue-500 shadow-lg"
                    />
                </div>

                {/* User Name */}
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome, {session?.user?.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{session?.user?.email}</p>

                {/* Additional Info Section */}
                <div className="bg-blue-50 rounded-lg p-4 mb-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">Your Account Details</h3>
                    <p className="text-sm text-gray-700">Username: <span className="font-medium">{session?.user?.name}</span></p>
                    <p className="text-sm text-gray-700">Joined on: <span className="font-medium">{new Date().toLocaleDateString()}</span></p>
                    <p className="text-sm text-gray-700">Last login: <span className="font-medium">{new Date().toLocaleString()}</span></p>
                    <p className="text-sm text-gray-700">Membership: <span className="font-medium">Standard User</span></p>
                </div>

                {/* Activity Details Section */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Recent Activity</h3>
                    <p className="text-sm text-gray-700">- Logged in {activity.loginsThisWeek} times this week</p>
                    <p className="text-sm text-gray-700">- Last update to profile: <span className="font-medium">{activity.lastUpdate}</span></p>
                </div>

                {/* Support Section */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Support & Feedback</h3>
                    <p className="text-sm text-gray-700">Need help? <a href="https://wa.me/+923130221118" className="text-blue-500 hover:underline">Contact via WhatsApp</a></p>
                    <p className="text-sm text-gray-700">Have suggestions? <a href="mailto:hafizahmedraza12345@gmail.com" className="text-blue-500 hover:underline">Send an Email</a></p>
                </div>


                {/* Sign Out Button */}
                <button
                    onClick={() => signOut({ callbackUrl: '/sign-in' })}
                    className="mt-4 bg-red-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-600 transition duration-200 shadow-lg"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Profile;
