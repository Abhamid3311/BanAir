import Register from "@/components/UI/Login/Register";
import Header from "@/components/layouts/Header";


export default function SignUp() {
    return (
        <>
            <Header />
            <div className="bg-lightBg flex  items-center justify-center h-[100vh]">
                <Register />
            </div>
        </>

    )
}
