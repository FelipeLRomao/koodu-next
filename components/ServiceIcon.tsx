import * as Icons from "lucide-react";


export default function ServiceIcon({name}:{name:string})
{
    const I=(Icons as any)[name]||Icons.Globe2;
    return  <I size={24}
    />
}
