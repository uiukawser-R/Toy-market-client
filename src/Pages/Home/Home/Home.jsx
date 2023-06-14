import ShopByCategory from "../ShopByCategory";

const Home = () => {
    return (
        <div className="mt-10">
            <section>
                {
                    <ShopByCategory></ShopByCategory>
                }
            </section>
        </div>
    );
};

export default Home;