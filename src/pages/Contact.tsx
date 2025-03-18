
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-dark text-foreground">
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h1 className="section-title">
                Get in <span className="text-gold">Touch</span>
              </h1>
              <p className="section-subtitle">
                We'd love to hear from you. Reach out to us with any questions, feedback, or reservation inquiries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="animate-on-scroll">
                <div className="p-6 rounded-lg bg-dark-100 shadow-lg">
                  <h3 className="text-xl font-serif font-bold mb-6">Send Us a Message</h3>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="John Doe"
                          className="w-full px-4 py-2 rounded-md bg-dark border border-border focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="john@example.com"
                          className="w-full px-4 py-2 rounded-md bg-dark border border-border focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        placeholder="Reservation Inquiry"
                        className="w-full px-4 py-2 rounded-md bg-dark border border-border focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Write your message here..."
                        className="w-full px-4 py-2 rounded-md bg-dark border border-border focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                      ></textarea>
                    </div>
                    
                    <Button type="submit" fullWidth>
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="animate-on-scroll">
                <div className="mb-8">
                  <h3 className="text-xl font-serif font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-gold mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          123 Gourmet Avenue, Culinary District<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-gold mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium mb-1">Phone</h4>
                        <p className="text-muted-foreground">
                          Reservations: (555) 123-4567<br />
                          General Inquiries: (555) 987-6543
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-gold mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <p className="text-muted-foreground">
                          reservations@hungrybirds.com<br />
                          info@hungrybirds.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-gold mt-1 mr-3" />
                      <div>
                        <h4 className="font-medium mb-1">Opening Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Thursday: 5:00 PM - 10:00 PM<br />
                          Friday - Saturday: 4:00 PM - 11:00 PM<br />
                          Sunday: 5:00 PM - 9:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-ratio rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2a3bda9d0b%3A0x27bcc5bc598d29c7!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1655272875887!5m2!1sen!2s"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      title="Hungry Birds Restaurant Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
