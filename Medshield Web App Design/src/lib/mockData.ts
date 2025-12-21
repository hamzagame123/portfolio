// Mock data for the Medshield application

export const mockPatients = [
  {
    id: 'PT001',
    name: 'Sarah Johnson',
    dateOfBirth: '1985-03-15',
    phone: '(555) 123-4567',
    email: 'sarah.j@email.com',
    address: '123 Maple Street, Springfield, IL 62701',
    status: 'Active',
    lastVisit: '2025-11-10',
    nextAppointment: '2025-11-18 10:00 AM',
    primaryChiropractor: 'Dr. Michael Chen',
    visits: [
      {
        id: 'V001',
        date: '2025-11-10',
        type: 'Follow-up',
        status: 'Completed',
        chiropractor: 'Dr. Michael Chen',
        reason: 'Lower back adjustment'
      },
      {
        id: 'V002',
        date: '2025-11-03',
        type: 'Follow-up',
        status: 'Completed',
        chiropractor: 'Dr. Michael Chen',
        reason: 'Routine adjustment'
      },
      {
        id: 'V003',
        date: '2025-10-27',
        type: 'Initial consultation',
        status: 'Completed',
        chiropractor: 'Dr. Michael Chen',
        reason: 'Lower back pain assessment'
      }
    ],
    documents: [
      {
        id: 'DOC001',
        name: 'Intake Form',
        type: 'Intake form',
        date: '2025-10-27',
        url: '#'
      },
      {
        id: 'DOC002',
        name: 'X-ray Report',
        type: 'X-ray report',
        date: '2025-10-27',
        url: '#'
      }
    ]
  },
  {
    id: 'PT002',
    name: 'Michael Rodriguez',
    dateOfBirth: '1992-07-22',
    phone: '(555) 234-5678',
    email: 'mrodriguez@email.com',
    address: '456 Oak Avenue, Springfield, IL 62702',
    status: 'Active',
    lastVisit: '2025-11-14',
    nextAppointment: '2025-11-20 2:00 PM',
    primaryChiropractor: 'Dr. Sarah Williams',
    visits: [
      {
        id: 'V004',
        date: '2025-11-14',
        type: 'Follow-up',
        status: 'Completed',
        chiropractor: 'Dr. Sarah Williams',
        reason: 'Neck adjustment'
      }
    ],
    documents: []
  },
  {
    id: 'PT003',
    name: 'Emily Chen',
    dateOfBirth: '1978-11-05',
    phone: '(555) 345-6789',
    email: 'emily.chen@email.com',
    address: '789 Pine Road, Springfield, IL 62703',
    status: 'New',
    lastVisit: '2025-11-15',
    nextAppointment: '2025-11-17 9:00 AM',
    primaryChiropractor: 'Dr. Michael Chen',
    visits: [
      {
        id: 'V005',
        date: '2025-11-15',
        type: 'Initial consultation',
        status: 'Completed',
        chiropractor: 'Dr. Michael Chen',
        reason: 'Shoulder pain evaluation'
      }
    ],
    documents: [
      {
        id: 'DOC003',
        name: 'Intake Form',
        type: 'Intake form',
        date: '2025-11-15',
        url: '#'
      }
    ]
  },
  {
    id: 'PT004',
    name: 'David Thompson',
    dateOfBirth: '1988-04-12',
    phone: '(555) 456-7890',
    email: 'dthompson@email.com',
    address: '321 Elm Street, Springfield, IL 62704',
    status: 'Active',
    lastVisit: '2025-11-12',
    nextAppointment: null,
    primaryChiropractor: 'Dr. Sarah Williams',
    visits: [],
    documents: []
  },
  {
    id: 'PT005',
    name: 'Jennifer Martinez',
    dateOfBirth: '1995-09-18',
    phone: '(555) 567-8901',
    email: 'jmartinez@email.com',
    address: '654 Birch Lane, Springfield, IL 62705',
    status: 'Active',
    lastVisit: '2025-11-13',
    nextAppointment: '2025-11-19 11:30 AM',
    primaryChiropractor: 'Dr. Michael Chen',
    visits: [],
    documents: []
  },
  {
    id: 'PT006',
    name: 'Robert Anderson',
    dateOfBirth: '1982-02-28',
    phone: '(555) 678-9012',
    email: 'randerson@email.com',
    address: '987 Cedar Court, Springfield, IL 62706',
    status: 'Inactive',
    lastVisit: '2025-09-20',
    nextAppointment: null,
    primaryChiropractor: 'Dr. Sarah Williams',
    visits: [],
    documents: []
  },
  {
    id: 'PT007',
    name: 'Lisa Wong',
    dateOfBirth: '1990-06-10',
    phone: '(555) 789-0123',
    email: 'lwong@email.com',
    address: '147 Willow Way, Springfield, IL 62707',
    status: 'New',
    lastVisit: '2025-11-16',
    nextAppointment: '2025-11-22 3:00 PM',
    primaryChiropractor: 'Dr. Michael Chen',
    visits: [],
    documents: []
  }
];

export const mockAppointments = [
  {
    id: 'APT001',
    patientId: 'PT003',
    patientName: 'Emily Chen',
    date: '2025-11-17',
    time: '09:00 AM',
    duration: 30,
    type: 'Follow-up',
    chiropractor: 'Dr. Michael Chen',
    status: 'Scheduled',
    room: 'Room 1'
  },
  {
    id: 'APT002',
    patientId: 'PT001',
    patientName: 'Sarah Johnson',
    date: '2025-11-18',
    time: '10:00 AM',
    duration: 30,
    type: 'Follow-up',
    chiropractor: 'Dr. Michael Chen',
    status: 'Scheduled',
    room: 'Room 1'
  },
  {
    id: 'APT003',
    patientId: 'PT005',
    patientName: 'Jennifer Martinez',
    date: '2025-11-19',
    time: '11:30 AM',
    duration: 30,
    type: 'Follow-up',
    chiropractor: 'Dr. Michael Chen',
    status: 'Scheduled',
    room: 'Room 1'
  },
  {
    id: 'APT004',
    patientId: 'PT002',
    patientName: 'Michael Rodriguez',
    date: '2025-11-20',
    time: '02:00 PM',
    duration: 30,
    type: 'Follow-up',
    chiropractor: 'Dr. Sarah Williams',
    status: 'Scheduled',
    room: 'Room 2'
  },
  {
    id: 'APT005',
    patientId: 'PT007',
    patientName: 'Lisa Wong',
    date: '2025-11-22',
    time: '03:00 PM',
    duration: 45,
    type: 'Initial consultation',
    chiropractor: 'Dr. Michael Chen',
    status: 'Scheduled',
    room: 'Room 1'
  },
  {
    id: 'APT006',
    patientName: 'James Wilson',
    date: '2025-11-16',
    time: '09:00 AM',
    duration: 30,
    type: 'Follow-up',
    chiropractor: 'Dr. Michael Chen',
    status: 'Checked in',
    room: 'Room 1'
  },
  {
    id: 'APT007',
    patientName: 'Patricia Brown',
    date: '2025-11-16',
    time: '10:30 AM',
    duration: 30,
    type: 'Follow-up',
    chiropractor: 'Dr. Sarah Williams',
    status: 'In progress',
    room: 'Room 2'
  },
  {
    id: 'APT008',
    patientName: 'Thomas Davis',
    date: '2025-11-16',
    time: '11:00 AM',
    duration: 30,
    type: 'Follow-up',
    chiropractor: 'Dr. Michael Chen',
    status: 'Scheduled',
    room: 'Room 1'
  },
  {
    id: 'APT009',
    patientName: 'Maria Garcia',
    date: '2025-11-16',
    time: '01:30 PM',
    duration: 45,
    type: 'Initial consultation',
    chiropractor: 'Dr. Sarah Williams',
    status: 'Scheduled',
    room: 'Room 2'
  },
  {
    id: 'APT010',
    patientName: 'Christopher Lee',
    date: '2025-11-16',
    time: '03:00 PM',
    duration: 30,
    type: 'Follow-up',
    chiropractor: 'Dr. Michael Chen',
    status: 'Scheduled',
    room: 'Room 1'
  }
];

export const mockNotes = [
  {
    id: 'NOTE001',
    patientId: 'PT001',
    patientName: 'Sarah Johnson',
    visitId: 'V001',
    date: '2025-11-10',
    time: '10:00 AM',
    visitType: 'Follow-up',
    chiropractor: 'Dr. Michael Chen',
    status: 'Signed',
    subjective: 'Patient reports continued improvement in lower back pain. Pain level reduced from 7/10 to 3/10. Able to perform daily activities with minimal discomfort. Sleeping better at night.',
    objective: 'ROM: Lumbar flexion 80°, extension 20°, lateral flexion 25° bilaterally. Palpation reveals mild tenderness at L4-L5. Muscle tone improved compared to previous visit. No muscle spasms noted.',
    assessment: 'Patient responding well to treatment plan. Significant improvement in pain levels and range of motion. Continue current treatment protocol.',
    plan: 'Continue with spinal adjustments 2x per week for 2 more weeks. Home exercise program: Cat-cow stretches, pelvic tilts, and gentle core strengthening. Follow-up in 1 week. Consider reducing frequency to 1x per week if improvement continues.'
  },
  {
    id: 'NOTE002',
    patientId: 'PT001',
    patientName: 'Sarah Johnson',
    visitId: 'V002',
    date: '2025-11-03',
    time: '10:00 AM',
    visitType: 'Follow-up',
    chiropractor: 'Dr. Michael Chen',
    status: 'Signed',
    subjective: 'Patient reports some improvement in lower back pain. Pain level at 7/10, down from initial 9/10. Still experiencing stiffness in the morning.',
    objective: 'ROM: Lumbar flexion 70°, extension 15°, lateral flexion 20° bilaterally. Palpation reveals moderate tenderness at L4-L5 with mild muscle spasm.',
    assessment: 'Patient showing gradual improvement. Continuing with treatment plan. Monitor progress closely.',
    plan: 'Continue spinal adjustments 2x per week. Ice therapy for 15 minutes post-treatment. Home exercises: gentle stretching and core strengthening. Follow-up in 1 week.'
  },
  {
    id: 'NOTE003',
    patientId: 'PT003',
    patientName: 'Emily Chen',
    visitId: 'V005',
    date: '2025-11-15',
    time: '09:00 AM',
    visitType: 'Initial consultation',
    chiropractor: 'Dr. Michael Chen',
    status: 'Signed',
    subjective: 'Patient presents with right shoulder pain, onset 3 weeks ago after lifting heavy boxes. Pain is sharp and localized to anterior shoulder, rated 8/10. Difficulty raising arm overhead. Pain worse at night.',
    objective: 'ROM: Shoulder flexion 110°, abduction 100°, external rotation 40°. Positive impingement signs. Palpation reveals tenderness over anterior deltoid and supraspinatus insertion. Muscle strength 4/5 in affected arm.',
    assessment: 'Acute shoulder impingement syndrome, likely rotator cuff strain. No signs of tear based on physical examination.',
    plan: 'Begin conservative treatment with gentle mobilization and soft tissue work. Avoid overhead activities for 2 weeks. Ice therapy 3x daily for 15 minutes. Prescribe gentle ROM exercises. Re-evaluate in 1 week. Consider referral for imaging if no improvement after 2 weeks.'
  },
  {
    id: 'NOTE004',
    patientId: 'PT002',
    patientName: 'Michael Rodriguez',
    visitId: 'V004',
    date: '2025-11-14',
    time: '02:00 PM',
    visitType: 'Follow-up',
    chiropractor: 'Dr. Sarah Williams',
    status: 'Draft',
    subjective: 'Patient reports neck stiffness has improved significantly. Pain level now 2/10. Better range of motion when driving and working at computer.',
    objective: 'ROM: Cervical flexion 50°, extension 60°, lateral flexion 40° bilaterally, rotation 70° bilaterally. Minimal tenderness on palpation. Good muscle tone.',
    assessment: 'Excellent response to treatment. Neck mobility restored to near normal. Continue with maintenance care.',
    plan: 'Reduce frequency to 1x per week for 2 weeks, then bi-weekly maintenance. Continue ergonomic adjustments at workstation. Home exercises: neck stretches and postural exercises. Follow-up in 2 weeks.'
  }
];

export const mockStats = {
  todayAppointments: 5,
  newPatientsThisWeek: 2,
  pendingForms: 3,
  appointmentsThisWeek: [
    { day: 'Mon', count: 8 },
    { day: 'Tue', count: 12 },
    { day: 'Wed', count: 10 },
    { day: 'Thu', count: 9 },
    { day: 'Fri', count: 11 },
    { day: 'Sat', count: 4 },
    { day: 'Sun', count: 0 }
  ]
};

export const mockChiropractors = [
  {
    id: 'DOC001',
    name: 'Dr. Michael Chen',
    specialty: 'Sports Chiropractic',
    email: 'mchen@medsheild.com',
    phone: '(555) 111-2222',
    status: 'Active'
  },
  {
    id: 'DOC002',
    name: 'Dr. Sarah Williams',
    specialty: 'Pediatric Chiropractic',
    email: 'swilliams@medsheild.com',
    phone: '(555) 333-4444',
    status: 'Active'
  }
];

export const currentUser = {
  name: 'Dr. Michael Chen',
  role: 'Chiropractor',
  email: 'mchen@medsheild.com',
  avatar: 'MC'
};
