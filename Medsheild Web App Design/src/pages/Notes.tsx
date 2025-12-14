import { useState } from 'react';
import { FileText, Calendar, User, Search, Plus, Lock, Save } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { mockNotes } from '../lib/mockData';

export function Notes() {
  const [selectedNote, setSelectedNote] = useState(mockNotes[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotes = mockNotes.filter(
    (note) =>
      note.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.chiropractor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Signed':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Left Sidebar - Notes List */}
      <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-900">Clinical Notes</h2>
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              New
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedNote?.id === note.id ? 'bg-primary/5 border-l-4 border-l-primary' : ''
              }`}
              onClick={() => setSelectedNote(note)}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="text-gray-900">{note.patientName}</div>
                <Badge className={getStatusColor(note.status)}>{note.status}</Badge>
              </div>
              <div className="text-sm text-gray-600 mb-2">{note.visitType}</div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(note.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {note.chiropractor}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Note Editor */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {selectedNote ? (
          <div className="p-8 max-w-4xl mx-auto space-y-6">
            {/* Note Header */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-gray-900 mb-2">{selectedNote.patientName}</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(selectedNote.date).toLocaleDateString()} at {selectedNote.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {selectedNote.chiropractor}
                      </span>
                      <Badge className={getStatusColor(selectedNote.status)}>
                        {selectedNote.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Visit Type: {selectedNote.visitType}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SOAP Note */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  SOAP Note
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Subjective */}
                <div className="space-y-2">
                  <Label htmlFor="subjective">Subjective</Label>
                  <Textarea
                    id="subjective"
                    value={selectedNote.subjective}
                    disabled={selectedNote.status === 'Signed'}
                    rows={4}
                    className="resize-none"
                  />
                  <p className="text-xs text-gray-500">
                    Patient's description of symptoms and concerns
                  </p>
                </div>

                {/* Objective */}
                <div className="space-y-2">
                  <Label htmlFor="objective">Objective</Label>
                  <Textarea
                    id="objective"
                    value={selectedNote.objective}
                    disabled={selectedNote.status === 'Signed'}
                    rows={4}
                    className="resize-none"
                  />
                  <p className="text-xs text-gray-500">
                    Clinical findings and measurements
                  </p>
                </div>

                {/* Assessment */}
                <div className="space-y-2">
                  <Label htmlFor="assessment">Assessment</Label>
                  <Textarea
                    id="assessment"
                    value={selectedNote.assessment}
                    disabled={selectedNote.status === 'Signed'}
                    rows={3}
                    className="resize-none"
                  />
                  <p className="text-xs text-gray-500">
                    Clinical diagnosis and evaluation
                  </p>
                </div>

                {/* Plan */}
                <div className="space-y-2">
                  <Label htmlFor="plan">Plan</Label>
                  <Textarea
                    id="plan"
                    value={selectedNote.plan}
                    disabled={selectedNote.status === 'Signed'}
                    rows={5}
                    className="resize-none"
                  />
                  <p className="text-xs text-gray-500">
                    Treatment plan and follow-up instructions
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between pt-4 border-t border-gray-200">
                  {selectedNote.status === 'Signed' ? (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Lock className="w-4 h-4" />
                      This note has been signed and locked
                    </div>
                  ) : (
                    <>
                      <Button variant="outline" className="gap-2">
                        <Save className="w-4 h-4" />
                        Save Draft
                      </Button>
                      <Button className="gap-2">
                        <Lock className="w-4 h-4" />
                        Sign and Lock Note
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            <div className="text-center">
              <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p>Select a note to view or edit</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
