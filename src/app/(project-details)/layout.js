import Navbar from "@/components/Navbar";

const DetailsLayout = ({ children }) => {
    return (
        <>

            <Navbar></Navbar>
            <main>
                {children}
            </main>


        </>
    );
};

export default DetailsLayout;