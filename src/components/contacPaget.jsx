"use client"
import React from "react"

export default function Contact(){
    return(
    <div className="backdrop-blur-md bg-white/30 ... rounded-md">
        <h1 className="text-4xl  mt-16 font-light  py-2 text-center text-zinc-900 z-1">Contact Us</h1>
        <p className="mt-4 text-zinc-700 text-center font-semibold text-1xl max-w-3xl mx-auto">We are here to help you. Reach out to us via any of the following methods.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3  md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
        <div className="p-4 shadow-xl rounded-lg[#f9fb71] hover:bg-green-300 transition-colors">
            <h3 className="text-xl text-zinc-800 font-bold">Name</h3>
            <p className="text-gray-700 mt-2">HustlerMahesh</p>
          </div>
          <div className="p-4 shadow-xl rounded-lg[#f9fb71] hover:bg-green-300 transition-colors">
            <h3 className="text-xl text-zinc-800 font-bold">Call Us</h3>
            <p className="text-gray-700 mt-2">+1 123 456 7890</p>
          </div>
          <div className="p-4 shadow-xl rounded-lg[#f9fb71] hover:bg-green-300 transition-colors">
            <h3 className="text-xl text-zinc-800 font-bold">Email Us</h3>
            <p className="text-gray-700 mt-2">sumanmahesh2808@gmail.com</p>
          </div>
          <div className="p-4 shadow-xl rounded-lg[#f9fb71] hover:bg-green-300 transition-colors">
            <h3 className="text-xl text-zinc-800 font-bold">Visit Us</h3>
            <p className="text-gray-700 mt-2">Near Sahkari Samiti Suket ,Kota</p>
          </div>
        </div>
    </div>
)
}
