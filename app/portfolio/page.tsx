'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { 
  Github, 
  ExternalLink, 
  Star, 
  GitFork,
  Calendar,
  Tag,
  ArrowRight
} from 'lucide-react'

const PortfolioPage = () => {
  // Function to get appropriate image based on project category
  const getProjectImage = (category: string, projectName: string) => {
    const imageMap: { [key: string]: string } = {
      'Gaming': '/images/portfoliosection.jpg',
      'Enterprise': '/images/softwaredevelopment.jpg',
      'Logistics': '/images/portfoliosection.jpg',
      'AI/Bot': '/images/aiml.jpg',
      'DevTools': '/images/softwaredevelopment.jpg',
      'Web': '/images/portfoliosection.jpg',
      'Mobile': '/images/portfoliosection.jpg',
      'Blockchain': '/images/portfoliosection.jpg',
      'E-commerce': '/images/portfoliosection.jpg',
      'Finance': '/images/softwaredevelopment.jpg',
      'Backend': '/images/softwaredevelopment.jpg'
    }
    return imageMap[category] || '/images/portfoliosection.jpg'
  }

  const projects = [
    {
      id: 1,
      name: 'Arena SOL',
      description: 'A cutting-edge 3D gaming platform designed to deliver an immersive browser-based gaming experience. Developed with Next.js, TypeScript, and Three.js.',
      image: getProjectImage('Gaming', 'Arena SOL'),
      technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Three.js', 'Tailwind CSS', 'WebGL'],
      category: 'Gaming',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/arena-sol',
      liveUrl: 'https://arenastudio.com',
      projectUrl: '/portfolio/arena-sol',
      stars: 42,
      forks: 18,
      createdDate: '2024-01-15',
      updatedDate: '2024-12-01'
    },
    {
      id: 2,
      name: 'Accounting System',
      description: 'A comprehensive Accounting and Financial Management System built with ASP.NET Core and C#. Designed for enterprise use with financial reporting and compliance.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'SQL Server', 'Bootstrap', 'Chart.js'],
      category: 'Enterprise',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/accounting-system',
      liveUrl: 'https://accounting-demo.vercel.app',
      projectUrl: '/portfolio/accounting-system',
      stars: 28,
      forks: 12,
      createdDate: '2024-02-20',
      updatedDate: '2024-11-28'
    },
    {
      id: 3,
      name: 'A.K. Traders®',
      description: 'A modern Next.js web application built for A.K. Traders, a leading freight forwarding and customs clearance company operating in Pakistan since 1974.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma ORM'],
      category: 'Logistics',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/ak-traders',
      liveUrl: 'https://ak-traders-demo.vercel.app',
      projectUrl: '/portfolio/ak-traders',
      stars: 35,
      forks: 15,
      createdDate: '2024-03-10',
      updatedDate: '2024-11-25'
    },
    {
      id: 4,
      name: 'Amazon Chat Assistant',
      description: 'An AI-powered Discord bot designed to educate and assist Amazon FBA sellers. Built in Python with natural language processing and community management features.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Python 3.x', 'Discord.py', 'SQLite/PostgreSQL', 'Discord OAuth2', 'Natural Language Processing', 'Pytest'],
      category: 'AI/Bot',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/amazon-chat-assistant',
      liveUrl: 'https://amazon-bot-demo.vercel.app',
      projectUrl: '/portfolio/amazon-chat-assistant',
      stars: 19,
      forks: 8,
      createdDate: '2024-04-05',
      updatedDate: '2024-11-20'
    },
    {
      id: 5,
      name: 'Backend Generator',
      description: 'A powerful CLI tool built with TypeScript that automates the creation of NestJS backends with GraphQL support. Streamlines development by generating boilerplate code.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['TypeScript', 'Node.js', 'NestJS', 'Commander.js', 'Inquirer.js', 'Jest'],
      category: 'DevTools',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/backend-generator',
      liveUrl: 'https://backend-generator-demo.vercel.app',
      projectUrl: '/portfolio/backend-generator',
      stars: 31,
      forks: 14,
      createdDate: '2024-05-12',
      updatedDate: '2024-11-15'
    },
    {
      id: 6,
      name: 'Best Version 1',
      description: 'A modern, high-performance website built with Next.js 14 and TypeScript, showcasing clean design, responsive layouts, and cutting-edge web technologies.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Jest', 'React Testing Library'],
      category: 'Web',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/best-version-1',
      liveUrl: 'https://best-version-1-demo.vercel.app',
      projectUrl: '/portfolio/best-version-1',
      stars: 24,
      forks: 9,
      createdDate: '2024-06-18',
      updatedDate: '2024-11-10'
    },
    {
      id: 7,
      name: 'Car Maintenance Tracker',
      description: 'A comprehensive mobile application designed to help users manage their vehicles efficiently. Built with Flutter for frontend and NestJS + MongoDB for backend.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Flutter 3.x', 'Provider', 'SQLite', 'Material Design 3', 'NestJS', 'MongoDB'],
      category: 'Mobile',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/car-maintenance-tracker',
      liveUrl: 'https://car-tracker-demo.vercel.app',
      projectUrl: '/portfolio/car-maintenance-tracker',
      stars: 18,
      forks: 7,
      createdDate: '2024-07-10',
      updatedDate: '2024-11-05'
    },
    {
      id: 8,
      name: 'CRM System',
      description: 'A full-featured Customer Relationship Management platform built with ASP.NET Core and C#. Provides businesses with centralized solution for managing customers and sales.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'SQL Server', 'Bootstrap', 'Chart.js'],
      category: 'Enterprise',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/crm-system',
      liveUrl: 'https://crm-demo.vercel.app',
      projectUrl: '/portfolio/crm-system',
      stars: 22,
      forks: 11,
      createdDate: '2024-08-15',
      updatedDate: '2024-10-30'
    },
    {
      id: 9,
      name: 'CV & Portfolio Management',
      description: 'A Python-based application designed to automate the creation, organization, and optimization of professional CVs and portfolios.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Python 3.x', 'Python-docx', 'Pandas', 'CSV', 'Markdown', 'Git'],
      category: 'DevTools',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/cv-portfolio-management',
      liveUrl: 'https://cv-portfolio-demo.vercel.app',
      projectUrl: '/portfolio/cv-portfolio-management',
      stars: 15,
      forks: 6,
      createdDate: '2024-09-20',
      updatedDate: '2024-10-25'
    },
    {
      id: 10,
      name: 'DEGN Buy DApp',
      description: 'A decentralized trading platform built on the Solana blockchain, designed for secure, efficient, and real-time token trading with Jupiter aggregator integration.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['NestJS', 'Node.js', 'MongoDB', 'Mongoose ODM', 'Solana Web3.js', 'Jupiter API'],
      category: 'Blockchain',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/degn-buy-dapp',
      liveUrl: 'https://degn-buy-dapp.vercel.app',
      projectUrl: '/portfolio/degn-buy-dapp',
      stars: 15,
      forks: 6,
      createdDate: '2024-09-20',
      updatedDate: '2024-10-25'
    },
    {
      id: 11,
      name: 'DEGN Website',
      description: 'A comprehensive blockchain and Web3 platform website built with Next.js 15 and React 19. Features modern design, responsive layouts, and cutting-edge web technologies.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Jest', 'React Testing Library'],
      category: 'Web',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/degn-website',
      liveUrl: 'https://degn-website.vercel.app',
      projectUrl: '/portfolio/degn-website',
      stars: 12,
      forks: 5,
      createdDate: '2024-10-01',
      updatedDate: '2024-10-20'
    },
    {
      id: 12,
      name: 'Discord Verify Bot',
      description: 'A Discord bot designed to verify users and manage server access. Built with Python and Discord.py, featuring role management and automated verification processes.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Python 3.x', 'Discord.py', 'SQLite', 'Discord OAuth2', 'Pytest', 'asyncio'],
      category: 'AI/Bot',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/discord-verify-bot',
      liveUrl: 'https://discord-bot-demo.vercel.app',
      projectUrl: '/portfolio/discord-verify-bot',
      stars: 8,
      forks: 3,
      createdDate: '2024-10-10',
      updatedDate: '2024-10-15'
    },
    {
      id: 13,
      name: 'Dispatching System',
      description: 'A comprehensive logistics platform for managing deliveries, tracking shipments, and optimizing routes. Built with Next.js 15 and modern web technologies.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Jest', 'React Testing Library'],
      category: 'Logistics',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/dispatching-system',
      liveUrl: 'https://dispatching-system.vercel.app',
      projectUrl: '/portfolio/dispatching-system',
      stars: 20,
      forks: 8,
      createdDate: '2024-10-15',
      updatedDate: '2024-10-18'
    },
    {
      id: 14,
      name: 'E-commerce Boutique',
      description: 'A full-stack e-commerce solution designed to deliver a seamless shopping experience and efficient business management.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js 14', 'React 19', 'TypeScript', 'Tailwind CSS', 'NestJS', 'MongoDB'],
      category: 'E-commerce',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/ecommerce-boutique',
      liveUrl: 'https://ecommerce-boutique.vercel.app',
      projectUrl: '/portfolio/ecommerce-boutique',
      stars: 25,
      forks: 10,
      createdDate: '2024-10-20',
      updatedDate: '2024-10-22'
    },
    {
      id: 15,
      name: 'ERP SaaS Solution',
      description: 'A comprehensive, multi-tenant enterprise management system built with ASP.NET Core 8 using Domain-Driven Design (DDD) and SOLID principles.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['ASP.NET Core 8', 'C#', 'SQL Server', 'GraphQL', 'REST API', 'Redis'],
      category: 'Enterprise',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/erp-saas-solution',
      liveUrl: 'https://erp-saas-demo.vercel.app',
      projectUrl: '/portfolio/erp-saas-solution',
      stars: 30,
      forks: 12,
      createdDate: '2024-10-25',
      updatedDate: '2024-10-28'
    },
    {
      id: 16,
      name: 'EverX Node',
      description: 'A modern Node.js development and deployment platform designed to streamline the end-to-end workflow for developers and organizations.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js'],
      category: 'DevTools',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/everx-node',
      liveUrl: 'https://everx-node.vercel.app',
      projectUrl: '/portfolio/everx-node',
      stars: 18,
      forks: 7,
      createdDate: '2024-10-30',
      updatedDate: '2024-11-02'
    },
    {
      id: 17,
      name: 'Food Company E-commerce',
      description: 'A full-stack web application designed for seamless online food shopping and business management.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js 14', 'React 19', 'TypeScript', 'Tailwind CSS', 'NestJS', 'MongoDB'],
      category: 'E-commerce',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/food-company-ecommerce',
      liveUrl: 'https://food-company-ecommerce.vercel.app',
      projectUrl: '/portfolio/food-company-ecommerce',
      stars: 22,
      forks: 9,
      createdDate: '2024-11-05',
      updatedDate: '2024-11-08'
    },
    {
      id: 18,
      name: 'HRM System',
      description: 'An enterprise-grade web application developed with ASP.NET Core and C# to streamline and automate HR operations within large organizations.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'SQL Server', 'Bootstrap', 'Chart.js'],
      category: 'Enterprise',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/hrm-system',
      liveUrl: 'https://hrm-system-demo.vercel.app',
      projectUrl: '/portfolio/hrm-system',
      stars: 26,
      forks: 11,
      createdDate: '2024-11-10',
      updatedDate: '2024-11-12'
    },
    {
      id: 19,
      name: 'Hypelet',
      description: 'A modern influencer marketing platform built with Next.js and TypeScript, designed to bridge the gap between brands and influencers.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'],
      category: 'Web',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/hypelet',
      liveUrl: 'https://hypelet.vercel.app',
      projectUrl: '/portfolio/hypelet',
      stars: 14,
      forks: 6,
      createdDate: '2024-11-15',
      updatedDate: '2024-11-18'
    },
    {
      id: 20,
      name: 'Inventory Management',
      description: 'A modern web application designed to help businesses efficiently track, manage, and optimize inventory across multiple locations.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['React', 'Next.js', 'TypeScript', 'Redux', 'Material UI', 'Chart.js'],
      category: 'Enterprise',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/inventory-management',
      liveUrl: 'https://inventory-management.vercel.app',
      projectUrl: '/portfolio/inventory-management',
      stars: 20,
      forks: 8,
      createdDate: '2024-11-20',
      updatedDate: '2024-11-22'
    },
    {
      id: 21,
      name: 'Juice Company',
      description: 'A modern food and beverage e-commerce solution built to showcase products, manage sales, and streamline business operations.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js'],
      category: 'E-commerce',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/juice-company',
      liveUrl: 'https://juice-company.vercel.app',
      projectUrl: '/portfolio/juice-company',
      stars: 16,
      forks: 7,
      createdDate: '2024-11-25',
      updatedDate: '2024-11-27'
    },
    {
      id: 22,
      name: 'Localization System',
      description: 'A comprehensive backend platform designed to manage multi-language content, translations, and cultural adaptations for global applications.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Python 3.x', 'Django', 'PostgreSQL', 'RESTful API', 'gettext', 'pytest'],
      category: 'DevTools',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/localization-system',
      liveUrl: 'https://localization-system.vercel.app',
      projectUrl: '/portfolio/localization-system',
      stars: 12,
      forks: 5,
      createdDate: '2024-11-30',
      updatedDate: '2024-12-02'
    },
    {
      id: 23,
      name: 'MERN Stack CMS',
      description: 'A full-featured Content Management System designed to simplify digital content creation, publishing, and website management.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['React 18', 'TypeScript', 'Redux Toolkit', 'Material-UI', 'Node.js', 'Express.js'],
      category: 'Web',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/mern-stack-cms',
      liveUrl: 'https://mern-stack-cms.vercel.app',
      projectUrl: '/portfolio/mern-stack-cms',
      stars: 24,
      forks: 9,
      createdDate: '2024-12-05',
      updatedDate: '2024-12-07'
    },
    {
      id: 24,
      name: 'Paper Company',
      description: 'A modern industrial platform designed for a paper manufacturing business. It highlights the company\'s products, manufacturing capabilities, and sustainability initiatives.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Jest'],
      category: 'Web',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/paper-company',
      liveUrl: 'https://paper-company.vercel.app',
      projectUrl: '/portfolio/paper-company',
      stars: 10,
      forks: 4,
      createdDate: '2024-12-10',
      updatedDate: '2024-12-12'
    },
    {
      id: 25,
      name: 'Payday',
      description: 'A modern financial services platform designed to provide loan management, financial tools, and business analytics for individuals and enterprises.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js'],
      category: 'Finance',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/payday',
      liveUrl: 'https://payday.vercel.app',
      projectUrl: '/portfolio/payday',
      stars: 28,
      forks: 11,
      createdDate: '2024-12-15',
      updatedDate: '2024-12-17'
    },
    {
      id: 26,
      name: 'PerkUP',
      description: 'A multi-platform loyalty and rewards management system built to help businesses create and manage customer engagement programs.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'SQL Server', 'React', 'Flutter'],
      category: 'Enterprise',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/perkup',
      liveUrl: 'https://perkup.vercel.app',
      projectUrl: '/portfolio/perkup',
      stars: 32,
      forks: 13,
      createdDate: '2024-12-20',
      updatedDate: '2024-12-22'
    },
    {
      id: 27,
      name: 'Portfolio Website',
      description: 'A modern and responsive developer portfolio website built to showcase projects, skills, and professional experience with a clean, engaging design.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
      category: 'Web',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/portfolio-website',
      liveUrl: 'https://portfolio-website.vercel.app',
      projectUrl: '/portfolio/portfolio-website',
      stars: 35,
      forks: 15,
      createdDate: '2024-12-25',
      updatedDate: '2024-12-27'
    },
    {
      id: 28,
      name: 'POS System',
      description: 'A comprehensive Point of Sale (POS) system designed for retail businesses to efficiently manage sales, inventory, and customers.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework Core', 'Bootstrap', 'Chart.js'],
      category: 'Enterprise',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/pos-system',
      liveUrl: 'https://pos-system.vercel.app',
      projectUrl: '/portfolio/pos-system',
      stars: 18,
      forks: 8,
      createdDate: '2024-12-30',
      updatedDate: '2025-01-02'
    },
    {
      id: 29,
      name: 'Punjab AC',
      description: 'A modern content management system built with Next.js and TypeScript, designed to help businesses and organizations efficiently create, organize, and publish digital content.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Jest', 'React Testing Library'],
      category: 'Web',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/punjab-ac',
      liveUrl: 'https://punjab-ac.vercel.app',
      projectUrl: '/portfolio/punjab-ac',
      stars: 14,
      forks: 6,
      createdDate: '2025-01-05',
      updatedDate: '2025-01-07'
    },
    {
      id: 30,
      name: 'Software Company',
      description: 'A professional website designed for a software company, built with Next.js and TypeScript. The platform showcases company services, portfolio projects, team members, and business information.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Jest', 'React Testing Library'],
      category: 'Web',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/software-company',
      liveUrl: 'https://software-company.vercel.app',
      projectUrl: '/portfolio/software-company',
      stars: 16,
      forks: 7,
      createdDate: '2025-01-10',
      updatedDate: '2025-01-12'
    },
    {
      id: 31,
      name: 'Splendid',
      description: 'A modern creative agency website built with Next.js and TypeScript, designed to showcase creative services, portfolio projects, and client engagement tools.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Jest', 'React Testing Library'],
      category: 'Web',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/splendid',
      liveUrl: 'https://splendid.vercel.app',
      projectUrl: '/portfolio/splendid',
      stars: 20,
      forks: 9,
      createdDate: '2025-01-15',
      updatedDate: '2025-01-17'
    },
    {
      id: 32,
      name: 'Stationary',
      description: 'A modern e-commerce platform for stationary and office supplies built with Next.js, React, and TypeScript, designed to provide a seamless online shopping experience.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js'],
      category: 'E-commerce',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/stationary',
      liveUrl: 'https://stationary.vercel.app',
      projectUrl: '/portfolio/stationary',
      stars: 22,
      forks: 10,
      createdDate: '2025-01-20',
      updatedDate: '2025-01-22'
    },
    {
      id: 33,
      name: 'Table Tennis Backend',
      description: 'A robust backend API built with Node.js and Express.js for managing table tennis tournaments. The system streamlines tournament operations by handling player registration, match scheduling, scoring, and tournament administration.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Node.js', 'Express.js', 'JavaScript', 'TypeScript', 'MongoDB', 'Mongoose ODM'],
      category: 'Backend',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/table-tennis-backend',
      liveUrl: 'https://table-tennis-backend.vercel.app',
      projectUrl: '/portfolio/table-tennis-backend',
      stars: 13,
      forks: 5,
      createdDate: '2025-01-25',
      updatedDate: '2025-01-27'
    },
    {
      id: 34,
      name: 'Taxi Application',
      description: 'A full-stack taxi booking and management platform designed to provide a seamless experience for riders and drivers. The system offers real-time tracking, secure payments, route optimization, and performance analytics.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Ant Design', 'React Redux', 'Google Maps API'],
      category: 'Mobile',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/taxi-application',
      liveUrl: 'https://taxi-application.vercel.app',
      projectUrl: '/portfolio/taxi-application',
      stars: 26,
      forks: 11,
      createdDate: '2025-01-30',
      updatedDate: '2025-02-02'
    },
    {
      id: 35,
      name: 'Writer Website',
      description: 'A professional platform for writers and content creators, designed to showcase portfolios, manage content, and engage clients efficiently.',
      image: getProjectImage('Enterprise', 'Accounting System'),
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Jest', 'React Testing Library'],
      category: 'Web',
      status: 'Live',
      githubUrl: 'https://github.com/osamaqaseem39/writer-website',
      liveUrl: 'https://writer-website.vercel.app',
      projectUrl: '/portfolio/writer-website',
      stars: 19,
      forks: 8,
      createdDate: '2025-02-05',
      updatedDate: '2025-02-07'
    }
  ]

  const categories = ['All', 'Gaming', 'Enterprise', 'Logistics', 'AI/Bot', 'DevTools', 'Web', 'Mobile', 'Blockchain', 'E-commerce', 'Finance', 'Backend']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
            <span className="gradient-text">Our Portfolio</span>
          </h1>
          <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
            Explore our latest work and innovative solutions that showcase our 
            technical expertise and creative problem-solving.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-accent to-purple-500 text-primary'
                    : 'bg-secondary/50 text-text/70 hover:text-accent hover:bg-accent/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="tech-card group">
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-accent/50">
                      {project.name.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-text group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex items-center space-x-3 text-text/60">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-4 h-4" />
                        <span className="text-sm">{project.forks}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/50 border border-accent/20 rounded-full text-xs text-text/70"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-secondary/50 border border-accent/20 rounded-full text-xs text-text/70">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-text/60 mb-4">
                    <div className="flex items-center space-x-1">
                      <Tag className="w-4 h-4" />
                      <span>{project.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Updated {formatDate(project.updatedDate)}</span>
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">View Code</span>
                    </Link>
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </Link>
                    )}
                  </div>
                  <Link
                    href={project.projectUrl}
                    className="flex items-center space-x-2 text-text/70 hover:text-accent transition-colors"
                  >
                    <span className="text-sm font-medium">View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-accent/10 to-purple-500/10 rounded-2xl p-8 lg:p-12 border border-accent/20">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6">
                Want to see more?
              </h2>
              <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
                Check out our complete portfolio on GitHub and see all our open-source projects.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  href="https://github.com/osamaqaseem39?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent to-purple-500 text-primary font-semibold rounded-lg hover:shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View All Projects</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center space-x-2 px-8 py-4 border-2 border-accent/30 text-accent font-semibold rounded-lg hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                  <span>Start a Project</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PortfolioPage
