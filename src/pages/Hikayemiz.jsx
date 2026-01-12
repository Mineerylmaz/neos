// src/pages/Hikayemiz.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/** Ortak resim component'i
 *  - priority = true → hero, ilk ekranda görünenler (eager)
 *  - diğerleri → lazy
 */
const NeosImage = ({ src, alt, priority = false, className, ...rest }) => (
  <img
    src={src}
    alt={alt}
    loading={priority ? "eager" : "lazy"}
    decoding="async"
    className={className}
    style={{ display: "block" }}
    {...rest}
  />
);

const Hikayemiz = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <PageWrapper>
      <Navbar />

      {/* HERO */}
      <HeroSection>
        {/* Artık background-image değil, gerçek <img> */}
        <HeroImageLayer
          src="/images/hikayemiz.webp"
          alt="Hikayemiz görseli"
          priority
        />
        <HeroContent>
          <HeroKicker>Tarzı • Technical • Cozy • Fashion</HeroKicker>
          <HeroTitle>BİR ADIMIN HİKAYESİ</HeroTitle>
        </HeroContent>
      </HeroSection>

      {/* MANİFESTO */}
      <ManifestoSection>
        <ManifestoTitle>Manifesto</ManifestoTitle>
        <ManifestoLead>
          Teknik dayanıklılığı estetikle güzelleştirerek, kadınlar ve
          çocuklar için her adımda güven inşa ediyoruz.
        </ManifestoLead>
        <ManifestoBody>
          NEOS, sadece bir ayakkabı markası değil; konforun, şefkatin ve
          zarafetin kurulduğu sessiz bir atölyedir. Modern yaşamın ritmine,
          hem şıklık hem de özgürce hareket etme isteğiyle yanıt verir.
        </ManifestoBody>
      </ManifestoSection>

      {/* ZARAFET BLOĞU */}
      <StoryBlock>
        <StoryText>
          <StoryKicker>ÖZ HİKÂYE</StoryKicker>
          <StoryTitle>Zarafet ve Güvenin Buluşma Noktası</StoryTitle>
          <StoryBody>
            NEOS, modern zamanın dinamik yapısını kadınlar ve çocukların
            sınırsız hareket alanı ile buluşturur. Her bir detayda;
            dayanıklılık, sıcaklık ve zarafet aynı potada buluşur. Yumuşak
            dokular, uzun süreli konforu desteklerken, estetik çizgiler her
            adımda zarafeti yeniden tanımlar.
          </StoryBody>
          <StoryBody>
            Kullanılan her materyal, seçilen her form birer niyet taşır.
            NEOS kadınının ve çocuğunun güvende hissetmesini sağlayan her
            adım, konforu sadece bir hissiyat değil; somut bir deneyime
            dönüştürür.
          </StoryBody>
        </StoryText>
        <StorySide />
      </StoryBlock>

      {/* ATÖLYE / VİDEO BLOĞU */}
      <AtolyeSection>
        <AtolyeHeader>Atölyeden Görüntüler</AtolyeHeader>

        <VideoCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {showVideo ? (
            <video
              src="/images/videos/atolye.mp4"
              controls
              autoPlay
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <Cover onClick={() => setShowVideo(true)}>
              {/* Kapak da NeosImage ile, lazy */}
              <NeosImage src="/images/kapak.webp" alt="Video Kapak" />
              <PlayOverlay>
                <Play size={34} />
              </PlayOverlay>
            </Cover>
          )}
        </VideoCard>

        <AtolyeCaption>
          “Her bir NEOS botu, sessiz bir adanmışlığın eseridir. Usta ellerin
          deneyimi, her dokunuşta sıcaklığını hissettiren yumuşacık kürklerle
          birleşir.”
        </AtolyeCaption>
      </AtolyeSection>

      {/* 3 ÖZELLİK KARTI */}
      <FeatureRow>
        <FeatureCard>
          <FeatureKicker>Teknik Güven</FeatureKicker>
          <FeatureBody>
            Zorlu hava koşullarına karşı dayanıklı yapısı ile her adımda
            güvenli ve sağlam bir zemin sağlar.
          </FeatureBody>
        </FeatureCard>

        <FeatureCard>
          <FeatureKicker>Cozy Duygu</FeatureKicker>
          <FeatureBody>
            Yumuşacık iç astarı ve ayağı saran formu sayesinde, her gün
            kullanıma uygun sıcak bir konfor sunar.
          </FeatureBody>
        </FeatureCard>

        <FeatureCard>
          <FeatureKicker>Moda Değeri</FeatureKicker>
          <FeatureBody>
            Zamansız tasarım çizgileriyle; günlük kombinlerden şehir
            stiline kadar her görünüme eşlik eder.
          </FeatureBody>
        </FeatureCard>
      </FeatureRow>

      {/* ALINTI */}
      <QuoteSection>
        <QuoteText>
          “Biz sadece ayakkabı değil, hayatın içinde güvenle atılan adımların
          hikâyesini tasarlıyoruz.”
        </QuoteText>
      </QuoteSection>

      <Footer />
    </PageWrapper>
  );
};

export default Hikayemiz;

/* ============= STYLED COMPONENTS ============= */

const PageWrapper = styled.div`
  background: #fdfaf7;
  color: #111827;
`;

/* HERO */

const HeroSection = styled.section`
  position: relative;
  padding-top: 96px; /* navbar yüksekliği */
  min-height: 65vh;
  overflow: hidden;

  /* kaydırmalı arka plan */
  background-image: url("/images/hikayemiz.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed; /* 👈 hem desktop hem mobilde sabit */

  /* altta yumuşak geçiş */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 45%;
    background: linear-gradient(
      to bottom,
      rgba(253, 245, 238, 0) 0%,
      #fdfaf7 100%
    );
    pointer-events: none;
  }
`;


/* Artık background-image değil, gerçek <img> */
const HeroImageLayer = styled(NeosImage)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  opacity: 1;
  

  @media (max-width: 768px) {
    object-position: center top;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
  padding: 120px 8% 80px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 90px 6% 70px;
  }
`;

const HeroKicker = styled.div`
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #c4a58a;
  margin-bottom: 10px;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.1rem, 4vw, 2.8rem);
  font-weight: 900;
  letter-spacing: 0.16em;
`;

/* MANIFESTO */

const ManifestoSection = styled.section`
  max-width: 800px;
  margin: 0 auto 80px;
  padding: 0 8%;

  @media (max-width: 768px) {
    margin-bottom: 60px;
    padding: 0 6%;
  }
`;

const ManifestoTitle = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.75rem;
  color: #9ca3af;
  text-align: center;
  margin-bottom: 10px;
`;

const ManifestoLead = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 1.02rem;
  line-height: 1.8;
  color: #111827;
  margin-bottom: 18px;
`;

const ManifestoBody = styled.p`
  text-align: center;
  font-size: 0.97rem;
  line-height: 1.9;
  color: #6b7280;
`;

/* STORY BLOCK */

const StoryBlock = styled.section`
  max-width: 1100px;
  margin: 0 auto 80px;
  padding: 0 8%;
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  gap: 40px;
  align-items: flex-start;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (max-width: 768px) {
    padding: 0 6%;
    margin-bottom: 70px;
  }
`;

const StoryText = styled.div``;

const StorySide = styled.div``;

const StoryKicker = styled.div`
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #d4a16a;
  margin-bottom: 8px;
`;

const StoryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 16px;
`;

const StoryBody = styled.p`
  font-size: 0.96rem;
  line-height: 1.9;
  color: #6b7280;
  margin-bottom: 8px;
`;

/* ATÖLYE / VİDEO */

const AtolyeSection = styled.section`
  max-width: 1100px;
  margin: 0 auto 90px;
  padding: 0 8%;

  @media (max-width: 768px) {
    padding: 0 6%;
    margin-bottom: 70px;
  }
`;

const AtolyeHeader = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 18px;
`;

const VideoCard = styled(motion.div)`
  border-radius: 26px;
  overflow: hidden;
  box-shadow: 0 26px 60px rgba(15, 23, 42, 0.35);
  background: #b5652a;
  margin-bottom: 18px;
`;

const Cover = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const PlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.5) 40%,
    transparent 70%
  );
  color: #fff;
`;

const AtolyeCaption = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.8;
  max-width: 620px;
`;

/* FEATURES */

const FeatureRow = styled.section`
  max-width: 1100px;
  margin: 0 auto 80px;
  padding: 0 8%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 0 6%;
  }
`;

const FeatureCard = styled.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 20px 18px 22px;
  box-shadow: 0 12px 35px rgba(15, 23, 42, 0.06);
  border: 1px solid #f3f4f6;
`;

const FeatureKicker = styled.h4`
  font-size: 0.98rem;
  font-weight: 700;
  margin-bottom: 8px;
`;

const FeatureBody = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.8;
`;

/* QUOTE */

const QuoteSection = styled.section`
  max-width: 900px;
  margin: 0 auto 80px;
  padding: 0 8% 40px;

  @media (max-width: 768px) {
    padding: 0 6% 40px;
  }
`;

const QuoteText = styled.p`
  text-align: center;
  font-size: 0.98rem;
  line-height: 1.9;
  color: #4b5563;
  font-style: italic;
`;
