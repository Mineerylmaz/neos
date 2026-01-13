import React, { useState } from "react";
import styled from "styled-components";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        {/* LOGO */}
        <Logo to="/">
          <LogoImg src="/images/nav.webp" alt="NEOS" />
        </Logo>

        {/* NAV LİNKLERİ */}
        <NavLinks className={isOpen ? "active" : ""}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Anasayfa
          </NavLink>
          <NavLink to="/hikayemiz" onClick={() => setIsOpen(false)}>
            Hikayemiz
          </NavLink>
          <NavLink to="/tasarim" onClick={() => setIsOpen(false)}>
            Tasarım Felsefemiz
          </NavLink>
          <NavLink to="/koleksiyon" onClick={() => setIsOpen(false)}>
            Koleksiyon
          </NavLink>
          <NavLink to="/iletisim" onClick={() => setIsOpen(false)}>
            İletişim
          </NavLink>
        </NavLinks>

        {/* HAMBURGER BUTON – mobilde sağ üstte floating */}
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </MenuButton>
      </NavContainer>

      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
    </Nav>
  );
};

export default Navbar;

/* ============ STYLED COMPONENTS ============ */
const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #ffff;
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(181, 164, 141, 0.2);
  box-shadow: 0 2px 16px rgba(139, 115, 85, 0.06);
`;

const NavContainer = styled.div`
  width: 100%;
  padding: 14px 6%;
  display: flex;
  align-items: center;
  gap: 36px;
  justify-content: flex-start;        /* DESKTOP: logo solda, linkler sağda */

  @media (max-width: 968px) {
    padding: 8px 4%;
    gap: 12px;
    justify-content: center;          /* MOBİLDE LOGO TAM ORTADA */
    position: relative;
  }
`;

/* LOGO GÖRSELİ */
const LogoImg = styled.img`
  width: 180px;
  height: auto;
  object-fit: contain;

  @media (max-width: 1024px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 260px;
    transform: translateX(-10px) scaleX(1.04);   /* ↤ BİRAZ SOLA KAYDIR */
  }

  @media (max-width: 600px) {
    width: 280px;
    transform: translateX(-12px) scaleX(1.06);   /* DAHA KÜÇÜK TELEFONDA BİRAZ DAHA SOL */
  }

  @media (max-width: 430px) {
    width: 290px;
    transform: translateX(-14px) scaleX(1.08);
  }

  @media (max-width: 380px) {
    width: 300px;
    transform: translateX(-16px) scaleX(1.08);
  }

  @media (max-width: 340px) {
    width: 305px;
    transform: translateX(-18px) scaleX(1.08);
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  padding-left: 4px;
  margin-right: auto;                  /* DESKTOP: LOGO SOLDA, DİĞERLERİ SAĞA İTİLİR */

  @media (max-width: 968px) {
    padding-left: 0;
    margin-right: 0;                   /* MOBİLDE ORTALAMA İÇİN NÖTRLE */
  }
`;

/* HAMBURGER BUTON – SAĞ ÜSTE SABİT */
const MenuButton = styled.button`
  display: none;
  position: absolute;
  top: 50%;
  right: 4%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: #1a1a1a;
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  transition: all 0.25s ease;
  z-index: 2000;

  &:hover {
    background: rgba(139, 115, 85, 0.3);
  }

  @media (max-width: 968px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/* İstersen ilerde yazı eklemek için dursun */
const LogoText = styled.span`
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #1a1a1a;

  @media (max-width: 968px) {
    font-size: 0.95rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
  margin-left: auto;

  @media (max-width: 968px) {
    margin-left: 0;
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    max-width: 320px;
    height: 100vh;
    background: linear-gradient(135deg, #e8dfd5 0%, #d4c4b0 100%);
    flex-direction: column;
    padding: 100px 30px 40px;
    gap: 24px;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.15);
    overflow-y: auto;
    z-index: 1500;

    &.active {
      transform: translateX(0);
    }
  }

  @media (max-width: 480px) {
    width: 85%;
  }
`;

const NavLink = styled(Link)`
  color: #3a3a3a;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  position: relative;
  padding: 3px 0;
  transition: color 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: #8b7355;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #8b7355;
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 968px) {
    font-size: 1.1rem;
    width: 100%;
    padding: 12px 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.25);
    text-align: center;

    &::after {
      display: none;
    }

    &:hover {
      background: rgba(139, 115, 85, 0.2);
      transform: translateX(4px);
    }
  }
`;

/* HAMBURGER – NAV içinde sağ üstte float */


const Overlay = styled.div`
  @media (max-width: 968px) {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1200;
  }
`;
