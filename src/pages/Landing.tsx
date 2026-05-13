import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import { 
  ArrowRight, Shield, Zap, LineChart, 
  CheckCircle2, Users, Target, LayoutDashboard, 
  MessageSquare, Star, ChevronDown, Check
} from "lucide-react";
import { useState } from "react";

export default function Landing() {
  return (
    <div className="w-full">
      <HeroSection />
      <ProblemSolutionSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <SocialProofSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}

// ----------------------------------------------------------------------
// 1. Hero Section
// ----------------------------------------------------------------------
function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-paper">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--color-flamingo-light)_0%,_transparent_30%)] opacity-20" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,_var(--text-gray-300)_0%,_transparent_30%)] opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-flamingo/10 text-flamingo mb-8">
              <span className="flex h-2 w-2 rounded-full bg-flamingo mr-2"></span>
              Introducing Flamingo 2.0
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight text-ink mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transform Your Business <br className="hidden md:block"/> with <span className="text-flamingo">Flamingo</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Modern solutions designed to help brands grow faster, convert better, and scale smarter.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="lg" className="w-full sm:w-auto overflow-hidden group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Book a Demo
            </Button>
          </motion.div>

          <motion.div 
            className="mt-16 pt-10 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-sm text-gray-500 mb-6 font-medium uppercase tracking-wider">Trusted by innovative teams worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">
              {/* Fake Logos */}
              {['Acme Corp', 'GlobalNet', 'PiedPiper', 'Hooli', 'Initech'].map((company) => (
                <div key={company} className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-400 rounded" />
                  <span className="font-display font-bold text-xl">{company}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 2. Problem / Solution
// ----------------------------------------------------------------------
function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-white" id="problem-solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="bg-paper p-10 rounded-3xl">
            <h3 className="text-2xl font-display font-bold mb-6 text-gray-800">
              The Old Way
            </h3>
            <ul className="space-y-4">
              {[
                "Scattered tools and workflows",
                "Missed opportunities due to slow response times",
                "Complicated dashboards no one understands",
                "High costs with low conversion rates"
              ].map((text, i) => (
                <li key={i} className="flex items-start text-gray-600">
                  <XIcon className="min-w-6 w-6 h-6 mr-3 text-red-500/70 shrink-0" />
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-green-100 text-green-800 mb-6">
              The Solution
            </div>
            <h2 className="text-4xl font-display font-bold text-ink mb-6 leading-tight">
              A Unified Growth Engine
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Flamingo brings all your conversion tools under one roof. We streamline the complexities so you can focus on what actually matters—scaling your business and delivering value to your customers.
            </p>
            <ul className="space-y-4">
              {[
                "All-in-one centralized platform",
                "Real-time insights and analytics",
                "Intuitive, zero-learning-curve interface",
                "Proven to boost conversions by up to 43%"
              ].map((text, i) => (
                <li key={i} className="flex items-center text-ink font-medium">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-flamingo" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

function XIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  );
}

// ----------------------------------------------------------------------
// 3. Benefits Section
// ----------------------------------------------------------------------
function BenefitsSection() {
  const benefits = [
    {
      icon: <LineChart className="h-6 w-6 text-flamingo" />,
      title: "Real-time insights",
      description: "Make smarter decisions faster with data that updates the moment you need it."
    },
    {
      icon: <Zap className="h-6 w-6 text-flamingo" />,
      title: "Lightning fast execution",
      description: "Don't let slow load times kill your conversions. Built for extreme performance."
    },
    {
      icon: <Shield className="h-6 w-6 text-flamingo" />,
      title: "Enterprise-grade security",
      description: "Bank-level encryption ensures your lead and customer data is always protected."
    },
    {
      icon: <Users className="h-6 w-6 text-flamingo" />,
      title: "Collaborative workspaces",
      description: "Invite your entire team. Work together seamlessly without stepping on toes."
    },
    {
      icon: <Target className="h-6 w-6 text-flamingo" />,
      title: "Hyper-targeted campaigns",
      description: "Deliver the right message to the right person at the exact right moment."
    },
    {
      icon: <LayoutDashboard className="h-6 w-6 text-flamingo" />,
      title: "Customizable dashboards",
      description: "See what matters most to your business immediately upon login."
    }
  ];

  return (
    <section className="py-24 bg-paper" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ink mb-6">
            Everything you need to scale
          </h2>
          <p className="text-lg text-gray-600">
            We've thought of everything so you don't have to. Powerful features wrapped in an elegant interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-12 h-12 bg-flamingo/10 rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-ink mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 4. How It Works
// ----------------------------------------------------------------------
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Sign Up in Seconds",
      description: "Create your workspace and invite your team. No credit card required."
    },
    {
      number: "02",
      title: "Customize Your Setup",
      description: "Connect your tools and tailor Flamingo to your specific business needs."
    },
    {
      number: "03",
      title: "Grow Faster",
      description: "Launch campaigns, capture leads, and watch your conversion rates soar."
    }
  ];

  return (
    <section className="py-24 bg-ink text-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Simple 3-Step Process
          </h2>
          <p className="text-gray-400 text-lg">
            We removed the friction so you can get up and running today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-800" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-gray-900 rounded-full flex items-center justify-center border-4 border-ink relative z-10 mb-8 mx-auto">
                <span className="text-2xl font-bold font-display text-flamingo">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold font-display mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 5. Social Proof
// ----------------------------------------------------------------------
function SocialProofSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-1 mb-6 text-amber-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} fill="currentColor" strokeWidth={0} className="w-6 h-6" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
            "We increased conversions by 43% in 60 days using Flamingo."
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            — Sarah Jenkins, CMO at TechGrowth
          </p>
        </div>

        {/* Marquee or grid of testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              quote: "Flamingo replaced three different tools we were paying for. The ROI was immediate and obvious within week one.",
              author: "David Chen",
              role: "Founder, Bloom"
            },
            {
              quote: "The interface is so intuitive that we didn't even need to train our sales team. They just logged in and started closing.",
              author: "Emily Clark",
              role: "VP Sales, Nova"
            },
            {
              quote: "Our lead capture rate doubled. It's rare to find a tool that actually delivers on its marketing promises, but Flamingo does.",
              author: "Marcus Johnson",
              role: "Director of Marketing, Elevate"
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-paper p-8 rounded-3xl relative">
              <MessageSquare className="w-10 h-10 text-gray-200 absolute top-6 right-6" />
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10 font-medium">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${testimonial.author}`} alt={testimonial.author} />
                </div>
                <div>
                  <div className="font-bold text-ink">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 6. Features Section
// ----------------------------------------------------------------------
function FeaturesSection() {
  return (
    <section className="py-24 bg-paper" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* Feature 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
              Capture leads without lifting a finger
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our smart capture forms adapt to user behavior. Set them up once, and let our automated system handle the collection, scoring, and routing of your most valuable leads.
            </p>
            <ul className="space-y-4">
              {['Smart form logic', 'A/B testing built-in', 'Automated lead routing'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-ink">
                  <div className="w-6 h-6 rounded-full bg-flamingo/10 flex items-center justify-center text-flamingo">
                    <Check className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center justify-center aspect-video">
             <div className="w-full max-w-sm bg-paper rounded-xl p-6 shadow-sm border border-gray-100">
               <div className="h-4 w-24 bg-gray-200 rounded mb-4" />
               <div className="h-10 w-full bg-white rounded border border-gray-200 mb-3" />
               <div className="h-10 w-full bg-white rounded border border-gray-200 mb-4" />
               <div className="h-10 w-full bg-flamingo rounded text-center text-white flex items-center justify-center text-sm font-medium">Submit</div>
             </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 flex items-center justify-center aspect-video">
             <div className="w-full h-full bg-paper rounded-xl border border-gray-100 p-6 flex flex-col justify-end">
               <div className="flex items-end gap-4 h-48 w-full justify-between">
                 {[40, 70, 45, 90, 65, 100].map((h, i) => (
                   <div key={i} className="w-12 bg-flamingo rounded-t-sm" style={{height: `${h}%`}} />
                 ))}
               </div>
             </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
              Analytics that actually make sense
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Stop drowning in data. Flamingo distills complex metrics into actionable insights. See exactly where visitors drop off and how to fix it instantly.
            </p>
            <ul className="space-y-4">
              {['Visual funnel tracking', 'Custom report builder', 'Real-time alerts'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium text-ink">
                  <div className="w-6 h-6 rounded-full bg-flamingo/10 flex items-center justify-center text-flamingo">
                    <Check className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 7. Pricing Preview
// ----------------------------------------------------------------------
function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-24 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 leading-relaxed">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ink mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            No hidden fees. Cancel anytime.
          </p>
          
          <div className="inline-flex items-center p-1 bg-paper rounded-full">
            <button 
              className={cn("px-6 py-2 rounded-full text-sm font-medium transition-colors", !annual ? "bg-white shadow text-ink" : "text-gray-500")}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button 
              className={cn("px-6 py-2 rounded-full text-sm font-medium transition-colors", annual ? "bg-white shadow text-ink" : "text-gray-500")}
              onClick={() => setAnnual(true)}
            >
              Annually <span className="text-flamingo text-xs ml-1">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Plan 1 */}
          <div className="bg-paper p-8 rounded-3xl border border-gray-100">
            <h3 className="text-xl font-bold font-display mb-2">Starter</h3>
            <p className="text-gray-500 text-sm mb-6">Perfect for small projects</p>
            <div className="mb-8">
              <span className="text-4xl font-display font-bold">${annual ? '29' : '39'}</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <Button variant="outline" className="w-full mb-8" size="lg">Start Free Trial</Button>
            <ul className="space-y-4">
              {['Up to 1,000 visitors', 'Basic analytics', 'Standard support'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-3" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Plan 2 - Highlighted */}
          <div className="bg-ink p-8 rounded-3xl border border-gray-800 relative transform md:-translate-y-4 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-flamingo text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              Most Popular
            </div>
            <h3 className="text-xl font-bold font-display mb-2 text-white">Pro</h3>
            <p className="text-gray-400 text-sm mb-6">For growing businesses</p>
            <div className="mb-8 text-white">
              <span className="text-4xl font-display font-bold">${annual ? '79' : '99'}</span>
              <span className="text-gray-400">/mo</span>
            </div>
            <Button className="w-full mb-8 bg-flamingo hover:bg-flamingo-light text-white" size="lg">Start Free Trial</Button>
            <ul className="space-y-4 text-gray-300">
              {['Up to 10,000 visitors', 'Advanced analytics', 'Priority support', 'A/B testing', 'Custom domains'].map((item, i) => (
                <li key={i} className="flex items-center text-sm">
                  <Check className="w-4 h-4 text-flamingo mr-3" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Plan 3 */}
          <div className="bg-paper p-8 rounded-3xl border border-gray-100">
            <h3 className="text-xl font-bold font-display mb-2">Scale</h3>
            <p className="text-gray-500 text-sm mb-6">For large scale operations</p>
            <div className="mb-8">
              <span className="text-4xl font-display font-bold">${annual ? '199' : '249'}</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <Button variant="outline" className="w-full mb-8" size="lg">Contact Sales</Button>
            <ul className="space-y-4">
              {['Unlimited visitors', 'Custom reporting', '24/7 dedicated support', 'White-labeling', 'SLA guaranteed'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-3" /> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 8. FAQ Section
// ----------------------------------------------------------------------
function FaqSection() {
  const faqs = [
    {
      q: "How does Flamingo work?",
      a: "Flamingo integrates directly with your website via a lightweight script. Once installed, you can manage campaigns, forms, and analytics directly from our dashboard without touching any code."
    },
    {
      q: "Is there a free trial?",
      a: "Yes! We offer a 14-day free trial on all plans. No credit card is required to sign up."
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. There are no long-term contracts. You can cancel your subscription at any time from your account settings."
    },
    {
      q: "How long does setup take?",
      a: "Most customers are up and running in less than 5 minutes. The installation is as simple as copy-pasting a tag into your website's head."
    },
    {
      q: "Do you offer support?",
      a: "Yes, we provide email support for all plans, and priority chat/phone support for Pro and Scale plans."
    }
  ];

  return (
    <section className="py-24 bg-paper" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
      <button 
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-display font-semibold text-ink">{question}</span>
        <ChevronDown className={cn("w-5 h-5 text-gray-400 transition-transform duration-200", isOpen ? "rotate-180" : "")} />
      </button>
      <div 
        className={cn(
          "px-6 overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 9. Final CTA
// ----------------------------------------------------------------------
function FinalCtaSection() {
  return (
    <section className="py-24 bg-flamingo">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
          Ready to Grow with Flamingo?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-10">
          Join thousands of businesses that use Flamingo to build faster and convert better.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-white text-flamingo hover:bg-gray-100 hover:text-flamingo text-lg px-8 h-14">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
}
