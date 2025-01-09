import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  name: string;
  description: string;
  Icon: LucideIcon;
}

export default function FeatureCard({ name, description, Icon }: FeatureCardProps) {
  return (
    <div className="pt-6">
      <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
          </div>
          <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{name}</h3>
          <p className="mt-5 text-base text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}