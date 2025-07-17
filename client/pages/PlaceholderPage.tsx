import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({
  title,
  description = "Deze pagina is momenteel in ontwikkeling.",
}: PlaceholderPageProps) {
  return (
    <Layout>
      <div className="min-h-[50vh] flex items-center justify-center py-16">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Construction className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">{description}</p>
            <p className="text-sm text-gray-500 mb-6">
              Vraag de ontwikkelaar om deze pagina verder in te vullen.
            </p>
            <Button asChild>
              <a href="/">Terug naar home</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
