import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Element } from 'react-scroll';
const Footer = () => {
    return (
        <Element name='footer'>
            <footer className="footer-section bg-black">
                <div className="container mx-auto">
                    <div className="footer-cta py-5 border-b border-grey-800">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="single-cta flex items-center">
                                <i class="fa fa-map-marker text-blue-500 text-3xl" aria-hidden="true"></i>
                                <div className="cta-text pl-4">
                                    <h4 className="text-white text-xl font-semibold mb-1">Find us</h4>
                                    <span className="text-gray-400 text-sm">SVVV, Indore </span>
                                </div>
                            </div>
                            {/* <div className="single-cta flex items-center">
                                <i className="fa fa-phone text-blue-500 text-3xl"></i>
                                <div className="cta-text pl-4">
                                    <h4 className="text-white text-xl font-semibold mb-1">Call us</h4>
                                    <span className="text-gray-400 text-sm">9876543210</span>
                                </div>
                            </div> */}
                            <div className="single-cta flex items-center">
                                <i className="fa fa-envelope-open text-blue-500 text-3xl"></i>
                                <div className="cta-text pl-4">
                                    <h4 className="text-white text-xl font-semibold mb-1">Mail us</h4>
                                    <span className="text-gray-400 text-sm">csi@svvv.edu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content  py-5">
                        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
                            <div className="footer-widget flex flex-col ">
                                <div className="footer-logo mb-8">
                                    <Link to="home">
                                        <img src="https://scontent.fbho1-2.fna.fbcdn.net/v/t39.30808-6/306752468_3352183928438717_2219624463445094667_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=QJD7ET5mRtYQ7kNvgEtLzeU&_nc_ht=scontent.fbho1-2.fna&oh=00_AYDwbwIXdsucXvt6laYhF7IcydsLSulS2WbEh17SXM3Ong&oe=66BD5F01" className="max-w-xs" alt="logo"></img>
                                    </Link>
                                </div>
                                {/* <div className="footer-text text-gray-400 text-sm mb-6">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                                </div> */}
                                <div className="footer-social-icon">
                                    <span className="text-white text-xl font-bold">Follow us</span>
                                    <div className="mt-4 flex  space-x-4">
                                        <RouterLink target="_blank" to="https://www.facebook.com/" className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white rounded-full">
                                            <i className="fa fa-facebook-f"></i>
                                        </RouterLink>
                                        <RouterLink target="_blank" to="https://www.twitter.com/" className="w-10 h-10 flex items-center justify-center bg-blue-400 text-white rounded-full">
                                            <i className="fa fa-twitter"></i>
                                        </RouterLink>
                                        <RouterLink target="_blank" to="https://www.google.com/" className="w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full">
                                            <i className="fa fa-google-plus"></i>
                                        </RouterLink>
                                        <RouterLink target="_blank" to="https://www.google.com/" className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full">
                                            <i className="fa fa-linkedin"></i>
                                        </RouterLink>
                                        <RouterLink target="_blank" to="https://www.google.com/" className="w-10 h-10 flex items-center justify-center bg-red-600 text-white rounded-full">
                                            <i className="fa fa-instagram"></i>
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="footer-widget">Ffind
                                <div className="footer-widget-heading mb-10">
                                    <h3 className="text-white text-xl font-semibold">Useful Links</h3>
                                    <div className="w-12 h-1 bg-blue-500 mt-2"></div>
                                </div>
                                <ul className="text-gray-400 text-sm space-y-3">
                                    <li><a href="#" className="hover:text-blue-500">Home</a></li>
                                    <li><a href="#" className="hover:text-blue-500">About</a></li>

                                    <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                                    <li><a href="#" className="hover:text-blue-500">About us</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Our Services</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Expert Team</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Contact us</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Latest News</a></li>
                                </ul>
                            </div> */}
                            <div className="footer-widget border p-4 rounded-md">
                                <div className="footer-widget-heading mb-10">
                                    <h3 className="text-white text-xl font-semibold">Contact Us</h3>
                                    <div className="w-12 h-1 bg-blue-500 mt-2"></div>
                                </div>
                                <div className="footer-text text-gray-400 text-sm mb-6">
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className="subscribe-form relative">
                                    <div className="relative">
                                        <div className='pb-5'> <input type="text" placeholder="Email Address" className="w-full py-3 px-5 bg-gray-800 border border-gray-800 text-white text-sm focus:outline-none "></input></div>
                                        <div className='pb-5'><textarea type="text" placeholder='Enter Query' className="w-full py-3 px-5 bg-gray-800 border border-gray-800 text-white text-sm focus:outline-none"></textarea></div>
                                        <div>
                                            <button className=" bg-blue-500 py-3 px-5 text-white text-xl">
                                                <i class="fa fa-telegram transform rotate-[-6deg]" aria-hidden="true"></i>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area bg-transparent py-4">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            <div className="text-center lg:text-left text-gray-500 text-sm">
                                {/* <p>Copyright &copy; 2018, All Right Reserved <span className="text-blue-500 hover:underline">harshit</span></p> */}
                            </div>
                            {/* <div className="footer-menu mt-4 lg:mt-0">
                                <ul className="flex space-x-4 text-gray-500 text-sm">
                                    <li><a href="#" className="hover:text-blue-500">Home</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Terms</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Privacy</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Policy</a></li>
                                    <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </Element>

    )
}

export default Footer
