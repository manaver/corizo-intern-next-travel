import {icons} from 'lucide-react';

interface GetIconProps {
    iconName: string;
    attributes?: string;
    size?: number;
}

export default function GetIcon({iconName, attributes = '', size=20}: GetIconProps) {
    const LucideIcon = icons[iconName as keyof typeof icons] ?? icons['HelpCircle'];
    return <LucideIcon size={size} className={attributes}/>;
}