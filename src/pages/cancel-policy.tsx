import PageBanner from '@/components/UI/PAges/PageBanner';
import RootLayout from '@/components/layouts/RootLayout';
import Link from 'next/link';

export default function Cancelpolicy() {
    return (
        <div className='bg-lightBg'>
            <PageBanner>
                <div className='text-center '>
                    <h1 className='text-5xl font-bold  '>Cancellation policy</h1>
                    <p className='text-semibold   mt-2'><Link href={"/"}>HOME</Link> / <span className='text-secondary'>Cancellation policy</span></p>
                </div>
            </PageBanner>

            <div className=' max-w-7xl mx-auto  px-3 lg:px-0 gap-5 py-10'>
                <div className='bg-white p-5 rounded-md mb-5'>
                    <h1 className='text-lg font-bold'>Agreement between you and Emirates</h1>

                    <p> Thank you for visiting emirates.com (the &ldquo;Website&ldquo;). Please read these terms and conditions carefully before you start to use the Website. By accessing and using this Website, you indicate that you accept (unconditionally and irrevocably) these terms and conditions. If you do not agree to these terms and conditions, please refrain from using our Website and exit immediately.</p>

                    <p>The Website is owned and operated by Emirates, whose principal office is at Emirates Group Headquarters Building, PO Box 686, Dubai, United Arab Emirates. Emirates is a Dubai corporation established by Decree No.2 of 1985 (as amended) of the Government of Dubai.</p>

                    <p> You represent and warrant you possess the legal right and ability to enter into this Agreement and to use this Website in accordance with all terms and conditions herein.
                    </p>
                    <p> You promise to us you are old enough to enter legally binding contracts through this Website and you know you will be responsible for all payments due to us for bookings made by you or another person using your login information.</p>

                    <p>Please also make sure that you have read and accept our Privacy Policy.</p>
                </div>

                <div className='bg-white p-5 rounded-md mb-5'>
                    <h1 className='text-lg font-bold'>Modification of terms</h1>
                    <p>We may change these terms and conditions at any time without advance notice. Changed terms will become effective once posted on the Website, and will not have any retrospective effect on existing contractual arrangements made through this Website. Your continued use of this Website after any change means you have accepted the changed terms and conditions.</p>
                </div>

                <div className='bg-white p-5 rounded-md mb-5'>
                    <h1 className='text-lg font-bold'>Entire agreement</h1>

                    <p>These terms and conditions and any other legal notices, policies and guidelines of Emirates linked to these terms and conditions constitute the entire agreement between you and Emirates relating to your use of this Website and supersede any prior understandings or agreements (whether oral or written), claims, representations, and understandings of the parties regarding such subject matter and the terms and conditions may not be amended or modified except by making such amendments or modifications available on this Website.</p>
                </div>

                <div className='bg-white p-5 rounded-md mb-5'>
                    <h1 className='text-lg font-bold'>  Disclaimer of warranties and limitation of liability</h1>

                    General
                    Your access to and use of software and other materials on, or through, this Website is solely at your own risk. We make no representation, warranty or covenant whatsoever about the reliability, stability or virus free nature of such software.

                    DISCLAIMER OF WARRANTY
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,WE DISCLAIM ALL REPRESENTATIONS, WARRANTIES AND COVENANTS RELATING TO THE INFORMATION, SOFTWARE, PRODUCTS AND SERVICES CONTAINED IN THIS WEBSITE. ALL SUCH INFORMATION, SOFTWARE, PRODUCTS AND SERVICES ARE PROVIDED as WITHOUT REPRESENTATION, WARRANTY OR COVENANT OF ANY KIND, INCLUDING ALL IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON‑INFRINGEMENT.

                    LIMITATION OF LIABILITY
                    IN NO EVENT WILL WE BE LIABLE FOR ANY DIRECT, SPECIAL, INDIRECT, INCIDENTAL, CONSEQUENTIAL (INCLUDING AMONG OTHER THINGS LOSS OF REVENUE OR PROFITS), PUNITIVE, OR EXEMPLARY, DAMAGES OF ANY KIND OR SUBJECT TO EQUITABLE OR INJUNCTIVE REMEDIES (WHETHER BASED ON BREACH OF CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE) ARISING OUT OF

                    ACCESS TO, OR USE OF THIS WEBSITE, OR DELAY OR INABILITY TO USE THIS WEBSITE, OR ANY INFORMATION CONTAINED IN THIS WEBSITE; OR,
                    THE AVAILABILITY AND UTILITY OF PRODUCTS AND SERVICES (EXCEPT CARRIAGE BY AIR PERFORMED BY US).

                    NOTHING IN THIS LIMITATION OF LIABILITY SHALL EXCLUDE LIABILITIES NOT PERMITTED TO BE EXCLUDED BY APPLICABLE LAW.

                    ANY CARRIAGE BY AIR USING A TICKET OBTAINED USING THIS WEBSITE SHALL BE SUBJECT TO THE CONDITIONS OF CARRIAGE OF THE RELEVANT CARRIER AND MAY ALSO BE SUBJECT TO THE WARSAW CONVENTION OR THE MONTREAL CONVENTION, WHICH MAY LIMIT THE  LIABILITY IN CERTAIN CIRCUMSTANCES. YOU SHOULD REFER TO THE NOTE ON CONDITIONS OF CARRIAGE SET OUT BELOW.

                    ANY RIGHTS NOT EXPRESSLY GRANTED HEREIN ARE RESERVED BY US.
                </div>

            </div>
        </div>
    )
}


Cancelpolicy.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};