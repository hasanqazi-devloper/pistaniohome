'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search, 
  Tag,
  
  BookOpen,
  ChevronRight,
  ArrowDown
} from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Categories List
  const categories = ['All', 'Export Guide', 'Quality & Standards', 'Market Analysis', 'Pistachio Varieties'];

  // Sample Blog Posts Data
  const blogPosts = [
    {
      id: '1',
      title: 'Guide to Importing Iranian Pistachios: Quality, Grading & Logistics',
      slug: 'guide-to-importing-iranian-pistachios',
      excerpt: 'Comprehensive guide for international buyers on understanding pistachio sizes (ounce counts), moisture levels, and export documentation.',
      category: 'Export Guide',
      author: 'Ali Fathi Nasab',
      date: 'September 18, 2026',
      readTime: '6 min read',
      image: '/p4.png',
      featured: true
    },
    {
      id: '2',
      title: 'Understanding EU Aflatoxin Regulations for Pistachio Exports',
      slug: 'eu-aflatoxin-regulations-pistachio-export',
      excerpt: 'How strict HPLC laboratory testing and proper vacuum processing ensure 100% compliance with European import standards.',
      category: 'Quality & Standards',
      author: 'Hossein Fathi Nasab',
      date: 'September 12, 2026',
      readTime: '4 min read',
      image: '/about.png',
      featured: false
    },
    {
      id: '3',
      title: 'Akbari vs. Fandoghi: Which Pistachio Variety Fits Your Market?',
      slug: 'akbari-vs-fandoghi-pistachio-comparison',
      excerpt: 'A detailed commercial breakdown comparing long Super Long Akbari pistachios with round Fandoghi varieties for bulk trade.',
      category: 'Pistachio Varieties',
      author: 'Naser Haji Abadi',
      date: 'August 28, 2026',
      readTime: '5 min read',
      image: '/p2.png',
      featured: false
    },
    {
      id: '4',
      title: 'Global Pistachio Price Trends & Supply Chain Forecast 2026-2027',
      slug: 'global-pistachio-price-trends-2026',
      excerpt: 'In-depth market analysis on harvest yields in Razavi Khorasan, global demand shifts, and shipping route optimization.',
      category: 'Market Analysis',
      author: 'Hossein Fathi Nasab',
      date: 'August 15, 2026',
      readTime: '7 min read',
      image: '/p-bag.png',
      featured: false
    }
  ];

  // Filtering Logic
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

   

<section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-16 md:py-18 border-b border-[#1A4337]">
  {/* Background Image & Dark Overlay */}
  <div className="absolute inset-0 z-0">
    <Image
      src="https://images.unsplash.com/photo-1756749442845-4973b7cede48?auto=format&fit=crop&w=1920&q=100"
      alt="International Export Shipping Logistics"
      fill
      priority
      unoptimized
      className="object-cover object-center opacity-40 -scale-x-100"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B22]/90 via-[#0B2B22]/60 to-transparent" />
  </div>

  {/* Hero Content */}
  <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
    <div className="max-w-3xl space-y-7 text-left">
  

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight">
        <span className="text-[#F4F0E6]">EXPORTS &amp; TRADE </span>
        <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">BLOG</span>
      </h1>

      <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed">
        Latest market trends, quality compliance updates, and practical import guides directly from our executive team.
      </p>

      <div className="pt-2">
        <a
          href="#articles"
          className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
        >
          <span>EXPLORE LATEST ARTICLES</span>
          <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
        </a>
      </div>
    </div>
  </div>
</section>
      {/* 2. FEATURED ARTICLE SECTION */}
      {featuredPost && (
        <section className="py-12 bg-[#133A2E] border-b border-[#1A4337]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="bg-[#0B2B22] border border-[#1A4337] rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 group hover:border-[#C5922E]/50 transition-all duration-300 shadow-2xl">
              
              {/* Image Side */}
              <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-auto bg-[#133A2E] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-[#C5922E] text-[#0B2B22] px-3 py-1 rounded-full">
                    Featured Post
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-[#C5922E] font-bold">
                    <span className="bg-[#133A2E] border border-[#1A4337] px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1 text-[#F4F0E6]/60">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-[#F4F0E6] group-hover:text-[#C5922E] transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#F4F0E6]/70 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1A4337] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#F4F0E6]/80 font-medium">
                    <User className="w-4 h-4 text-[#C5922E]" />
                    <span>{featuredPost.author}</span>
                  </div>

                  <button className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#C5922E] hover:text-[#F4F0E6] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 3. FILTER & SEARCH BAR */}
      <section className="py-8 bg-[#0B2B22] border-b border-[#1A4337] sticky top-0 z-20 backdrop-blur-md bg-[#0B2B22]/90">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Categories Filter */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-300 border ${
                  selectedCategory === cat
                    ? 'bg-[#C5922E] text-[#0B2B22] border-[#C5922E]'
                    : 'bg-[#133A2E] text-[#F4F0E6]/80 border-[#1A4337] hover:border-[#C5922E]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#133A2E] border border-[#1A4337] focus:border-[#C5922E] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#F4F0E6] outline-none transition"
            />
            <Search className="w-4 h-4 text-[#C5922E] absolute left-3.5 top-3" />
          </div>

        </div>
      </section>

      {/* 4. ARTICLES GRID */}
      <section className="py-16 bg-[#0B2B22]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 space-y-3 bg-[#133A2E] border border-[#1A4337] rounded-3xl">
              <BookOpen className="w-10 h-10 text-[#C5922E] mx-auto opacity-60" />
              <h3 className="text-lg font-bold text-[#F4F0E6]">No articles found</h3>
              <p className="text-xs text-[#F4F0E6]/60">Try searching for another keyword or change the category filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-[#133A2E] border border-[#1A4337] rounded-3xl overflow-hidden flex flex-col justify-between hover:border-[#C5922E]/50 transition-all duration-300 group shadow-lg"
                >
                  <div>
                    {/* Card Image Header */}
                    <div className="relative h-56 w-full bg-[#0B2B22] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="text-[10px] font-black uppercase tracking-widest bg-[#0B2B22]/90 text-[#C5922E] border border-[#1A4337] px-3 py-1 rounded-full backdrop-blur-md">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-3 text-[11px] text-[#F4F0E6]/60">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#C5922E]" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#C5922E]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-[#F4F0E6] group-hover:text-[#C5922E] transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-[#F4F0E6]/70 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 space-y-4">
                    <div className="border-t border-[#1A4337] pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[11px] text-[#F4F0E6]/80">
                        <User className="w-3.5 h-3.5 text-[#C5922E]" />
                        <span>{post.author}</span>
                      </div>

                      <button className="inline-flex items-center gap-1 text-xs font-bold text-[#C5922E] hover:text-[#F4F0E6] transition-colors">
                        <span>Read</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* 5. NEWSLETTER / TRADE UPDATES SECTION */}
      <section className="py-16 bg-[#133A2E] border-t border-[#1A4337]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-[#C5922E]">Stay Informed</span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#F4F0E6]">
            Subscribe to Iranian Pistachio Market Reports
          </h2>
          <p className="text-xs sm:text-sm text-[#F4F0E6]/70 max-w-xl mx-auto leading-relaxed">
            Get monthly price updates, harvest reports, and regulatory compliance changes delivered directly to your inbox.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
            <input
              type="email"
              placeholder="Enter your corporate email..."
              className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] rounded-xl px-4 py-3 text-xs text-[#F4F0E6] outline-none transition"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all duration-300 shrink-0 shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}