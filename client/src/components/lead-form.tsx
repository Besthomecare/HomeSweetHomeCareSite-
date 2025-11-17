import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const leadFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  preferredContactTime: z.string().min(1, "Please select a preferred time"),
  city: z.string().min(1, "Please select your city/area"),
  helpNeeded: z.array(z.string()).min(1, "Please select at least one service"),
  otherHelp: z.string().optional(),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

const helpOptions = [
  { id: "companionship", label: "Companionship" },
  { id: "transportation", label: "Transportation" },
  { id: "medication", label: "Medication Reminders" },
  { id: "housekeeping", label: "Light Housekeeping" },
  { id: "meals", label: "Meal Prep" },
  { id: "other", label: "Other" },
];

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtherField, setShowOtherField] = useState(false);

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      preferredContactTime: "",
      city: "",
      helpNeeded: [],
      otherHelp: "",
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          email: "",
          phone: data.phone,
          message: `Preferred Contact Time: ${data.preferredContactTime}\nCity/Area: ${data.city}\nHelp Needed: ${data.helpNeeded.join(", ")}${data.otherHelp ? `\nOther: ${data.otherHelp}` : ""}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Request Received!",
          description: "We'll contact you within 24 hours. Thank you!",
        });
        form.reset();
        setShowOtherField(false);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please call us at (941) 200-0848.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-primary mb-2 text-center">
        Get Your Free Care Assessment
      </h3>
      <p className="text-gray-600 text-center mb-6 text-base">
        We respond within 24 hours. No obligation.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">Full Name *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your full name"
                    className="text-lg py-6"
                    data-testid="input-full-name"
                  />
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
                <FormLabel className="text-base font-semibold">Phone *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="(941) 555-1234"
                    className="text-lg py-6"
                    data-testid="input-phone"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="preferredContactTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">Preferred Contact Time *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="text-lg py-6" data-testid="select-contact-time">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="morning">Morning</SelectItem>
                    <SelectItem value="afternoon">Afternoon</SelectItem>
                    <SelectItem value="evening">Evening</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold">City/Area *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="text-lg py-6" data-testid="select-city">
                      <SelectValue placeholder="Select your area" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sarasota">Sarasota</SelectItem>
                    <SelectItem value="bradenton">Bradenton</SelectItem>
                    <SelectItem value="lakewood-ranch">Lakewood Ranch</SelectItem>
                    <SelectItem value="siesta-key">Siesta Key</SelectItem>
                    <SelectItem value="longboat-key">Longboat Key</SelectItem>
                    <SelectItem value="venice">Venice</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="helpNeeded"
            render={() => (
              <FormItem>
                <FormLabel className="text-base font-semibold mb-3 block">
                  Help Needed *
                </FormLabel>
                <div className="space-y-3">
                  {helpOptions.map((option) => (
                    <FormField
                      key={option.id}
                      control={form.control}
                      name="helpNeeded"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(option.id)}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...field.value, option.id]
                                  : field.value.filter((val) => val !== option.id);
                                field.onChange(newValue);
                                if (option.id === "other") {
                                  setShowOtherField(checked as boolean);
                                }
                              }}
                              data-testid={`checkbox-${option.id}`}
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-base cursor-pointer">
                            {option.label}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {showOtherField && (
            <FormField
              control={form.control}
              name="otherHelp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold">Please specify</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Tell us what you need"
                      className="text-lg py-6"
                      data-testid="input-other-help"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-lg py-6 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg"
            data-testid="button-submit-lead-form"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Request My Free Care Assessment"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LeadForm;
