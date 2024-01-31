import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const particlesOptions = {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    number: {
      value: 8,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    color: {
      value: '#248',
    },
    shape: {
      type: 'square',
      options: {
        sides: 50,
      },
    },
    opacity: {
      value: 0.3,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    rotate: {
      value: 0,
      random: true,
      direction: 'clockwise',
      animation: {
        enable: true,
        speed: 5,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 300,
      color: '#111',
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: ['grab'],
      },
      onclick: {
        enable: false,
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  background: {
    color: 'rgba(244,245,247,255)',
    image: '',
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
};
const particlesInit = async (main) => {
  await loadFull(main);
};

const Particle = () => (
  <>
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
    />
  </>
);
export default Particle;
