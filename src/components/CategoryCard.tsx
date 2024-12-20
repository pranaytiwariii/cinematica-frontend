import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  href: string;
}

export default function CategoryCard({ title, description, icon: Icon, image, href }: CategoryCardProps) {
  return (
    <Link 
      to={href}
      className="group relative overflow-hidden rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75 z-10" />
      <img
        src={image}
        alt={title}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
        <div className="mb-2 flex items-center gap-2">
          <Icon className="h-6 w-6" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-white/90">{description}</p>
      </div>
    </Link>
  );
}