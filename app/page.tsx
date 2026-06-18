import Hero from '@/components/Hero'
import Tension from '@/components/Tension'
import SwishTruth from '@/components/SwishTruth'
import WhyTenMinutes from '@/components/WhyTenMinutes'
import HeroCampaign from '@/components/HeroCampaign'
import Positioning from '@/components/Positioning'
import BrandPillars from '@/components/BrandPillars'
import Closing from '@/components/Closing'
import DownloadPDF from '@/components/DownloadPDF'

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Tension />
        <SwishTruth />
        <WhyTenMinutes />
        <HeroCampaign />
        <Positioning />
        <BrandPillars />
        <Closing />
      </main>
      <DownloadPDF />
    </>
  )
}
