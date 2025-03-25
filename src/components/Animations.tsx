'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export function useInitialAnimation() {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Wait for DOM to be ready
    const ctx = gsap.context(() => {
      // Initial page load animation
      gsap.set([".hero-avatar", ".hero-subtitle", ".hero-buttons"], { opacity: 0 });
      gsap.set("h1", { opacity: 0, y: 20 });
      
      // Avatar animation
      const avatarTimeline = gsap.timeline({ delay: 0.5 });
      avatarTimeline
        .from(".hero-avatar", {
          scale: 0.5,
          opacity: 0,
          rotation: -180,
          duration: 1.2,
          ease: "elastic.out(1, 0.3)",
        })
        .from(".hero-avatar .gradient-bg", {
          scale: 1.5,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }, "-=0.8")
        .to(".hero-avatar", {
          y: "10px",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });

      // Text animations
      const heroTimeline = gsap.timeline({ delay: 0.8 });
      
      // Title animation
      heroTimeline
        .to("h1", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
        })
        .to(".hero-subtitle", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.4")
        .to(".hero-buttons a", {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.7)",
        }, "-=0.4");

      // Add hover animations for buttons
      gsap.utils.toArray<HTMLAnchorElement>(".hero-buttons a").forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.05,
            duration: 0.2,
            ease: "power1.out",
          });
        });
        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            duration: 0.2,
            ease: "power1.in",
          });
        });
      });

      // Scroll animations for sections
      gsap.utils.toArray<HTMLElement>('section').forEach((section) => {
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

      // Add parallax effect to the hero section
      gsap.to(".hero-avatar", {
        scrollTrigger: {
          trigger: "#home",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 100,
        opacity: 0.5,
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      ctx.revert();
    };
  }, []);
} 