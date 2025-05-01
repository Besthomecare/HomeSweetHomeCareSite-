import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Link } from "wouter";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY_INFO, SERVICE_AREAS, SERVICES } from "@/lib/constants";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  careFor: z.string().optional(),
  services: z.array(z.string()).optional(),
  message: z.string().optional(),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to the privacy policy"
  }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      careFor: "",
      services: [],
      message: "",
      consent: false,
    },
  });

  const sendContactForm = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `There was a problem sending your message: ${error.message}`,
        variant: "destructive",
      });
    },
    onSettled: () => {
      setSubmitting(false);
    }
  });

  function onSubmit(data: ContactFormValues) {
    setSubmitting(true);
    sendContactForm.mutate(data);
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Contact Us
            </h2>
            <p className="mb-8 text-lg">
              We're here to answer your questions and discuss how we can help your loved one 
              maintain independence and dignity at home.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Our Office</h3>
                  <p>
                    {COMPANY_INFO.address.street}<br/>
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <Phone className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Phone</h3>
                  <p>
                    <a 
                      href="tel:(941) 200-0848" 
                      className="hover:text-accent transition-colors"
                    >
                      (941) 200-0848
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <Mail className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Email</h3>
                  <p>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="hover:text-accent transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary bg-opacity-50 p-3 rounded-full mr-4 flex-shrink-0">
                  <Clock className="text-accent" size={20} />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl mb-2">Office Hours</h3>
                  <p>
                    Monday - Friday: {COMPANY_INFO.hours.weekdays}<br/>
                    Saturday: {COMPANY_INFO.hours.saturday}<br/>
                    Sunday: {COMPANY_INFO.hours.sunday}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#F8F5F2] p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-xl mb-3">Service Areas</h3>
              <p className="mb-4">We proudly serve the following areas in Florida:</p>
              <div className="grid grid-cols-2 gap-2">
                {SERVICE_AREAS.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <MapPin className="text-accent mr-2 flex-shrink-0" size={16} />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-[#F8F5F2] p-8 rounded-lg">
            <h2 className="font-heading text-2xl font-bold text-primary mb-6">
              Request a Free Care Assessment
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="careFor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Care is for:</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Please select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="parent">Parent</SelectItem>
                          <SelectItem value="spouse">Spouse</SelectItem>
                          <SelectItem value="self">Self</SelectItem>
                          <SelectItem value="other">Other Family Member</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="services"
                  render={() => (
                    <FormItem>
                      <FormLabel>Services Needed (select all that apply):</FormLabel>
                      <div className="space-y-2">
                        {SERVICES.map((service) => (
                          <FormField
                            key={service.id}
                            control={form.control}
                            name="services"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={service.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(service.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...(field.value || []), service.id])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== service.id
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    {service.title}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information:</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4} 
                          className="resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                          I consent to Home Sweet Home Care collecting and processing my personal data in accordance with the{" "}
                          <Link href="/privacy">
                            <a className="text-accent hover:underline">Privacy Policy</a>
                          </Link>
                          . *
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-opacity-90 text-white font-semibold py-3"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
