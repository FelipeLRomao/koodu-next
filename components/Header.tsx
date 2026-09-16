"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";

export default function Header(){
 const [open,setOpen]=useState(false);
 return <header className="site-header"><div className="container nav-wrap">
  <Link href="/" className="brand" onClick={()=>setOpen(false)}><span className="brand-mark">K</span><span>koodu<span className="dot">.</span></span></Link>
  <nav className={open?"nav open":"nav"}>
   <Link href="/" onClick={()=>setOpen(false)}>Início</Link>
   <div className="nav-dropdown"><Link href="/servicos">Serviços <ChevronDown size={15}/></Link><div className="dropdown-menu">{services.slice(0,4).map(s=><Link key={s.slug} href={'/'+s.slug}>{s.title}</Link>)}<Link href="/servicos" className="all-link">Ver todos <ArrowUpRight size={14}/></Link></div></div>
   <Link href="/portfolio" onClick={()=>setOpen(false)}>Portfólio</Link><Link href="/sobre" onClick={()=>setOpen(false)}>Sobre</Link><Link href="/blog" onClick={()=>setOpen(false)}>Conteúdos</Link>
   <Link className="nav-cta" href="/contato" onClick={()=>setOpen(false)}>Fale com a Koodu <ArrowUpRight size={16}/></Link>
  </nav>
  <button className="menu-btn" aria-label="Abrir menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div></header>
}
