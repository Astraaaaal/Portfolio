export const projects = [
  {
    slug: 'lymen-website',
    title: 'Lymen.fr',
    shortDesc: {
      fr: 'Entreprise tech française en cybersécurité et développement web.',
      en: 'French tech company in cybersecurity and web development.',
    },
    description: {
      fr: 'Site vitrine de Lymen, entreprise tech française spécialisée en cybersécurité automatisée (Aegis) et développement web premium (Genesis). Le site présente la vision, les services et les valeurs de l\'entreprise avec une identité visuelle premium.',
      en: 'Showcase website for Lymen, a French tech company specializing in automated cybersecurity (Aegis) and premium web development (Genesis). The site presents the company\'s vision, services and values with a premium visual identity.',
    },
    features: {
      fr: ['Présentation des filiales Aegis & Genesis', 'Design premium et animations soignées', 'Performance optimisée (Core Web Vitals)', 'Multilingue & responsive'],
      en: ['Aegis & Genesis subsidiary showcase', 'Premium design with polished animations', 'Optimized performance (Core Web Vitals)', 'Multilingual & responsive'],
    },
    stack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    tags: {
      fr: ['Web Design', 'Image de marque', 'SEO'],
      en: ['Web Design', 'Branding', 'SEO'],
    },
    image: 'https://placehold.co/800x500/6d28d9/ffffff?text=Lymen.fr',
    links: { live: 'https://lymen.fr', github: '#' },
    color: 'from-primary-500 to-accent-cyan',
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    shortDesc: {
      fr: 'Plateforme de vente en ligne complète.',
      en: 'Complete online sales platform.',
    },
    description: {
      fr: 'Application e-commerce full stack avec gestion de panier, paiement sécurisé et tableau de bord administrateur.',
      en: 'Full stack e-commerce application with cart management, secure payment and admin dashboard.',
    },
    features: {
      fr: ['Panier dynamique', 'Paiement Stripe', 'Dashboard admin', 'Gestion des stocks'],
      en: ['Dynamic cart', 'Stripe payment', 'Admin dashboard', 'Stock management'],
    },
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    tags: {
      fr: ['Full Stack', 'E-Commerce', 'Gestion de projet'],
      en: ['Full Stack', 'E-Commerce', 'Project Management'],
    },
    image: 'https://placehold.co/800x500/ec4899/ffffff?text=E-Commerce',
    links: { live: '#', github: '#' },
    color: 'from-accent-pink to-accent-orange',
  },
  {
    slug: 'mobile-app',
    title: 'Fitness Tracker',
    shortDesc: {
      fr: 'Application mobile de suivi sportif.',
      en: 'Mobile fitness tracking application.',
    },
    description: {
      fr: 'Application mobile pour le suivi d\'activités sportives avec statistiques détaillées et objectifs personnalisés.',
      en: 'Mobile app for tracking sports activities with detailed statistics and personalized goals.',
    },
    features: {
      fr: ['Suivi GPS', 'Statistiques détaillées', 'Objectifs personnalisés', 'Mode hors-ligne'],
      en: ['GPS tracking', 'Detailed statistics', 'Personalized goals', 'Offline mode'],
    },
    stack: ['React Native', 'Firebase', 'TypeScript'],
    tags: {
      fr: ['Mobile', 'Design UI/UX'],
      en: ['Mobile', 'UI/UX Design'],
    },
    image: 'https://placehold.co/800x500/10b981/ffffff?text=Fitness+App',
    links: { live: '#', github: '#' },
    color: 'from-accent-green to-accent-cyan',
  },
  {
    slug: 'design-system',
    title: 'Design System',
    shortDesc: {
      fr: 'Bibliothèque de composants UI réutilisables.',
      en: 'Reusable UI component library.',
    },
    description: {
      fr: 'Système de design complet avec composants React, documentation interactive et tokens de design.',
      en: 'Complete design system with React components, interactive documentation and design tokens.',
    },
    features: {
      fr: ['Composants modulaires', 'Documentation Storybook', 'Tokens de design', 'Tests unitaires'],
      en: ['Modular components', 'Storybook documentation', 'Design tokens', 'Unit tests'],
    },
    stack: ['React', 'Storybook', 'Tailwind CSS', 'Jest'],
    tags: {
      fr: ['Front End', 'Documentation', 'Design UI/UX'],
      en: ['Front End', 'Documentation', 'UI/UX Design'],
    },
    image: 'https://placehold.co/800x500/f97316/ffffff?text=Design+System',
    links: { live: '#', github: '#' },
    color: 'from-accent-orange to-accent-yellow',
  },
];
