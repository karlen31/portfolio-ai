'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { SplitText } from 'gsap/dist/SplitText';

export function useInitialAnimation() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

    // Wait for DOM to be ready
    const ctx = gsap.context(() => {
      // Create smooth scrolling
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      });

      // Hero section animation
      const heroTimeline = gsap.timeline({ delay: 0.2 });
      
      // Split and animate the title text
      const titleSplit = new SplitText("h1", { type: "chars,words" });
      const subtitleSplit = new SplitText(".hero-subtitle", { type: "chars,words" });

      heroTimeline
        .from(titleSplit.chars, {
          opacity: 0,
          y: 50,
          rotateX: -90,
          stagger: 0.02,
          duration: 0.7,
          ease: "back.out(1.7)",
        })
        .from(subtitleSplit.chars, {
          opacity: 0,
          y: 20,
          stagger: 0.01,
          duration: 0.4,
          ease: "power2.out",
        }, "-=0.3")
        .from(".hero-buttons a", {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        }, "-=0.2");

      // Scroll animations for sections
      gsap.utils.toArray('section').forEach((section: any) => {
        const cards = section.querySelectorAll('.animate-card');
        const title = section.querySelector('h2');
        
        if (cards.length) {
          gsap.from(cards, {
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          });
        }

        if (title) {
          gsap.from(title, {
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });
        }
      });

      // Skills animation
      gsap.from('.skill-item', {
        scrollTrigger: {
          trigger: '#about',
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        scale: 0.5,
        opacity: 0,
        rotation: -180,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (ScrollSmoother.get()) {
        ScrollSmoother.get()?.kill();
      }
      ctx.revert();
    };
  }, []);
} 