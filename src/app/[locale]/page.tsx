import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import BoatSection from '@/components/BoatSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import InfoSection from '@/components/InfoSection';
import RouteSection from '@/components/RouteSection';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import FAQSection from '@/components/FAQSection';
import TopicLinks from '@/components/TopicLinks';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <BoatSection />
        <TicketsSection />
        <TransportSection />
        <InfoSection />
        <RouteSection />
        <PhotoSpotsSection />
        <Gallery />
        <Reviews />
        <DisclaimerBanner />
        <FAQSection />
        <TopicLinks />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
