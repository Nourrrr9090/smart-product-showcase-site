import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Activity, Shield, Smartphone, Droplets, Battery, Clock } from "lucide-react";
import smartwatchHero from "@/assets/smartwatch-hero.jpg";
import fitnessFeature from "@/assets/fitness-feature.jpg";
import notificationsFeature from "@/assets/notifications-feature.jpg";
import waterproofFeature from "@/assets/waterproof-feature.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Now Available
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                SmartWatch X
                <span className="block text-2xl lg:text-3xl font-normal mt-2 text-white/90">
                  Your Future on Your Wrist
                </span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
                Advanced fitness tracking, seamless connectivity, and premium design. 
                Experience the next generation of wearable technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  <Heart className="mr-2" />
                  Buy Now - $299
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={smartwatchHero} 
                  alt="SmartWatch X" 
                  className="w-full max-w-md mx-auto drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
                />
              </div>
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-150 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every feature designed to enhance your daily life and keep you connected to what matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Activity className="text-white" />
                </div>
                <CardTitle>Advanced Fitness Tracking</CardTitle>
                <CardDescription>
                  Monitor heart rate, steps, calories, and 50+ workout modes with precision sensors.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={fitnessFeature} 
                  alt="Fitness tracking" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="text-white" />
                </div>
                <CardTitle>Smart Notifications</CardTitle>
                <CardDescription>
                  Stay connected with calls, messages, and app notifications right on your wrist.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={notificationsFeature} 
                  alt="Smart notifications" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="text-white" />
                </div>
                <CardTitle>Water Resistant</CardTitle>
                <CardDescription>
                  5ATM water resistance means you can swim, shower, and live without limits.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={waterproofFeature} 
                  alt="Water resistant" 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Battery className="text-white" />
                </div>
                <CardTitle>Long Battery Life</CardTitle>
                <CardDescription>
                  Up to 7 days of battery life with typical use, 30 days in power saving mode.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-white" />
                </div>
                <CardTitle>Premium Materials</CardTitle>
                <CardDescription>
                  Aerospace-grade aluminum case with sapphire crystal display for ultimate durability.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Clock className="text-white" />
                </div>
                <CardTitle>Always-On Display</CardTitle>
                <CardDescription>
                  Bright, crisp AMOLED display that's always visible, even in direct sunlight.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The SmartWatch X has completely changed how I track my fitness. 
                  The accuracy is incredible and the battery life is amazing!"
                </p>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Fitness Enthusiast</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Love the sleek design and smart features. Perfect for my busy lifestyle 
                  and the notifications keep me connected without being overwhelmed."
                </p>
                <div className="font-semibold">Michael Chen</div>
                <div className="text-sm text-muted-foreground">Business Professional</div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Best smartwatch I've ever owned. The water resistance is fantastic 
                  for swimming and the build quality feels premium."
                </p>
                <div className="font-semibold">Emily Rodriguez</div>
                <div className="text-sm text-muted-foreground">Athlete</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Choose Your SmartWatch X
            </h2>
            <p className="text-xl text-muted-foreground">
              Premium technology at an accessible price
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Sport Edition</CardTitle>
                <div className="text-3xl font-bold text-primary mt-4">$249</div>
                <CardDescription>Perfect for fitness enthusiasts</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Aluminum case
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Sport band
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    All health features
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    5ATM water resistance
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Choose Sport
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-elegant transition-all duration-300 border-primary/50 bg-gradient-subtle">
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Standard Edition</CardTitle>
                <div className="text-3xl font-bold text-primary mt-4">$299</div>
                <CardDescription>The perfect balance of features and style</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Premium aluminum case
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Choice of bands
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    All health features
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Always-on display
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Extended warranty
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="cta">
                  Buy Now
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-elegant transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro Edition</CardTitle>
                <div className="text-3xl font-bold text-primary mt-4">$399</div>
                <CardDescription>Ultimate premium experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Titanium case
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Milanese loop band
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Sapphire crystal display
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Exclusive watch faces
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Premium accessories
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Choose Pro
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Lifestyle?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join millions who've already upgraded to SmartWatch X. 
            Free shipping, 30-day returns, and 2-year warranty included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Heart className="mr-2" />
              Order Now - $299
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
            >
              Find a Store
            </Button>
          </div>
          <div className="mt-8 text-white/60">
            ✓ Free shipping worldwide • ✓ 30-day money back • ✓ 2-year warranty
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">SmartWatch X</h3>
              <p className="text-background/70">
                The future of wearable technology, designed for your lifestyle.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-background/70">
                <li>Features</li>
                <li>Specifications</li>
                <li>Compatibility</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/70">
                <li>Help Center</li>
                <li>Warranty</li>
                <li>Contact Us</li>
                <li>Service Centers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/70">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            © 2024 SmartWatch X. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
