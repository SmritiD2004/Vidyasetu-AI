import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Loader2, CheckCircle, Share2, Copy } from "lucide-react";
import { useAppContext } from "@/lib/context/AppContext";

const formSchema = z.object({
  subject: z.enum(["Math", "Science", "English", "Hindi"], { required_error: "Subject is required" }),
  grade: z.string().min(1, "Grade is required"),
  title: z.string().min(3, "Title must be at least 3 characters"),
  dueDate: z.string().min(1, "Due date is required"),
});

export function AssignmentForm() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [successData, setSuccessData] = useState<{ id: string, code: string } | null>(null);
  const { assignments, setAssignments } = useAppContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: undefined,
      grade: "",
      title: "",
      dueDate: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsGenerating(true);
    
    // Simulate AI generation / saving delay
    setTimeout(() => {
      const subPrefix = values.subject.substring(0, 3).toUpperCase();
      const codeStr = Math.random().toString(36).substring(2, 8).toUpperCase();
      const newId = `${subPrefix}_G${values.grade}_W${Math.floor(Math.random()*100).toString().padStart(2, '0')}`;
      
      const newAssignment = {
        id: newId,
        title: values.title,
        subject: values.subject as any,
        grade: parseInt(values.grade),
        dueDate: values.dueDate,
        submissionCode: codeStr,
        status: "active" as const,
      };

      setAssignments([...assignments, newAssignment]);
      setSuccessData({ id: newId, code: codeStr });
      setIsGenerating(false);
    }, 1500);
  };

  const whatsappMessage = successData ? `📚 *New Worksheet Assigned!*\n\nSubject: ${form.getValues("subject")}\nTopic: ${form.getValues("title")}\nDue Date: ${form.getValues("dueDate")}\n\n*Submission Code:* ${successData.code}\n\nPlease submit via Vidyasetu: https://vidyasetu.app/parent` : "";

  if (successData) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center space-y-6">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-green-900">Assignment Created!</h3>
          <p className="text-green-700 mt-2">Share this code with your students' parents.</p>
        </div>
        
        <div className="bg-white rounded-lg p-6 max-w-sm mx-auto shadow-sm border border-green-100">
          <p className="text-sm text-slate-500 uppercase font-semibold mb-1">Submission Code</p>
          <p className="text-4xl font-mono font-bold tracking-widest text-primary">{successData.code}</p>
        </div>

        <div className="bg-white rounded-lg p-4 max-w-md mx-auto text-left border text-sm text-slate-700 whitespace-pre-wrap font-mono">
          {whatsappMessage}
        </div>

        <div className="flex gap-4 justify-center">
          <Button onClick={() => navigator.clipboard.writeText(whatsappMessage)} variant="outline">
            <Copy className="w-4 h-4 mr-2" /> Copy Message
          </Button>
          <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white">
            <Share2 className="w-4 h-4 mr-2" /> Share on WhatsApp
          </Button>
        </div>
        
        <div className="pt-4">
          <Button variant="link" onClick={() => {
            setSuccessData(null);
            form.reset();
          }}>Create Another Assignment</Button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-xl">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Math">Math</SelectItem>
                    <SelectItem value="Science">Science</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="grade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Grade</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[3, 4, 5, 6, 7, 8].map(g => (
                      <SelectItem key={g} value={g.toString()}>Grade {g}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Worksheet Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Fractions & Division W1" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isGenerating} size="lg">
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Generating AI Metrics...
            </>
          ) : (
            "Create Assignment & Generate Code"
          )}
        </Button>
      </form>
    </Form>
  );
}
