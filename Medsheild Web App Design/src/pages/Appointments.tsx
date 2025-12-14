import { useState } from 'react';
import { Calendar, Plus, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { mockAppointments, mockChiropractors } from '../lib/mockData';

export function Appointments() {
  const [selectedDate, setSelectedDate] = useState('2025-11-16');
  const [selectedChiropractor, setSelectedChiropractor] = useState('All');

  // Group appointments by time
  const timeSlots = [
    '09:00 AM',
    '09:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '01:00 PM',
    '01:30 PM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    '03:30 PM',
    '04:00 PM',
  ];

  const filteredAppointments = mockAppointments.filter((apt) => {
    const matchesDate = apt.date === selectedDate;
    const matchesChiropractor =
      selectedChiropractor === 'All' || apt.chiropractor === selectedChiropractor;
    return matchesDate && matchesChiropractor;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Checked in':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'In progress':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'Scheduled':
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
      case 'Completed':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  const navigateDate = (direction: 'prev' | 'next') => {
    const currentDate = new Date(selectedDate);
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction === 'next' ? 1 : -1));
    setSelectedDate(newDate.toISOString().split('T')[0]);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-2">Appointments</h1>
          <p className="text-gray-600">Manage and schedule patient appointments</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Appointment
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            {/* Date Navigation */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => navigateDate('prev')}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-gray-900">
                  {new Date(selectedDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <Button variant="outline" size="sm" onClick={() => navigateDate('next')}>
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedDate('2025-11-16')}
              >
                Today
              </Button>
            </div>

            {/* Chiropractor Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <Select value={selectedChiropractor} onValueChange={setSelectedChiropractor}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Chiropractors</SelectItem>
                  {mockChiropractors.map((doc) => (
                    <SelectItem key={doc.id} value={doc.name}>
                      {doc.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Schedule View */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {timeSlots.map((time) => {
                const appointment = filteredAppointments.find((apt) => apt.time === time);

                return (
                  <div key={time} className="flex gap-4 min-h-[60px]">
                    <div className="w-24 text-sm text-gray-600 pt-2">{time}</div>
                    <div className="flex-1">
                      {appointment ? (
                        <div className="p-4 border border-gray-200 rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="text-gray-900 mb-1">
                                {appointment.patientName}
                              </div>
                              <div className="text-sm text-gray-600">
                                {appointment.type} • {appointment.duration} min
                              </div>
                            </div>
                            <Badge className={getStatusColor(appointment.status)}>
                              {appointment.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{appointment.chiropractor}</span>
                            <span>•</span>
                            <span>{appointment.room}</span>
                          </div>
                        </div>
                      ) : (
                        <button className="w-full h-full border-2 border-dashed border-gray-200 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors text-sm text-gray-400">
                          Available
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Mini Calendar & Stats */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Total Today</div>
                <div className="text-gray-900">{filteredAppointments.length} appointments</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Checked In</div>
                <div className="text-gray-900">
                  {filteredAppointments.filter((a) => a.status === 'Checked in').length}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">In Progress</div>
                <div className="text-gray-900">
                  {filteredAppointments.filter((a) => a.status === 'In progress').length}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Remaining</div>
                <div className="text-gray-900">
                  {filteredAppointments.filter((a) => a.status === 'Scheduled').length}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Week</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => {
                  const date = new Date('2025-11-17');
                  date.setDate(date.getDate() + index);
                  const dateStr = date.toISOString().split('T')[0];
                  const count = mockAppointments.filter((a) => a.date === dateStr).length;

                  return (
                    <div
                      key={day}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer"
                      onClick={() => setSelectedDate(dateStr)}
                    >
                      <div className="text-sm">
                        <div className="text-gray-900">{day}</div>
                        <div className="text-xs text-gray-500">
                          {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{count} apt</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
