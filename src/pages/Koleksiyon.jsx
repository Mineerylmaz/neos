import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ==== GÖRSELLER ==== */
const womenImages = [
  "/images/kadin/kadin1.jpeg",
  "/images/kadin/kadin2.jpeg",
  "/images/kadin/kadin3.jpeg",
  "/images/kadin/kadin4.jpeg",
  "/images/kadin/kadin5.jpeg",
  "/images/kadin/kadin6.jpeg",
  "/images/kadin/kadin7.jpeg",
  "/images/kadin/kadin9.jpeg",
  "/images/kadin/kadin10.jpeg",
  "/images/kadin/kadin11.jpeg",
  "/images/kadin/kadin12.jpeg",
  "/images/kadin/kadin13.jpeg",
  "/images/kadin/kadin14.jpeg",
  "/images/kadin/kadin15.jpeg",
  "/images/kadin/kadin16.jpeg",
];

const kidsImages = [
  "/images/cocuk/cocuk1.jpeg",
  "/images/cocuk/cocuk2.jpeg",
  "/images/cocuk/cocuk3.jpeg",
  "/images/cocuk/cocuk4.jpeg",
  "/images/cocuk/cocuk5.jpeg",
  "/images/cocuk/cocuk6.jpeg",
  "/images/cocuk/cocuk7.jpeg",
  "/images/cocuk/cocuk8.jpeg",
  "/images/cocuk/cocuk9.jpeg",
  "/images/cocuk/cocuk10.jpeg",
  "/images/cocuk/cocuk11.jpeg",
  "/images/cocuk/cocuk12.jpeg",
];

const babetImages = Array.from(
  { length: 28 },
  (_, i) => `/images/babet/babet${i + 1}.jpeg`
);

/* ==== VİDEOLAR ==== */
const babetVideos = Array.from(
  { length: 6 },
  (_, i) => `/images/babet/babetv${i + 1}.mp4`
);

const Koleksiyon = () => {
  return (
    <Page>
      <Navbar />

      <Inner>
        <HeroSection>
          <HeroContent>
            <HeroEyebrow>NeosFlex Tasarım Günlükleri</HeroEyebrow>
            <HeroTitle>Şehrin ritmine ayak uyduran, doğadan ilham alan dokular.</HeroTitle>
            <HeroText>
              Kadın ve çocuk koleksiyonlarımızı sadece birer ürün olarak değil;
              modern, ferah ve her adımda hissedilecek bir yaşam tarzı olarak sunuyoruz.
            </HeroText>
          </HeroContent>
        </HeroSection>

        <QuoteSection>
          <h3>"Sıcak günlerin serin ve özgür ruhunu yansıtan çizgiler."</h3>
          <p>Yaz Koleksiyonu '26</p>
        </QuoteSection>

        {/* --- SANDALET KOLEKSİYONU EN ÜSTE ALINDI --- */}
        <CollectionSection
          title="Sandalet Koleksiyonu"
          subtitle="Hafif, zarif ve günlük şıklığa uyum sağlayan sandalet modelleri."
          images={babetImages}
          videos={babetVideos}
          type="mixed"
        />

        {/* --- ARAYA GİREN EDİTORYAL ALINTI (MANIFESTO) --- */}
        <QuoteSection>
          <h3>"Küçük adımların, büyük keşiflere dönüştüğü o an."</h3>
          <p>NeosFlex Kids Vizyonu</p>
        </QuoteSection>

        <CollectionSection
          title="Çocuk Koleksiyonu"
          subtitle="Hafif, yumuşak ve oyun temposuna uyumlu."
          images={kidsImages}
          type="image"
        />

        {/* --- KADIN KOLEKSİYONU EN ALTA ALINDI --- */}
        <CollectionSection
          title="Kadın Koleksiyonu"
          subtitle="Zarif, cozy ve zamansız kadın botları."
          images={womenImages}
          type="image"
        />
      </Inner>

      <Footer />
    </Page>
  );
};

export default Koleksiyon;

/* =========================
   COLLECTION SECTION
========================= */
const CollectionSection = ({ title, subtitle, images, videos = [], type }) => {
  const featured = images.slice(0, 3);
  const restImages = images.slice(3);

  return (
    <Section>
      <SectionHead>
        <SectionTitle>{title}</SectionTitle>
        <SectionSub>{subtitle}</SectionSub>
      </SectionHead>

      <FeaturedGrid>
        {featured.map((src, i) => (
          <FeaturedCard key={i} $large={i === 0}>
            <img
              src={src}
              alt={`${title} Öne Çıkan ${i + 1}`}
              loading="lazy"
              decoding="async"
            />
            {/* Dergi tarzı overlay */}
            <FeaturedOverlay>
              <LookSubtitle>Koleksiyon Seçkisi</LookSubtitle>
              <LookTitle>Look 0{i + 1}</LookTitle>
            </FeaturedOverlay>
          </FeaturedCard>
        ))}
      </FeaturedGrid>

      {type === "mixed" && videos.length > 0 && (
        <VideoBlock>
          <MiniTitle>360° Görünümler</MiniTitle>
          <VideoGrid>
            {videos.map((src, i) => (
              <VideoCard key={i}>
                <video
                  src={src}
                  autoPlay /* Otomatik başlar */
                  loop /* Başa sarıp durmadan döner */
                  muted /* Mobilde otomatik başlaması için zorunlu */
                  playsInline /* Tam ekrana geçmesini engeller */
                  preload="auto"
                />
                <VideoOverlay>

                  <span>360°</span>
                </VideoOverlay>
              </VideoCard>
            ))}
          </VideoGrid>
        </VideoBlock>
      )}

      <ProductsBlock>
        <MiniTitle>Tüm Görünümler</MiniTitle>
        <ProductGrid>
          {restImages.map((src, i) => (
            <ProductCard key={i}>
              <img
                src={src}
                alt={`${title} Look ${i + 4}`}
                loading="lazy"
                decoding="async"
              />
              <LookbookOverlay>
                <LookTitle>Stil {i + 4}</LookTitle>
              </LookbookOverlay>
            </ProductCard>
          ))}
        </ProductGrid>
      </ProductsBlock>
    </Section>
  );
};

/* =============== STYLES =============== */

const Page = styled.div`
  background: #fbf9f6; 
  min-height: 100vh;
`;

const Inner = styled.main`
  padding: 130px 6% 120px;

  @media (max-width: 768px) {
    padding: 150px 5% 100px;
  }
`;

const HeroSection = styled.section`
  margin-bottom: 90px;
  border-radius: 4px; 
  padding: 60px 40px;
  background: #f0e8df; 

  @media (max-width: 768px) {
    padding: 40px 24px;
    margin-bottom: 60px;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroEyebrow = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #8c5d33;
  margin-bottom: 16px;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.8rem);
  line-height: 1.1;
  font-weight: 300; 
  color: #1a1a1a;
  margin: 0 0 20px;
  letter-spacing: -0.02em;
`;

const HeroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
  max-width: 620px;
  font-weight: 300;
  margin: 0;
`;

const QuoteSection = styled.div`
  padding: 80px 20px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  h3 {
    font-size: clamp(1.6rem, 3.5vw, 2.6rem);
    font-weight: 300;
    line-height: 1.3;
    color: #1a1a1a;
    font-style: italic; 
    margin: 0 0 16px;
  }
  
  p {
    font-size: 0.85rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #9a6a3b;
    font-weight: 600;
    margin: 0;
  }
`;

const Section = styled.section`
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 80px;
  }
`;

const SectionHead = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid #e5dbcf; 
  padding-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
`;

const SectionSub = styled.p`
  color: #666;
  max-width: 600px;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.6;
  margin: 0;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1.35fr 1fr 1fr;
  gap: 16px; 
  margin-bottom: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedCard = styled.div`
  position: relative;
  min-height: ${({ $large }) => ($large ? "600px" : "400px")};
  border-radius: 4px; 
  overflow: hidden;
  background: #eadfd4;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center 78%;
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &:hover img {
    transform: scale(1.04);
  }

  @media (max-width: 900px) {
    min-height: 400px;
  }
`;

const FeaturedOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(15, 10, 5, 0.5) 0%,
    transparent 40%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px;
  color: white;
  pointer-events: none;
`;

const MiniTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const VideoBlock = styled.div`
  margin-bottom: 60px;
`;

/* --- ASİMETRİK YENİ VİDEO GRID --- */
const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  grid-auto-flow: dense;

  /* 1. ve 4. videoyu büyük yapıyoruz (Asimetrik düzen) */
  > div:nth-child(3n + 1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  > div:nth-child(3n + 1) {
    aspect-ratio: auto; 
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    > div:nth-child(3n + 1) {
      grid-column: span 2; /* Mobilde de dinamizmi koruyoruz */
    }
  }
`;

const VideoCard = styled.div`
  position: relative;
  background: #efe3d7;
  border-radius: 4px; 
  overflow: hidden;
  aspect-ratio: 3 / 4; 

  video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    background: #d9c8b8;
    pointer-events: none; 
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.85);
  color: #1a1a1a;
  padding: 6px 12px;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  span {
    margin-top: 1px;
  }
`;

const Icon = styled.div`
  font-size: 0.8rem;
  opacity: 0.8;
`;

const ProductsBlock = styled.div``;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  grid-auto-flow: dense; 

  > div:nth-child(5n + 1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  > div:nth-child(5n + 1) {
    aspect-ratio: auto; 
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    > div:nth-child(5n + 1) {
      grid-column: span 2; 
    }
  }
`;

const ProductCard = styled.div`
  border-radius: 4px; 
  overflow: hidden;
  background: #eadfd4;
  aspect-ratio: 3 / 4; 
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center 78%;
    transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

const LookbookOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(20, 15, 10, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  color: #fff;
  text-align: center;

  ${ProductCard}:hover & {
    opacity: 1;
  }
`;

const LookTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  margin: 0;
`;

const LookSubtitle = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 8px;
`;