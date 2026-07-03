import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import AuthorSection from "@/components/AuthorSection"
import ProblemSection from "@/components/ProblemSection"
import ProgramSection from "@/components/ProgramSection"
import ResultsSection from "@/components/ResultsSection"
import BuySection from "@/components/BuySection"

const Index = () => {
  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      <AuthorSection />
      <ProblemSection />
      <ProgramSection />
      <ResultsSection />
      <BuySection />
    </>
  )
}

export default Index