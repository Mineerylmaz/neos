import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Tasarim = () => {
  return (
    <Page>
      <Navbar />

      {/* HERO */}
      <Hero>
        <TopLabel>MÜHENDİSLİK VE ESTETİĞİN KESİŞİMİ</TopLabel>
        <Title>
          KONFORUN <br />
          <span>ANATOMİSİ</span>
        </Title>
        <Subtitle>
          Sessiz bir devrim, her adımda yeniden doğan bir zarafet. Mühendisliğin
          soğuk kusursuzluğu, konforun sıcak dokunuşuyla buluşuyor.
        </Subtitle>

        <HeroButtons>
          <ButtonPrimary as={Link} to="/koleksiyon">
            Koleksiyonu İncele
          </ButtonPrimary>

          <ButtonSecondary as={Link} to="/hikayemiz">
            Hikayemiz
          </ButtonSecondary>
        </HeroButtons>

      </Hero>

      {/* BÖLÜM — BULUT KONFORU */}
      <DetailSection>
        <DetailContent>
          <SmallLabel>BİR AYAKKABININ İÇİNDE</SmallLabel>
          <DetailTitle>BULUT KONFORU</DetailTitle>
          <DetailText>
            Gelişmiş konfor astarı ile sürtünmeyi azaltan ve ayak çevresini
            yumuşak bir şekilde saran dokular kullanılır. Böylece günün sonuna
            kadar hissedilen baskı minimuma iner.
          </DetailText>

          <SpecsRow>
            <SpecCard>
              <SpecValue>42%</SpecValue>
              <SpecLabel>Daha Az Baskı</SpecLabel>
            </SpecCard>

            <SpecCard>
              <SpecValue>180g</SpecValue>
              <SpecLabel>Hafiflik</SpecLabel>
            </SpecCard>
          </SpecsRow>
        </DetailContent>

        <DetailVisual>
          <DetailVisualImg src="/images/hero-detail.png" alt="detail" />
        </DetailVisual>
      </DetailSection>

      {/* ALT GRİD */}
      <GridSection>
        <GridHeader>
          <SmallLabel>ÜRÜN SIRRIMIZ</SmallLabel>
          <DetailTitle>MİKROSKOBİK MÜHENDİSLİK</DetailTitle>
          <Subtitle>
            Makro konforun arkasında mikro katmanlar vardır. Hafiflik, ısı
            dengesi ve zemin hakimiyeti tek bir yapıda birleşir.
          </Subtitle>
        </GridHeader>

        <Grid>
          <GridCard>
            <GridImg src="/images/material1.png" />
            <GridCardTitle>Suya Dayanıklı Doku</GridCardTitle>
            <GridCardText>
              Hidrofobik yüzey işleminden geçen dış malzeme suyu iter,
              lekelenmeyi azaltır.
            </GridCardText>
          </GridCard>

          <GridCard>
            <GridImg src="/images/material2.png" />
            <GridCardTitle>Isısal İçlik</GridCardTitle>
            <GridCardText>
              Termal tekstil, ısının ayak çevresinde daha uzun süre
              hapsolmasını sağlar.
            </GridCardText>
          </GridCard>

          <GridCard>
            {/* taban foto: kırpmasın diye 'tall' class'ı */}
            <GridImg src="/images/material3.png" className="tall" />
            <GridCardTitle>Kaymaz Taban</GridCardTitle>
            <GridCardText>
              Özel kauçuk bazlı taban yapısı zemin tutuşunu artırır ve kaymayı
              engeller.
            </GridCardText>
          </GridCard>
        </Grid>
      </GridSection>

      <Footer />
    </Page>
  );
};

export default Tasarim;

/* ============= STYLES ================= */

const Page = styled.div`
  background: #fafafa;
  width: 100%;
  overflow-x: hidden;
`;

/* HERO: kareli arka plan + daha büyük alan */
const Hero = styled.section`
  position: relative;
  text-align: center;
  padding: 130px 6% 90px;
  min-height: 80vh;

  /* grid background */
  background-color: #fdfdfb;
  background-image:
    linear-gradient(
      to right,
      rgba(148, 163, 184, 0.12) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      rgba(148, 163, 184, 0.12) 1px,
      transparent 1px
    );
  background-size: 80px 80px;

  @media (max-width: 820px) {
    padding: 110px 6% 70px;
    min-height: auto;
    background-size: 60px 60px;
  }
`;

const TopLabel = styled.div`
  font-size: 0.78rem;
  letter-spacing: 0.22em;
  color: #b98c5b;
  margin-bottom: 26px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 0.96;
  color: #111111;

  span {
    color: #111111;
  }

  @media (max-width: 820px) {
    font-size: clamp(2.6rem, 9vw, 3.3rem);
  }
`;

const Subtitle = styled.p`
  max-width: 640px;
  margin: 28px auto 0;
  color: #6b7280;
  font-size: 0.98rem;
  line-height: 1.8;
  font-style: italic;
`;

const HeroButtons = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
`;

const ButtonPrimary = styled(Link)`
  background: #111;
  color: #fff;
  padding: 12px 26px;
  font-weight: 700;
  border-radius: 999px;
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #000;
  }
`;


const ButtonSecondary = styled(Link)`
  background: transparent;
  color: #111;
  padding: 12px 24px;
  border-radius: 999px;
  border: 1px solid #d4d4d4;
  font-weight: 600;
  font-size: 0.88rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #fff;
  }
`;


/* (ProductSection kullanılmıyorsa silebilirsin) */
const ProductSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: -20px;
`;

const ProductImage = styled.img`
  width: 70%;
  max-width: 900px;
  border-radius: 18px;
`;

/* DETAIL ve GRID arası boşluğu azalttım */
const DetailSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 80px 6% 35px; /* alt padding: 60 → 35 */
  gap: 48px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 60px 6% 25px;
  }
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SmallLabel = styled.div`
  font-size: 0.76rem;
  letter-spacing: 0.1em;
  color: #777;
  font-weight: 600;
  margin-bottom: 10px;
`;

const DetailTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 900;
  color: #1a1a1a;
  margin-bottom: 18px;
`;

const DetailText = styled.p`
  max-width: 480px;
  color: #555;
  line-height: 1.65;
  margin-bottom: 32px;
`;

const SpecsRow = styled.div`
  display: flex;
  gap: 28px;
`;

const SpecCard = styled.div``;

const SpecValue = styled.div`
  font-size: 1.9rem;
  font-weight: 900;
  color: #1a1a1a;
`;

const SpecLabel = styled.div`
  color: #666;
  font-size: 0.85rem;
`;

const DetailVisual = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailVisualImg = styled.img`
  width: 90%;
  border-radius: 14px;
`;

const GridSection = styled.section`
  padding: 30px 6% 120px; /* üst padding: 50 → 30 */
`;

const GridHeader = styled.div`
  text-align: center;
  margin-bottom: 36px; /* 40 → 36 */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const GridCard = styled.div``;

const GridImg = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 18px;

  &.tall {
    object-fit: contain;
    background: #0f172a;
  }

  @media (max-width: 820px) {
    height: 210px;
  }
`;

const GridCardTitle = styled.h3`
  font-weight: 800;
  font-size: 1.05rem;
  margin-bottom: 10px;
  color: #1a1a1a;
`;

const GridCardText = styled.p`
  font-size: 0.95rem;
  color: #666;
  line-height: 1.55;
`;
