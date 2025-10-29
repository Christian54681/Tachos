import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Categories from "@/components/Categories";
import SellDonate from "@/components/SellDonate";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <NewArrivals />
        <Categories />
        <SellDonate />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
