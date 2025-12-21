import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, FileText, Upload, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import { mockPatients } from '../lib/mockData';

export function PatientProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const patient = mockPatients.find((p) => p.id === id);

  if (!patient) {
    return (
      <div className="p-8">
        <div className="text-center">
          <h2 className="text-gray-900 mb-2">Patient not found</h2>
          <Button onClick={() => navigate('/patients')}>Back to Patients</Button>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'New':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
      case 'Completed':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  return (
    <div className="p-8 space-y-6">
      {/* Back Button */}
      <Button
        variant="ghost"
        onClick={() => navigate('/patients')}
        className="gap-2 -ml-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Patients
      </Button>

      {/* Patient Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-gray-900">{patient.name}</h1>
              <Badge className={getStatusColor(patient.status)}>{patient.status}</Badge>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span>ID: {patient.id}</span>
              <span>DOB: {new Date(patient.dateOfBirth).toLocaleDateString()}</span>
              <span>Primary: {patient.primaryChiropractor}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Upload className="w-4 h-4" />
              Upload Document
            </Button>
            <Button variant="outline" className="gap-2" onClick={() => navigate('/notes')}>
              <FileText className="w-4 h-4" />
              Add Note
            </Button>
            <Button className="gap-2" onClick={() => navigate('/appointments')}>
              <Calendar className="w-4 h-4" />
              Schedule Appointment
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Information */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="text-gray-900">{patient.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-gray-900">{patient.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">Address</div>
                    <div className="text-gray-900">{patient.address}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Appointment */}
            <Card>
              <CardHeader>
                <CardTitle>Next Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                {patient.nextAppointment ? (
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-gray-500">Date & Time</div>
                      <div className="text-gray-900">{patient.nextAppointment}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Provider</div>
                      <div className="text-gray-900">{patient.primaryChiropractor}</div>
                    </div>
                    <Button variant="outline" className="w-full" onClick={() => navigate('/appointments')}>
                      View Details
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-500 mb-3">No upcoming appointments</p>
                    <Button className="w-full" onClick={() => navigate('/appointments')}>
                      Schedule Now
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Recent Visits */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Visits</CardTitle>
            </CardHeader>
            <CardContent>
              {patient.visits.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Visit Type</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {patient.visits.map((visit) => (
                      <TableRow key={visit.id}>
                        <TableCell className="text-gray-900">
                          {new Date(visit.date).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-gray-700">{visit.type}</TableCell>
                        <TableCell className="text-gray-700">{visit.reason}</TableCell>
                        <TableCell className="text-gray-700">{visit.chiropractor}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(visit.status)}>{visit.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" onClick={() => navigate('/notes')}>
                            View Notes
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No visits recorded yet
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Visit History</CardTitle>
            </CardHeader>
            <CardContent>
              {patient.visits.length > 0 ? (
                <div className="space-y-4">
                  {patient.visits.map((visit, index) => (
                    <div
                      key={visit.id}
                      className="flex gap-4 pb-4 border-b border-gray-200 last:border-0"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        {index < patient.visits.length - 1 && (
                          <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-gray-900">{visit.type}</div>
                          <div className="text-sm text-gray-500">
                            {new Date(visit.date).toLocaleDateString()}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">{visit.reason}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-gray-500">{visit.chiropractor}</span>
                          <Badge className={getStatusColor(visit.status)}>{visit.status}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No visit history available
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notes Tab */}
        <TabsContent value="notes">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Clinical Notes</CardTitle>
              <Button className="gap-2" onClick={() => navigate('/notes')}>
                <FileText className="w-4 h-4" />
                Add Note
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                View all clinical notes in the{' '}
                <button
                  onClick={() => navigate('/notes')}
                  className="text-primary hover:underline"
                >
                  Notes section
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Documents</CardTitle>
              <Button className="gap-2">
                <Upload className="w-4 h-4" />
                Upload Document
              </Button>
            </CardHeader>
            <CardContent>
              {patient.documents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {patient.documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-4 border border-gray-200 rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
                    >
                      <FileText className="w-8 h-8 text-primary mb-3" />
                      <div className="text-gray-900 mb-1">{doc.name}</div>
                      <div className="text-sm text-gray-500 mb-2">{doc.type}</div>
                      <div className="text-xs text-gray-400">
                        {new Date(doc.date).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No documents uploaded yet. Click "Upload Document" to add files.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
