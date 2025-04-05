import HeroSection from "@/components/Ui/HomePage/HeroSection";
import HowItWorks from "@/components/Ui/HomePage/HowItWorks";
import Specialist from "@/components/Ui/HomePage/Specialist";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Specialist />
      <HowItWorks />
    </div>
  );
};

export default page;
