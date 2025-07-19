import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { insertWaitlistEntrySchema, type InsertWaitlistEntry } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, CheckCircle } from "lucide-react";

export default function WaitlistForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertWaitlistEntry>({
    resolver: zodResolver(insertWaitlistEntrySchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertWaitlistEntry) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: () => {
      setShowSuccess(true);
      form.reset();
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    },
    onError: (error: any) => {
      if (error.message.includes("409")) {
        toast({
          title: "Already registered",
          description: "This email is already on our waitlist!",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    },
  });

  const onSubmit = (data: InsertWaitlistEntry) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {!showSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass p-8 rounded-3xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your Full Name"
                          className="glass-input"
                          disabled={mutation.isPending}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300 text-sm" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Your Email Address"
                          className="glass-input"
                          disabled={mutation.isPending}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300 text-sm" />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join the Waitlist"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="glass p-8 rounded-3xl text-center bg-gradient-to-r from-green-400/20 to-emerald-500/20"
          >
            <CheckCircle className="mx-auto h-16 w-16 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">🎉 You're in!</h3>
            <p className="text-white/90 text-lg">
              Thank you for joining our waitlist. We'll notify you when InnovateLab launches!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
