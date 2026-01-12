// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Droplets, Wind, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

/* 👇 TÜM RESİMLER İÇİN KÜÇÜK YARDIMCI KOMPONENT
   - priority = true olanlar: hero gibi ilk ekranda görünenler (eager)
   - diğerleri: lazy yüklenir
*/
const NeosImage = ({ src, alt, priority = false, className, ...rest }) => {
  return (
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
};

const Home = () => {
  // Farklı renk bot görsellerin
  const heroImages = [
    "/images/heroimg1.webp", // Mümkünse webp / sıkıştırılmış jpg kullan
    "/images/heroimg2.webp",
    "/images/heroimg3.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Her 3 saniyede bir resmi değiştir
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <PageContainer>
      <Navbar />

      {/* HERO */}
      <HeroSection>
        {/* Arka plan bot slideshow artık <img> ile */}
        <HeroImageWrapper>
          <AnimatePresence mode="wait">
            <HeroImageLayer
              key={heroImages[currentIndex]}
              src={heroImages[currentIndex]}
              alt="NEOS bot"
              priority
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </HeroImageWrapper>

        {/* Metin */}
        <HeroInner>
          <HeroTextContent>
            <motion.h1
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              ADIMLARINIZDA <br />
              <span>KONFORU</span> <br />
              HİSSEDİN
            </motion.h1>

            <motion.p
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              Teknoloji ve estetiğin kusursuz birleşimi. Kışın sert koşullarında
              ayaklarınızı sıcak tutarken şıklığınızdan ödün vermeyin.
            </motion.p>

            <ButtonGroup
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <PrimaryButton as={Link} to="/koleksiyon">
                KOLEKSİYONU GÖR <ChevronRight size={18} />
              </PrimaryButton>
            </ButtonGroup>
          </HeroTextContent>
        </HeroInner>
      </HeroSection>

      {/* MANİFESTO */}
      <ManifestoSection>
        <SectionHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            NEOS MANİFESTOSU
          </motion.h2>
          <p>
            Sadece bir ayakkabı değil, bir yaşam biçimi. Her detayda mükemmellik,
            her adımda inovasyon. Geleceği tasarlamak için bugünün sınırlarını
            zorluyoruz.
          </p>
          <BigNumber>01</BigNumber>
        </SectionHeader>

        <FeaturesGrid>
          {[
            {
              icon: <Wind />,
              title: "KAYMAZ TABAN",
              desc: "Özel geliştirilmiş kauçuk taban yapısı sayesinde buzlu ve kaygan zeminlerde maksimum tutuş sağlar.",
            },
            {
              icon: <Droplets />,
              title: "SUYA DAYANIKLI",
              desc: "Dış yüzeydeki hidrofobik katman, suyu ve çamuru iterek ayaklarınızın kuru kalmasını sağlar.",
            },
            {
              icon: <ShieldCheck />,
              title: "YUMUŞAK İÇ ASTAR",
              desc: "Birinci sınıf yün görünümlü iç astar, ısıyı hapsederken yumuşak bir basış hissi uyandırır.",
            },
          ].map((item, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <IconWrapper>{item.icon}</IconWrapper>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </ManifestoSection>

      {/* KOLEKSİYONLAR */}
      <CollectionSection>
        <div className="title-row">
          <h2>ÖNE ÇIKAN KOLEKSİYONLAR</h2>
          <ViewAll to="/koleksiyon">TÜMÜNÜ GÖR</ViewAll>
        </div>

        <CardGrid>
          <CollectionCard
            label="YAĞMUR BOTLARI"
            src="/images/homekolek1.webp"
          />
          <CollectionCard
            label="KADIN MODELLERİ"
            src="/images/homekolek2.webp"
          />
          <CollectionCard
            label="KOLEKSİYON 2025"
            src="/images/homekolek3.webp"
          />
        </CardGrid>
      </CollectionSection>

      <Footer />
    </PageContainer>
  );
};

export default Home;

/* ---------------- STYLED COMPONENTS ---------------- */

const PageContainer = styled.div`
  width: 100%;
  background: #ffffff;
`;

const ViewAll = styled(Link)`
  font-weight: 700;
  font-size: 0.85rem;
  border-bottom: 2px solid #000;
  cursor: pointer;
  text-decoration: none;
  color: #111;
`;

/* HERO */

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 96px 8% 96px;
  background: #e3d5c4;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 40%;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(227, 213, 196, 0) 0%,
      rgba(253, 250, 247, 1) 100%
    );
  }

  @media (max-width: 768px) {
    padding: 88px 6% 72px;
    min-height: 90vh;

    &::after {
      height: 35%;
    }
  }
`;

const HeroImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;

/* Artık background-image değil, gerçek <img> */
const HeroImageLayer = styled(motion(NeosImage))`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #e3d5c4;

  /* Desktop */
  object-position: 48% center;

  @media (min-width: 1440px) {
    object-position: 92% center;
  }

  @media (max-width: 992px) {
    object-position: center bottom;
  }

  @media (max-width: 768px) {
    object-fit: cover;
    object-position: center 78%;
    opacity: 0.26;
  }
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  min-height: calc(100vh - 150px);

  @media (max-width: 768px) {
    min-height: auto;
    justify-content: center;
    padding-top: 100px;
  }
`;

const HeroTextContent = styled.div`
  max-width: 520px;

  @media (min-width: 768px) {
    margin-top: 40px;
  }

  h1 {
    font-size: clamp(2.6rem, 5vw, 4.5rem);
    font-weight: 900;
    color: #111827;
    line-height: 1.02;
    margin-bottom: 24px;
    letter-spacing: -0.06em;

    span {
      color: #b5a48d;
    }
  }

  p {
    font-size: 1.05rem;
    color: #4b5563;
    line-height: 1.7;
    margin-bottom: 36px;
    max-width: 440px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;

    h1 {
      font-size: clamp(2.3rem, 8vw, 3rem);
      color: #f9fafb;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    }

    p {
      margin-left: auto;
      margin-right: auto;
      color: #f3f4f6;
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 14px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled.button`
  background: #111827;
  color: #ffffff;
  border: none;
  padding: 16px 32px;
  border-radius: 999px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #020617;
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(15, 23, 42, 0.25);
  }
`;

const SecondaryButton = styled.button`
  background: #ffffff;
  color: #111827;
  border: 1px solid #e5e7eb;
  padding: 16px 28px;
  border-radius: 999px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #f9fafb;
    transform: translateY(-2px);
  }
`;

/* MANIFESTO, KOLEKSİYON vb. aşağısı */

const ManifestoSection = styled.section`
  padding: 120px 10%;
  text-align: center;
  position: relative;
  background: #ffffff;

  @media (max-width: 768px) {
    padding: 80px 6%;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 80px;

  h2 {
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 20px;
    color: #1a1a1a;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    color: #666;
    line-height: 1.8;
    font-size: 1.05rem;
  }
`;

const BigNumber = styled.span`
  position: absolute;
  right: 7%;
  top: 90px;
  font-size: 11rem;
  font-weight: 900;
  color: #f5f5f5;
  user-select: none;
  pointer-events: none;

  @media (max-width: 992px) {
    font-size: 7rem;
    right: 4%;
    top: 110px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: #ffffff;
  padding: 48px 38px;
  border-radius: 24px;
  text-align: left;
  border: 1px solid #f1f5f9;
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.03);

  h3 {
    margin: 22px 0 12px;
    font-size: 1.1rem;
    font-weight: 800;
    color: #111827;
  }

  p {
    color: #6b7280;
    font-size: 0.98rem;
    line-height: 1.7;
  }
`;

const IconWrapper = styled.div`
  color: #b5a48d;
  background: #faf5ef;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;

  svg {
    width: 28px;
    height: 28px;
  }
`;

const CollectionSection = styled.section`
  padding: 60px 10% 120px;

  .title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    h2 {
      font-size: 1.8rem;
      font-weight: 900;
    }
  }

  @media (max-width: 768px) {
    padding: 60px 6% 100px;

    .title-row {
      flex-direction: column;
      gap: 10px;
      text-align: center;
    }
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* Koleksiyon kartlarını artık gerçek img + lazy ile yapıyoruz */
const CollectionCardShell = styled.div`
  height: 430px;
  border-radius: 28px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.35s ease;
  background: #000;

  &:hover {
    transform: translateY(-6px) scale(1.01);
  }
`;

const CollectionImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CollectionLabel = styled.div`
  position: absolute;
  bottom: 24px;
  left: 24px;
  background: rgba(0, 0, 0, 0.35);
  padding: 10px 20px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 800;
  color: #fff;
  backdrop-filter: blur(4px);
`;

/* Fonksiyonel kart komponenti */
const CollectionCard = ({ label, src }) => (
  <CollectionCardShell>
    <CollectionImageWrapper>
      <NeosImage src={src} alt={label} />
    </CollectionImageWrapper>
    <CollectionLabel>{label}</CollectionLabel>
  </CollectionCardShell>
);
