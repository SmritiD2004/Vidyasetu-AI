import { AppLayout } from "@/components/layout/AppLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Server, Database, Braces, Route } from "lucide-react";

export default function Developer() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Developer Panel</h1>
          <p className="text-muted-foreground mt-2">Internal system architecture and mock state.</p>
        </div>

        <Tabs defaultValue="architecture" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="architecture"><Server className="w-4 h-4 mr-2"/> Architecture</TabsTrigger>
            <TabsTrigger value="database"><Database className="w-4 h-4 mr-2"/> Database</TabsTrigger>
            <TabsTrigger value="components"><Braces className="w-4 h-4 mr-2"/> Components</TabsTrigger>
            <TabsTrigger value="api"><Route className="w-4 h-4 mr-2"/> API</TabsTrigger>
          </TabsList>
          
          <TabsContent value="architecture" className="p-6 bg-slate-900 text-green-400 font-mono rounded-xl mt-4">
            <pre className="whitespace-pre-wrap">{`[WhatsApp Bot / Web Client]
       │
       ▼
[Upload Endpoint (Node.js)]
       │
       ├─► (Image) ──► [OCR Engine (Vision API)] ──┐
       │                                           │
       └─► (Metadata) ─┐                           ▼
                       │                    [Text Extraction]
                       ▼                           │
              [Postgres Database]                  ▼
                       ▲                 [LLM Grading & Analysis]
                       │                           │
                       └───────────────────────────┘
                               │
                               ▼
                    [Teacher Dashboard UI]`}</pre>
          </TabsContent>
          
          <TabsContent value="database" className="mt-4">
            <div className="bg-card border rounded-lg p-6 font-mono text-sm">
              <p className="text-muted-foreground mb-4">// In-Memory Stores</p>
              <div className="space-y-4 text-slate-800">
                <div>const students = [ 25 items ]</div>
                <div>const assignments = [ 8 items ]</div>
                <div>const submissions = [ 18 items ]</div>
                <div>const insights = {`{ total: 25, rate: 72 }`}</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="components" className="mt-4">
            <div className="bg-card border rounded-lg p-6 font-mono text-sm">
              <ul className="space-y-2">
                <li>AppLayout</li>
                <li className="pl-4">├── TopNav</li>
                <li className="pl-4">├── TeacherSidebar</li>
                <li className="pl-4">└── main (Pages)</li>
                <li className="pl-8">├── Dashboard</li>
                <li className="pl-8">├── CreateAssignment</li>
                <li className="pl-8">├── Insights</li>
                <li className="pl-8">└── ParentUpload</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="api" className="mt-4">
            <div className="bg-card border rounded-lg p-6 font-mono text-sm">
               <ul className="space-y-2 text-slate-800">
                <li><span className="text-blue-600 font-bold">GET</span> /api/assignments</li>
                <li><span className="text-green-600 font-bold">POST</span> /api/assignments</li>
                <li><span className="text-green-600 font-bold">POST</span> /api/submissions/upload</li>
                <li><span className="text-blue-600 font-bold">GET</span> /api/insights/class</li>
                <li><span className="text-blue-600 font-bold">GET</span> /api/remediation/suggestions</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
