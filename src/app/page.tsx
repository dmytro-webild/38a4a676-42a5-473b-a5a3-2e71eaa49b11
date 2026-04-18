"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Leaf } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSmall"
        background="noiseDiagonalGradient"
        cardStyle="inset"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Menu", id: "menu" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Mumbai Restaurent "
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars"}}
      title="Experience Fine Dining Like Never Before"
      description="Where culinary artistry meets luxury. Join us for an unforgettable evening at Lumière."
      kpis={[
        { value: "15+", label: "Years Experience" },
        { value: "50+", label: "Signature Recipes" },
        { value: "20k+", label: "Delighted Guests" },
      ]}
      enableKpiAnimation={true}
      buttons={[
        { text: "View Menu", href: "#menu" },
        { text: "Book Table", href: "#contact" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/vegetable-salad-black-plate_140725-391.jpg"
      mediaAnimation="slide-up"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598413.jpg", alt: "Diner 1" },
        { src: "http://img.b2bpic.net/free-photo/women-table-with-food_23-2147681106.jpg", alt: "Diner 2" },
        { src: "http://img.b2bpic.net/free-photo/women-eating-traditional-italian-pizza-together_52683-110888.jpg", alt: "Diner 3" },
        { src: "http://img.b2bpic.net/free-photo/friends-eating-restaurant_23-2148006619.jpg", alt: "Diner 4" },
        { src: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-woman-smiling_23-2148454153.jpg", alt: "Diner 5" },
      ]}
      avatarText="Join our growing community of food enthusiasts"
      marqueeItems={[
        { type: "text", text: "Michelin Star Rated" },
        { type: "text-icon", text: "Locally Sourced", icon: Leaf },
        { type: "text", text: "Seasonal Degustation" },
        { type: "text-icon", text: "Award-Winning Service", icon: Award },
        { type: "text", text: "Private Events" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="The Lumière Story"
      description="Born from a passion for perfection, Lumière captures the essence of refined gastronomy. We curate the finest seasonal ingredients to bring you a timeless dining experience."
      imageSrc="http://img.b2bpic.net/free-photo/female-chef-kitchen-preparing-plate-steak_23-2149720768.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          label: "Farm Fresh",          title: "Sourced Daily",          items: ["Local produce", "Organic selection", "Peak seasonal flavors"]
        },
        {
          id: "f2",          label: "Chef Driven",          title: "Culinary Mastery",          items: ["Award-winning chefs", "Secret techniques", "Hand-crafted plates"]
        },
        {
          id: "f3",          label: "Service First",          title: "Exquisite Care",          items: ["Attentive staff", "Personalized seating", "Smooth flow"]
        },
      ]}
      title="Our Culinary Promise"
      description="Excellence in every bite through dedication to the craft."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          brand: "Starter",          name: "Truffle Velouté",          price: "$28",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/sushi-rolls-served-plate_140725-4234.jpg"},
        {
          id: "p2",          brand: "Main Course",          name: "Wagyu Ribeye",          price: "$98",          rating: 5,
          reviewCount: "85",          imageSrc: "http://img.b2bpic.net/free-photo/fried-salmon-fillet-with-sauce-top_140725-6436.jpg"},
        {
          id: "p3",          brand: "Dessert",          name: "Midnight Ganache",          price: "$22",          rating: 5,
          reviewCount: "42",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-dessert-white-plate-decorated-with-flowers_23-2151973729.jpg"},
        {
          id: "p4",          brand: "Beverage",          name: "Sommelier Vintage",          price: "$65",          rating: 5,
          reviewCount: "34",          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-with-nuts-rose-wine_140725-6880.jpg"},
        {
          id: "p5",          brand: "Main Course",          name: "Saffron Risotto",          price: "$45",          rating: 4,
          reviewCount: "22",          imageSrc: "http://img.b2bpic.net/free-photo/salad-with-fried-shrimps-juice_140725-44289.jpg"},
        {
          id: "p6",          brand: "Dessert",          name: "Citrus Cloud",          price: "$18",          rating: 5,
          reviewCount: "19",          imageSrc: "http://img.b2bpic.net/free-photo/tart-with-profiteroles-top-with-whipped-cream_114579-35143.jpg"},
      ]}
      title="Chef’s Signature Selections"
      description="Discover our world-renowned culinary masterpieces."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "lp1",          title: "Chef's Tasting",          price: "$150",          period: "/person",          features: ["7-course meal", "Wine pairing included", "Chef's greeting"],
          button: { text: "Book Now", href: "#contact" },
          imageSrc: "http://img.b2bpic.net/free-photo/seared-scallops-with-pea-puree_23-2151942386.jpg"},
        {
          id: "lp2",          title: "Private Gala",          price: "$3,000",          period: "/event",          features: ["Full venue access", "Private sommelier", "Custom menu design"],
          button: { text: "Inquire", href: "#contact" },
          imageSrc: "http://img.b2bpic.net/free-photo/gourmet-meal-served-with-wine_23-2148516896.jpg"},
        {
          id: "lp3",          title: "Lunch Special",          price: "$65",          period: "/person",          features: ["3-course prix fixe", "Seasonal greens", "Coffee service"],
          button: { text: "Book Now", href: "#contact" },
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-thanksgiving-meal_23-2148629544.jpg"},
      ]}
      title="Dining Packages"
      description="Tailored experiences for your special moments."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Elena Vance",          handle: "@elena.v",          testimonial: "The Wagyu Ribeye changed my life. Absolutely spectacular.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081883.jpg"},
        {
          id: "t2",          name: "Julian Thorne",          handle: "@thorne_travels",          testimonial: "Unparalleled service and incredible wine pairing.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-holding-hands-with-her-lover_23-2148060335.jpg"},
        {
          id: "t3",          name: "Marcus Reid",          handle: "@reid_reviews",          testimonial: "A sanctuary for fine food lovers. Highly recommended.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-business-man-cafe-drinking-coffee_1303-10327.jpg"},
        {
          id: "t4",          name: "Sarah Chen",          handle: "@sarah_chen",          testimonial: "Sophisticated atmosphere and truly inventive flavors.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-rich-woman-table_23-2149684353.jpg"},
        {
          id: "t5",          name: "David Miller",          handle: "@dmiller",          testimonial: "The best dining experience in the city. Incredible.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598351.jpg"},
      ]}
      showRating={true}
      title="Guest Reflections"
      description="What our patrons say about their dining experience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Do you offer vegan options?", content: "Yes, we provide an extensive vegan and vegetarian menu crafted daily." },
        { id: "q2", title: "What is the dress code?", content: "We maintain a business-formal dress code to honor our dining atmosphere." },
        { id: "q3", title: "Is parking available?", content: "Valet service is available directly at the entrance for all guests." },
      ]}
      title="Common Inquiries"
      description="Everything you need to know for your upcoming visit."
      faqsAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/chef-showing-his-fine-cuisine-professional-food-decoration_482257-10348.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "rotated-rays-static" }}
      tag="Reserve Table"
      title="Join Us Tonight"
      description="Secure your table for an evening of luxury."
      buttons={[{ text: "Contact Us", href: "mailto:reserve@lumiere.com" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Mumbai Restaurent "
      leftLink={{ text: "© 2024 Lumière Dining", href: "#" }}
      rightLink={{ text: "Privacy Policy", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
