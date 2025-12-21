import { DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export function Billing() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-gray-900 mb-2">Billing</h1>
        <p className="text-gray-600">Manage billing and payments</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Billing Module
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <DollarSign className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-gray-900 mb-2">Coming Soon</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              The billing module is currently in development. This section will allow you to
              manage invoices, payments, and insurance claims.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
