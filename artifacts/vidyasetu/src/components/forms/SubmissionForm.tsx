import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { UploadCloud, Image as ImageIcon, X } from "lucide-react";

const formSchema = z.object({
  studentName: z.string().min(2, "Student name is required"),
  worksheetCode: z.string().length(6, "Code must be exactly 6 characters").toUpperCase(),
});

interface SubmissionFormProps {
  onSubmitStart: (data: any) => void;
}

export function SubmissionForm({ onSubmitStart }: SubmissionFormProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      worksheetCode: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!imagePreview) {
      form.setError("root", { message: "Please upload a photo of the worksheet" });
      return;
    }
    onSubmitStart({ ...values, image: imagePreview });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="studentName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Aarav Patel" className="h-12 text-lg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="worksheetCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Worksheet Code (from teacher)</FormLabel>
              <FormControl>
                <Input 
                  placeholder="e.g. M4W01X" 
                  className="h-14 text-2xl tracking-[0.25em] font-mono text-center uppercase placeholder:tracking-normal placeholder:font-sans placeholder:text-sm" 
                  {...field} 
                  onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                  maxLength={6}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormItem>
          <FormLabel>Upload Photo</FormLabel>
          <div className="mt-2">
            {!imagePreview ? (
              <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-primary/20 rounded-xl cursor-pointer bg-primary/5 hover:bg-primary/10 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <UploadCloud className="w-10 h-10 text-primary/60 mb-3" />
                  <p className="mb-2 text-sm text-primary font-medium">Tap to take a photo or upload</p>
                  <p className="text-xs text-slate-500">Ensure handwriting is clearly visible</p>
                </div>
                <input type="file" accept="image/*" capture="environment" className="hidden" onChange={handleImageChange} />
              </label>
            ) : (
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover" />
                <Button 
                  type="button" 
                  variant="destructive" 
                  size="icon" 
                  className="absolute top-2 right-2 h-8 w-8 rounded-full"
                  onClick={() => setImagePreview(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-white text-xs flex items-center justify-center backdrop-blur-sm">
                  <ImageIcon className="w-3 h-3 mr-2" /> Photo attached
                </div>
              </div>
            )}
          </div>
          {form.formState.errors.root && (
            <p className="text-sm font-medium text-destructive mt-2">{form.formState.errors.root.message}</p>
          )}
        </FormItem>

        <Button type="submit" className="w-full h-14 text-lg font-bold rounded-xl mt-4" disabled={!imagePreview}>
          Submit Worksheet
        </Button>
      </form>
    </Form>
  );
}
