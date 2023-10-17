import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';



export default function Footers() {

    return (
        <div className='bg-textClr'>
            <Footer className='bg-textClr text-white'>
                <div className="w-full ">
                    <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 max-w-7xl mx-auto">

                        <div>
                            <div>
                                <h2 className='text-3xl text-secondary font-bold'> BanAir</h2>
                                <p>Explore The world With Us with cast amount of options</p>
                            </div>
                        </div>

                        <div>
                            <Footer.Title title="Company" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="/about-us">
                                    About Us
                                </Footer.Link>
                                <Footer.Link href="/where-we-fly">
                                    OUR PACKAGES
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Brand Center
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                        <div>
                            <Footer.Title title="help center" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="/help">
                                    Help
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Twitter
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Facebook
                                </Footer.Link>
                                <Footer.Link href="/help">
                                    Contact Us
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="/Privacy-Policy">
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#">
                                    Licensing
                                </Footer.Link>
                                <Footer.Link href="/Terms&Conditions">
                                    Terms & Conditions
                                </Footer.Link>
                                <Footer.Link href="/cancel-policy">
                                    Cancellation Policy
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                    </div>


                    <div className="w-full bg-gray-900 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            by="BDAIR"
                            href="/"
                            year={2023}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                                href="#"
                                icon={BsFacebook}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsInstagram}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsTwitter}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsGithub}
                            />

                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    )
}




