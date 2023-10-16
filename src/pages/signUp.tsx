import Register from "@/components/UI/Login/Register";
import Header from "@/components/layouts/Header";
import RootLayout from "@/components/layouts/RootLayout";


export default function SignUp() {
    return (
        <>
            <div className="bg-lightBg flex  items-center justify-center h-[100vh]">
                <Register />
            </div>
        </>

    )
}


SignUp.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};