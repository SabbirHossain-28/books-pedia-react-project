import Banner from "../Banner/Banner";
import BooksCard from "../BooksCardContainer/BooksCard";

const Home = () => {
  return (
    <div>
      <div className="mt-12 mb-24">
        <Banner></Banner>
      </div>
      <div>
        <BooksCard></BooksCard>
      </div>
    </div>
  );
};

export default Home;
