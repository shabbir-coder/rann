"use client";
import { useParams } from 'next/navigation';

export default function ActivitiesPage() {
  const param = useParams();
  const { category } = param;

  // Use the category to display different content
  return (
    <div>
      <h1>{ category } Attractions</h1>
      {/* Your content based on category */}
    </div>
  );
}