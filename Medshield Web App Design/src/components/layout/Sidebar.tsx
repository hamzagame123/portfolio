import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  CreditCard, 
  Settings 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from 'figma:asset/f650c96f99f3cc297d58e9635a4a4b2a0d9a63fb.png';

const navigationItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
  { name: 'Patients', icon: Users, path: '/patients' },
  { name: 'Appointments', icon: Calendar, path: '/appointments' },
  { name: 'Notes', icon: FileText, path: '/notes' },
  { name: 'Billing', icon: CreditCard, path: '/billing' },
  { name: 'Settings', icon: Settings, path: '/settings' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Medshield" className="h-8 w-8" />
          <span className="text-gray-900">Medshield</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${isActive 
                  ? 'bg-primary text-white' 
                  : 'text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
