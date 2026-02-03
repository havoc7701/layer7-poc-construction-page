import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Send, CheckCircle2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
export function ConstructionCard() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    toast.success("You're on the list!", {
      description: "We'll notify you the moment we launch.",
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-xl"
    >
      <div className="flex justify-center mb-8">
        <motion.div 
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="p-3 rounded-2xl bg-primary text-primary-foreground shadow-2xl"
        >
          <Layers className="w-10 h-10" />
        </motion.div>
      </div>
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground"
          >
            Refining the <span className="text-muted-foreground italic">interface.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-md mx-auto"
          >
            Something sophisticated is being built for Layer7. We are currently under construction.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-card/30 backdrop-blur-xl border-border/50 shadow-2xl overflow-hidden">
            <CardContent className="p-6">
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === 'loading'}
                      className="bg-secondary/50 border-input h-12 text-base focus-visible:ring-offset-0 focus-visible:ring-1 transition-all"
                      required
                    />
                    <Button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="h-12 px-8 font-semibold transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {status === 'loading' ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          Notify Me
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-2 text-primary"
                  >
                    <CheckCircle2 className="w-10 h-10 mb-2" />
                    <p className="font-medium">You're all set.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center items-center gap-6 pt-4"
        >
          <div className="h-px w-8 bg-border" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-foreground">
            Layer 7 Infrastructure
          </span>
          <div className="h-px w-8 bg-border" />
        </motion.div>
      </div>
    </motion.div>
  );
}