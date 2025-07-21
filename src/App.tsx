import React from 'react';
import { Menu, Clock, MapPin, Phone, Instagram, Facebook, Twitter, ChefHat, Utensils, Coffee, Leaf, Award, Users } from 'lucide-react';
import { MenuItem } from './components/MenuItem';
import { menuItems } from './data/menuItems';

function App() {
  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80"
            alt="South Indian Thali" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <nav className="relative z-10 flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-emerald-50">Dakshin Delights</h1>
          <Menu className="text-emerald-50 w-6 h-6 cursor-pointer md:hidden" />
          <div className="hidden md:flex space-x-8 text-emerald-50">
            <a href="#menu" className="hover:text-emerald-200 transition">Menu</a>
            <a href="#about" className="hover:text-emerald-200 transition">About</a>
            <a href="#contact" className="hover:text-emerald-200 transition">Contact</a>
            <a href="#reservations" className="hover:text-emerald-200 transition">Reservations</a>
          </div>
        </nav>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-emerald-50 mb-6">
            Authentic South Indian Cuisine
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl">
            Experience the rich flavors and traditional vegetarian recipes from the heart of South India
          </p>
          <a href="#menu" className="bg-emerald-600 text-emerald-50 px-8 py-3 rounded-full hover:bg-emerald-700 transition">
            Explore Our Menu
          </a>
        </div>
      </header>

      {/* Specialties Section */}
      <section className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-emerald-900">Our Specialties</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <ChefHat className="w-8 h-8 text-emerald-600" />,
              title: "Traditional Dosas",
              description: "Crispy, golden dosas served with authentic chutneys and sambar"
            },
            {
              icon: <Utensils className="w-8 h-8 text-emerald-600" />,
              title: "Kerala Specialties",
              description: "From appam to Kerala parotta, taste the coastal flavors"
            },
            {
              icon: <Coffee className="w-8 h-8 text-emerald-600" />,
              title: "Filter Coffee",
              description: "Authentic South Indian filter coffee brewed to perfection"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-emerald-900">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-emerald-900">
        <h3 className="text-3xl font-bold text-center mb-16 text-emerald-50">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Leaf className="w-12 h-12 text-emerald-300" />,
              title: "100% Vegetarian",
              description: "Pure vegetarian cuisine prepared with the finest ingredients"
            },
            {
              icon: <ChefHat className="w-12 h-12 text-emerald-300" />,
              title: "Expert Chefs",
              description: "Our chefs bring decades of experience from South India"
            },
            {
              icon: <Award className="w-12 h-12 text-emerald-300" />,
              title: "Authentic Recipes",
              description: "Traditional recipes passed down through generations"
            },
            {
              icon: <Users className="w-12 h-12 text-emerald-300" />,
              title: "Family Friendly",
              description: "Perfect ambiance for family gatherings and celebrations"
            }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-emerald-800 rounded-lg transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-3 text-emerald-50">{item.title}</h4>
              <p className="text-emerald-100">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Dishes */}
      <section id="menu" className="bg-white py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-emerald-900">Featured Dishes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-emerald-900 text-emerald-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-8">Visit Us</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6" />
                <p>123 Culinary Street, Foodie City, FC 12345</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6" />
                <div>
                  <p>Mon-Sat: 11:00 AM - 10:00 PM</p>
                  <p>Sun: 11:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-emerald-200" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-emerald-200" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-emerald-200" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-8">Make a Reservation</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-emerald-800 placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-emerald-800 placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 rounded-lg bg-emerald-800 placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-lg bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="time"
                  className="w-full px-4 py-2 rounded-lg bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <button className="w-full bg-emerald-600 text-emerald-50 px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
                Reserve a Table
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-200 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Dakshin Delights. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;