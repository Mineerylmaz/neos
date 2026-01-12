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
  "/images/kadin/kadin8.jpeg",
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

const Koleksiyon = () => {
  return (
    <Page>
      <Navbar />

      <Inner>
        {/* KADIN VİTRİNİ */}
        <Section>
          <SectionHead>
            <SectionTitle>Kadın Koleksiyonu</SectionTitle>
            <SectionSub>
              Zarif, cozy ve dayanıklı kadın botları.
            </SectionSub>
            <ScrollHint>Kaydırarak koleksiyonu keşfet →</ScrollHint>
          </SectionHead>

          <FilmStrip>
            <StripContent>
              {womenImages.map((src, i) => (
                <StripItem key={i}>
                  <img
                    src={src}
                    alt={`Kadın bot ${i + 1}`}
                    loading="lazy"       // 👈 lazy loading
                    decoding="async"
                  />
                </StripItem>
              ))}
            </StripContent>
          </FilmStrip>
        </Section>

        {/* ÇOCUK VİTRİNİ */}
        <Section>
          <SectionHead>
            <SectionTitle>Çocuk Koleksiyonu</SectionTitle>
            <SectionSub>
              Küçük adımlar için hafif, yumuşak ve oyun temposuna uyumlu
              çocuk botları.
            </SectionSub>
            <ScrollHint>Kaydırarak koleksiyonu keşfet →</ScrollHint>
          </SectionHead>

          <FilmStrip>
            <StripContent>
              {kidsImages.map((src, i) => (
                <StripItem key={i}>
                  <img
                    src={src}
                    alt={`Çocuk botu ${i + 1}`}
                    loading="lazy"       // 👈 lazy loading
                    decoding="async"
                  />
                </StripItem>
              ))}
            </StripContent>
          </FilmStrip>
        </Section>
      </Inner>

      <Footer />
    </Page>
  );
};

export default Koleksiyon;

/* =============== STYLES =============== */

const Page = styled.div`
  background: #faf7f2;
  min-height: 100vh;
`;

const Inner = styled.main`
  padding: 96px 6% 120px;

  @media (max-width: 768px) {
    padding: 84px 5% 100px;
  }
`;

const Section = styled.section`
  margin-bottom: 90px;

  @media (max-width: 768px) {
    margin-bottom: 70px;
  }
`;

const SectionHead = styled.div`
  margin-bottom: 26px;
`;

const SectionTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
  padding-bottom: 6px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 52px;
    height: 3px;
    border-radius: 999px;
    background: linear-gradient(90deg, #f97316, #ea580c);
  }
`;

const SectionSub = styled.p`
  color: #6b6b6b;
  max-width: 440px;
  font-size: 0.95rem;
  line-height: 1.7;
`;

const ScrollHint = styled.div`
  margin-top: 6px;
  font-size: 0.8rem;
  color: #9a6a3b;
  opacity: 0.9;

  @media (min-width: 769px) {
    display: none;
  }
`;

/* ==== FİLM ŞERİDİ ==== */

const FilmStrip = styled.div`
  position: relative;
  background: radial-gradient(
    circle at top left,
    #f5e6d9 0,
    #efe0d2 40%,
    #e0d2c2 100%
  );
  border-radius: 26px;
  padding: 26px 18px;
  box-shadow: 0 18px 45px rgba(121, 87, 54, 0.16);
  overflow: hidden;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 18px;
    right: 18px;
    height: 8px;
    background-image: radial-gradient(
      circle,
      rgba(15, 23, 42, 0.55) 2px,
      transparent 2px
    );
    background-size: 16px 8px;
    background-repeat: repeat-x;
    opacity: 0.6;
    pointer-events: none;
  }

  &::before {
    top: 9px;
  }

  &::after {
    bottom: 9px;
  }

  @media (max-width: 768px) {
    padding: 22px 14px;

    &::before,
    &::after {
      left: 14px;
      right: 14px;
      background-size: 14px 8px;
    }
  }
`;

const StripContent = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(230px, 1fr);   /* 👈 genişlik arttı */
  grid-template-rows: repeat(2, 230px);    /* 👈 yükseklik büyüdü (daha çok alan) */
  gap: 14px;

  overflow-x: auto;
  padding: 10px 4px 12px;
  scroll-snap-type: x proximity;
  scrollbar-width: thin;

  animation: nudgeScroll 2.3s ease-out 0.8s 1;

  &::-webkit-scrollbar {
    height: 7px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(15, 23, 42, 0.28);
    border-radius: 999px;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    grid-auto-columns: minmax(220px, 1fr);
    grid-template-rows: repeat(2, 240px);
  }

  /* Mobil: tek sıra, büyük kartlar */
  @media (max-width: 768px) {
    grid-auto-columns: 85vw;
    grid-template-rows: 280px;   /* 👈 mobilde daha yüksek */
    gap: 18px;
    scroll-snap-type: x mandatory;
  }

  @media (max-width: 520px) {
    grid-auto-columns: 90vw;
    grid-template-rows: 300px;   /* küçük telefonda daha da büyük */
  }

  /* ==== MOBİL SCROLLBAR ==== */
  @media (max-width: 768px) {
    overflow-x: scroll;
    scrollbar-width: thick;
    scrollbar-color: #b36b2a #f2e5d3;
  }
  @media (max-width: 768px) {
    &::-webkit-scrollbar {
      height: 10px;
      background: #f2e5d3;
    }

    &::-webkit-scrollbar-thumb {
      background: #b36b2a;
      border-radius: 999px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #934a1b;
    }
  }
  @media (max-width: 768px) {
    scrollbar-gutter: stable both-edges;
  }

  @keyframes nudgeScroll {
    0% {
      transform: translateX(0);
    }
    60% {
      transform: translateX(-40px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const StripItem = styled.div`
  scroll-snap-align: start;
  border-radius: 18px;
  overflow: hidden;
  background: #e0d5c9;
  position: relative;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.18);

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center 85%;  /* 👈 kadrajı aşağı kaydır: botlar daha çok görünür */
    transition:
      transform 0.45s ease,
      filter 0.45s ease;
  }

  &:hover img {
    transform: scale(1.07);
    filter: saturate(1.05) contrast(1.02);
  }

  @media (hover: none) {
    &:active img {
      transform: scale(1.04);
    }
  }
`;
