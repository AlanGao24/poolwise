import HeroSection from '@/component/HeroSection';
import Image from 'next/image';
// import BottomSection from '@/component/BottomSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className='w-full h-screen bg-amber-50 flex items-center justify-center'>
          <div className='max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-32 items-center'>
            <div className='space-y-6'>
              <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
              <p className='text-gray-700 text-lg leading-relaxed'>
                Poolwise Living is a proudly Western Australian owned and operated family business with over 40 years of experience. We’re committed to providing genuine, honest, and obligation-free advice, along with exceptional customer service.</p>
              <p className='text-gray-700 text-lg leading-relaxed'>
                Our dedicated Service Division, led by Jodie, ensures smooth day-to-day operations. Our experienced technicians service the entire Perth metro area and beyond, all year round. We understand that pool systems and equipment can be complex, so we take the time to clearly explain how everything works and why proper maintenance and chemicals are essential. </p>
              <p className='text-gray-700 text-lg leading-relaxed'>
                We are proud members of SPASA (Swimming Pool & Spa Association) and our technicians are trained through SPASA, the Royal Life Saving Society, and in-house programs delivered by leading suppliers and manufacturers.</p>
            </div>
            <div className='w-full h-full'>
              <Image 
                src="/AboutUs.webp"
                alt="Description of image"
                // layout="responsive"
                width={1800}
                height={1500}
                className="rounded-xl shadow-md object-cover"
              />
            </div>
          </div>

      </section>
    </main>
  );
}