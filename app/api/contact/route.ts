import {NextResponse} from 'next/server';
export async function POST(req:Request){try{const body=await req.json();if(!body.name||!body.email||!body.message)return NextResponse.json({ok:false,error:'Campos obrigatórios ausentes.'},{status:400});return NextResponse.json({ok:true,message:'Contato recebido.'});}catch{return NextResponse.json({ok:false,error:'Requisição inválida.'},{status:400})}}
