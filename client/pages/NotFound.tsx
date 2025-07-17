import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[50vh] flex items-center justify-center py-16">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <CardTitle className="text-4xl font-bold text-gray-900 mb-2">
              404
            </CardTitle>
            <CardTitle className="text-xl font-medium text-gray-700">
              Pagina niet gevonden
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              De pagina die u zoekt bestaat niet of is verplaatst.
            </p>
            <Button asChild>
              <Link to="/">Terug naar home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default NotFound;
